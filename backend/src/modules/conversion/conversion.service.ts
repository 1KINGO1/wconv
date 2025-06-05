import { Queue } from 'bullmq'
import { Response } from 'express'

import { PrismaService } from '../../core/prisma/prisma.service'
import { StorageService } from '../libs/storage/storage.service'
import { JobTypeInfo } from './constants/job-type-info'
import { JobType } from './constants/job-type.enum'
import { JobPayload } from './types/job-payload'
import { InjectQueue } from '@nestjs/bullmq'
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ConversionState, User } from 'prisma/generated'

@Injectable()
export class ConversionService {
  private readonly S3_FILES_FOLDER_PREFIX: string

  constructor(
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
    @InjectQueue('conversion') private readonly conversionQueue: Queue,
  ) {
    this.S3_FILES_FOLDER_PREFIX = this.configService.getOrThrow<string>('S3_FILES_FOLDER') + '/'
  }

  async getUserConversions(user: User) {
    return this.prismaService.conversion.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 30,
    })
  }

  async convert(file: Express.Multer.File, jobType: JobType, options: Record<string, any>, user: User) {
    const jobTypeInfo = JobTypeInfo[jobType]
    const fileName = await this.uploadFileToS3(file)

    const conversion = await this.prismaService.conversion.create({
      data: {
        state: ConversionState.PENDING,
        fileFromName: fileName,
        fileFromFormat: jobTypeInfo.conversionFromFormat,
        fileToFormat: jobTypeInfo.conversionToFormat,
        userId: user.id,
      },
    })

    const payload: JobPayload = {
      fileName: fileName,
      conversionId: conversion.id,
      userId: user.id,
      options: JSON.stringify(options),
    }
    await this.conversionQueue.add(jobType, payload)

    return {
      conversion,
      fileName,
      url:
        this.configService.getOrThrow<string>('APPLICATION_URL') +
        `/api/conversion/files/${encodeURIComponent(fileName)}`,
    }
  }
  async streamFileByName(key: string, res: Response) {
    try {
      const response = await this.storageService.read(`${this.S3_FILES_FOLDER_PREFIX}${key}`)

      res.set({
        'Content-Type': response.ContentType,
        'Content-Length': response.ContentLength,
        'Cache-Control': 'public, max-age=3600',
        ETag: response.ETag,
        'Last-Modified': response.LastModified.toISOString(),
      })

      const readable = this.storageService.readResponseIntoReadable(response)
      readable.pipe(res)
    } catch (e) {
      if (e.hasOwnProperty('Code') && e['Code'] === 'NoSuchKey') {
        throw new NotFoundException('File not found')
      }
      throw new InternalServerErrorException(e.message)
    }
  }

  generateFileName(originalName: string) {
    return `${Date.now()}-${originalName}`
  }
  generateS3Key(fileName: string) {
    return this.S3_FILES_FOLDER_PREFIX + fileName
  }

  private decodeFileName(fileName: string) {
    try {
      return Buffer.from(fileName, 'latin1').toString('utf8')
    } catch (e) {
      throw new InternalServerErrorException('Invalid file name encoding')
    }
  }
  private async uploadFileToS3(file: Express.Multer.File) {
    const decodedFileName = this.decodeFileName(file.originalname)
    const fileName = this.generateFileName(decodedFileName)
    const s3Key = this.generateS3Key(fileName)
    await this.storageService.upload(file.buffer, s3Key, file.mimetype)

    return fileName
  }
}
