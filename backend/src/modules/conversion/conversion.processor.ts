import { Job } from 'bullmq'
import { RedisGatewayWebhookMessageBody } from '../../shared/constants/redis-gateway-event-bodies'
import { RedisGatewayEvents } from '../../shared/constants/redis-gateway-events.enum'
import { JobTypeInfo } from './constants/job-type-info'
import { JobType } from './constants/job-type.enum'
import { ConversionService } from './conversion.service'
import { ImageConversionService } from './services/image-conversion.service'
import { Processor, WorkerHost } from '@nestjs/bullmq'
import { PrismaService } from 'src/core/prisma/prisma.service'
import { RedisService } from 'src/core/redis/redis.service'
import { StorageService } from 'src/modules/libs/storage/storage.service'
import { ConversionState } from 'prisma/generated'
import { PdfToDocxConversionService } from './services/pdf-to-docx-conversion.service'
import { DocxToPdfConversionService } from './services/docx-to-pdf-conversion.service'
import * as path from 'path'
import { tmpdir } from 'os'
import { randomUUID } from 'crypto'
import * as fsCommon from 'fs'
import { pipeline } from 'stream/promises'
import { JobTypeCategories } from './constants/job-type-categories'
import { BaseImageConversionDto } from './dto/BaseImageConversion.dto'
import { AudioConversionService } from './services/audio-conversion.service'

const fs = fsCommon.promises;

@Processor('conversion')
export class ConversionProcessor extends WorkerHost {
  private readonly CONVERSION_STATE_CHANGE_EVENT_NAME: string = 'conversion-state-update'

  constructor(
    private readonly storageService: StorageService,
    private readonly prismaService: PrismaService,
    private readonly conversionService: ConversionService,
    private readonly redisService: RedisService,

    private readonly imageConversionService: ImageConversionService,
    private readonly audioConversionService: AudioConversionService,
    private readonly pdfToDocxConversionService: PdfToDocxConversionService,
    private readonly docxToPdfConversionService: DocxToPdfConversionService,
  ) {
    super()
  }

  async process(job: Job) {
    const tempDir = await this.createTempDir();
    try {
      const {
        key,
        jobName,
        jobConversionFormat,
        conversionOptions,
        jobConversionTypeInfo,
        inputPath, outputPath
      } = await this.extractJobInfo(job, tempDir);

      await this.writeInputFileToTemp(key, inputPath);

      await this.convertByJobName(
        jobName,
        inputPath,
        outputPath,
        jobConversionFormat,
        conversionOptions
      );

      const convertedFileName =
        `converted-` +
        job.data.fileName.replaceAll(/\..+$/g, `.${jobConversionTypeInfo.conversionFormat}`)
      const convertedKey = this.conversionService.generateS3Key(convertedFileName)

      const responseStream = fsCommon.createReadStream(outputPath);
      await this.storageService.upload(responseStream, convertedKey)

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
      console.log(e);
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
    finally {
      await this.removeTempDir(tempDir);
    }
  }

  private async convertByJobName(
    jobName: JobType,
    inputPath: string,
    outputPath: string,
    jobConversionFormat: string,
    options: Record<string, any>,
  ) {
    switch (true) {
      case JobTypeCategories.IMAGE.includes(jobName):
        return this.imageConversionService.processImage(
          inputPath,
          outputPath,
          jobConversionFormat,
          options as BaseImageConversionDto,
        )
      case JobTypeCategories.AUDIO.includes(jobName):
        return this.audioConversionService.processAudio(
          inputPath,
          outputPath,
          jobConversionFormat,
        )
      case jobName === JobType.PDF_TO_DOCX:
        return await this.pdfToDocxConversionService.processPdfToDocx(inputPath, outputPath)
      case jobName === JobType.DOCX_TO_PDF:
        return await this.docxToPdfConversionService.processDocxToPdf(inputPath, outputPath)
      default:
        throw new Error('Invalid job name')
    }
  }
  private async createTempDir() {
    const tempDir = path.join(tmpdir(), `convert-${randomUUID()}`);
    await fs.mkdir(tempDir, { recursive: true });

    return tempDir;
  }
  private async removeTempDir(tempDir: string) {
    await fs.rm(tempDir, { recursive: true, force: true }).catch(() => null);
  }
  private async extractJobInfo(job: Job, tempDir: string) {
    const key = this.conversionService.generateS3Key(job.data.fileName)

    const jobName = job.name as JobType
    const jobConversionTypeInfo = JobTypeInfo[jobName]
    const jobConversionFormat = jobConversionTypeInfo.conversionFormat
    const conversionOptions = JSON.parse(job.data.options)

    const { inputPath, outputPath } = this.createTempFiles(tempDir, job.data.fileName, jobConversionFormat);

    return {
      key,
      jobName,
      jobConversionFormat,
      jobConversionTypeInfo,
      conversionOptions,
      inputPath,
      outputPath,
    }
  }
  private createTempFiles(tempDir: string, fileName: string, jobConversionFormat: string) {
    const inputPath = path.join(tempDir, fileName);
    const outputPath = path.join(tempDir, randomUUID() + `.${jobConversionFormat}`);

    return { inputPath, outputPath }
  }
  private async writeInputFileToTemp(s3Key: string, inputPath: string){
    const output = await this.storageService.read(s3Key)
    const readable = this.storageService.readResponseIntoReadable(output)

    const writeSteam = fsCommon.createWriteStream(inputPath);
    await pipeline(readable, writeSteam);
  }
}
