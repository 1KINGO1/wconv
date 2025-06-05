import { Job } from 'bullmq'
import { RedisGatewayWebhookMessageBody } from '../../shared/constants/redis-gateway-event-bodies'
import { RedisGatewayEvents } from '../../shared/constants/redis-gateway-events.enum'
import { streamToBuffer } from '../../shared/utils/stream-to-buffer'
import { JobTypeCategories } from './constants/job-type-categories'
import { JobTypeInfo } from './constants/job-type-info'
import { JobType } from './constants/job-type.enum'
import { ConversionService } from './conversion.service'
import { BaseImageConversionDto } from './dto/BaseImageConversion.dto'
import { ImageConversionService } from './services/image-conversion.service'
import { Processor, WorkerHost } from '@nestjs/bullmq'
import { PrismaService } from 'src/core/prisma/prisma.service'
import { RedisService } from 'src/core/redis/redis.service'
import { StorageService } from 'src/modules/libs/storage/storage.service'
import { ConversionState } from 'prisma/generated'
import { PdfToDocxConversionService } from './services/pdf-to-docx-conversion.service'

@Processor('conversion')
export class ConversionProcessor extends WorkerHost {
  private readonly CONVERSION_STATE_CHANGE_EVENT_NAME: string = 'conversion-state-update'

  constructor(
    private readonly storageService: StorageService,
    private readonly prismaService: PrismaService,
    private readonly conversionService: ConversionService,
    private readonly redisService: RedisService,
    private readonly imageConversionService: ImageConversionService,
    private readonly pdfToDocxConversionService: PdfToDocxConversionService,
  ) {
    super()
  }

  async process(job: Job) {
    try {
      const {
        jobName,
        fileBuffer,
        jobConversionFormat,
        conversionOptions,
        jobConversionTypeInfo,
      } = await this.extractJobInfo(job)

      let responseBuffer: Buffer = await this.convertByJobName(
        jobName,
        fileBuffer,
        jobConversionFormat,
        conversionOptions,
      )
      if (responseBuffer === null) {
        throw new Error('Conversion failed')
      }

      const convertedFileName =
        `converted-` +
        job.data.fileName.replaceAll(/\..+$/g, `.${jobConversionTypeInfo.conversionFormat}`)
      const convertedKey = this.conversionService.generateS3Key(convertedFileName)
      await this.storageService.upload(responseBuffer, convertedKey)

      const updatedConversion = await this.prismaService.conversion.update({
        where: {
          id: job.data.conversionId,
        },
        data: {
          state: ConversionState.SUCCESS,
          fileToName: convertedFileName,
        },
      })

      const body: RedisGatewayWebhookMessageBody = {
        userId: job.data.userId,
        eventName: this.CONVERSION_STATE_CHANGE_EVENT_NAME,
        body: {
          conversion: updatedConversion,
          state: ConversionState.SUCCESS,
        },
      }
      await this.redisService.publish(RedisGatewayEvents.WEBSOCKET_MESSAGE, JSON.stringify(body))
    } catch (e) {
      console.log(e)
      const updatedConversion = await this.prismaService.conversion.update({
        where: {
          id: job.data.conversionId,
        },
        data: {
          state: ConversionState.FAILED,
        },
      })
      const body: RedisGatewayWebhookMessageBody = {
        userId: job.data.userId,
        eventName: this.CONVERSION_STATE_CHANGE_EVENT_NAME,
        body: {
          conversion: updatedConversion,
          state: ConversionState.FAILED,
        },
      }
      await this.redisService.publish(RedisGatewayEvents.WEBSOCKET_MESSAGE, JSON.stringify(body))
    }
  }
  private async convertByJobName(
    jobName: JobType,
    buffer: Buffer,
    jobConversionFormat: string,
    options: Record<string, any>,
  ) {
    switch (true) {
      case JobTypeCategories.IMAGE.includes(jobName):
        return this.imageConversionService.processImage(
          buffer,
          jobConversionFormat,
          options as BaseImageConversionDto,
        )
        break
      case JobTypeCategories.DOCUMENT.includes(jobName):
        return await this.pdfToDocxConversionService.processPdfToDocx(buffer, jobConversionFormat)
        break
      default:
        throw new Error('Invalid job name')
    }
  }
  private async extractJobInfo(job: Job) {
    const key = this.conversionService.generateS3Key(job.data.fileName)
    const output = await this.storageService.read(key)
    const readable = this.storageService.readResponseIntoReadable(output)
    const fileBuffer = await streamToBuffer(readable)

    const jobName = job.name as JobType
    const jobConversionTypeInfo = JobTypeInfo[jobName]
    const jobConversionFormat = jobConversionTypeInfo.conversionFormat
    const conversionOptions = JSON.parse(job.data.options)

    return {
      key,
      output,
      readable,
      fileBuffer,
      jobName,
      jobConversionFormat,
      jobConversionTypeInfo,
      conversionOptions,
    }
  }
}
