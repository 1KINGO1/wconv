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
import { BaseImageConversionDto } from '../dto/BaseImageConversion.dto';
import { JobTypeInfo } from '../types/job-type-info';
import { JobTypeCategories } from '../types/job-type-categories';

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
    try {
      const key = this.conversionService.generateS3Key(job.data.fileName);
      const output = await this.storageService.read(key);
      const readable = this.storageService.readResponseIntoReadable(output);
      const buffer = await streamToBuffer(readable);

      const jobName = job.name as JobType;
      const jobConversionTypeInfo = JobTypeInfo[jobName];
      const jobConversionFormat = jobConversionTypeInfo.conversionFormat;
      const options = JSON.parse(job.data.options);

      let responseBuffer: Buffer;
      switch (true) {
        case JobTypeCategories.IMAGE.includes(jobName):
          responseBuffer = await this.handleImageConversion(
            buffer,
            jobConversionFormat,
            options,
          );
          break;
        default:
          throw new Error('Invalid job name');
      }

      if (responseBuffer === null) {
        throw new Error('Conversion failed');
      }

      const convertedFileName =
        `converted-` +
        job.data.fileName.replaceAll(
          /\..+$/g,
          `.${jobConversionTypeInfo.conversionFormat}`,
        );
      const convertedKey =
        this.conversionService.generateS3Key(convertedFileName);
      await this.storageService.upload(
        responseBuffer,
        convertedKey,
        'image/png',
      );

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
      console.log(e);
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

  private async handleImageConversion<T extends BaseImageConversionDto>(
    inputBuffer: Buffer,
    conversionType: string,
    options: T,
  ): Promise<Buffer | null> {
    try {
      const pngBuffer = await sharp(inputBuffer)
        [conversionType]({
          quality: options.quality,
          compressionLevel: options.compressionLevel,
          adaptiveFiltering: true,
        })
        .resize(options.resizeWidth, options.resizeHeight, {
          fit: 'fill',
        })
        .toBuffer();
      return pngBuffer;
    } catch (e) {
      return null;
    }
  }
}
