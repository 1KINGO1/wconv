import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { JobPayload } from '../types/job-payload';
import { JobType } from '../types/job-type.enum';
import { StorageService } from 'src/modules/libs/storage/storage.service';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ConversionState } from 'prisma/generated';
import * as sharp from 'sharp';
import { streamToBuffer } from '../../../shared/utils/stream-to-buffer';
import { ConversionService } from '../conversion.service';
import { RedisGatewayWebhookMessageBody } from '../../../shared/constants/redis-gateway-event-bodies';
import { RedisService } from 'src/core/redis/redis.service';
import { RedisGatewayEvents } from '../../../shared/constants/redis-gateway-events.enum';

@Processor('conversion')
export class ConversionProcessor extends WorkerHost {
  private readonly CONVERSION_STATE_CHANGE_EVENT_NAME: string =
    'conversion-state-update';

  constructor(
    private readonly storageService: StorageService,
    private readonly prismaService: PrismaService,
    private readonly conversionService: ConversionService,
    private readonly redisService: RedisService,
  ) {
    super();
  }

  async process(job: Job<JobPayload, any, string>): Promise<any> {
    switch (job.name) {
      case JobType.JPG_TO_PNG:
        await this.handleJpgToPng(job);
        break;
      default:
        throw new Error('Invalid job name');
    }
  }

  private async handleJpgToPng(job: Job<JobPayload, any, string>) {
    try {
      const key = this.conversionService.generateS3Key(job.data.fileName);

      const output = await this.storageService.read(key);
      const readable = this.storageService.readResponseIntoReadable(output);
      const buffer = await streamToBuffer(readable);

      const pngBuffer = await sharp(buffer).png().toBuffer();

      const convertedFileName =
        `converted-` + job.data.fileName.replaceAll(/\.jpe?g$/g, '.png');
      const convertedKey =
        this.conversionService.generateS3Key(convertedFileName);
      await this.storageService.upload(pngBuffer, convertedKey, 'image/png');

      const updatedConversion = await this.prismaService.conversion.update({
        where: {
          id: job.data.conversionId,
        },
        data: {
          state: ConversionState.SUCCESS,
          fileToName: convertedFileName,
        },
      });

      const body: RedisGatewayWebhookMessageBody = {
        userId: job.data.userId,
        eventName: this.CONVERSION_STATE_CHANGE_EVENT_NAME,
        body: {
          conversion: updatedConversion,
          state: ConversionState.SUCCESS,
        },
      };

      await this.redisService.publish(
        RedisGatewayEvents.WEBSOCKET_MESSAGE,
        JSON.stringify(body),
      );
    } catch (e) {
      const updatedConversion = await this.prismaService.conversion.update({
        where: {
          id: job.data.conversionId,
        },
        data: {
          state: ConversionState.FAILED,
        },
      });

      const body: RedisGatewayWebhookMessageBody = {
        userId: job.data.userId,
        eventName: this.CONVERSION_STATE_CHANGE_EVENT_NAME,
        body: {
          conversion: updatedConversion,
          state: ConversionState.FAILED,
        },
      };

      await this.redisService.publish(
        RedisGatewayEvents.WEBSOCKET_MESSAGE,
        JSON.stringify(body),
      );
    }
  }
}
