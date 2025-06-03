import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { StorageService } from '../libs/storage/storage.service';
import { Response } from 'express';
import { Readable } from 'stream';
import { ConfigService } from '@nestjs/config';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../../core/prisma/prisma.service';
import { ConversionFormat, ConversionState, User } from 'prisma/generated';
import { JobPayload } from './types/job-payload';
import { JobType } from './types/job-type.enum';
import { JpgToPngDto } from './dto/JpgToPng.dto';

@Injectable()
export class ConversionService {
  private readonly S3_FILES_FOLDER_PREFIX: string;

  constructor(
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
    @InjectQueue('conversion') private readonly conversionQueue: Queue,
  ) {
    this.S3_FILES_FOLDER_PREFIX =
      this.configService.getOrThrow<string>('S3_FILES_FOLDER') + '/';
  }

  async convertJpgToPng(file: Express.Multer.File, options: JpgToPngDto, user: User) {
    const fileName = await this.uploadFileToS3(file);

    const conversion = await this.prismaService.conversion.create({
      data: {
        state: ConversionState.PENDING,
        fileFromName: fileName,
        fileFromFormat: ConversionFormat.JPG,
        fileToFormat: ConversionFormat.PNG,
        userId: user.id,
      },
    });

    const payload: JobPayload = {
      fileName: fileName,
      conversionId: conversion.id,
      userId: user.id,
      options: JSON.stringify(options)
    };
    await this.conversionQueue.add(JobType.JPG_TO_PNG, payload);

    return {
      conversion,
      fileName,
      url:
        this.configService.getOrThrow<string>('APPLICATION_URL') +
        `/api/conversion/files/${fileName}`,
    };
  }
  async streamFileByName(key: string, res: Response) {
    try {
      const response = await this.storageService.read(
        `${this.S3_FILES_FOLDER_PREFIX}${key}`,
      );

      res.set({
        'Content-Type': response.ContentType,
        'Content-Length': response.ContentLength,
        'Cache-Control': 'public, max-age=3600',
        ETag: response.ETag,
        'Last-Modified': response.LastModified.toISOString(),
      });

      const readable = this.storageService.readResponseIntoReadable(response);
      readable.pipe(res);
    } catch (e) {
      if (e.hasOwnProperty('Code') && e['Code'] === 'NoSuchKey') {
        throw new NotFoundException('File not found');
      }
      throw new InternalServerErrorException(e.message);
    }
  }
  async getUserConversions(user: User) {
    return this.prismaService.conversion.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 30
    });
  }

  generateFileName(originalName: string) {
    return `${Date.now()}-${originalName}`;
  }
  generateS3Key(fileName: string) {
    return this.S3_FILES_FOLDER_PREFIX + fileName;
  }

  private async uploadFileToS3(file: Express.Multer.File) {
    const fileName = this.generateFileName(file.originalname);
    const s3Key = this.generateS3Key(fileName);
    await this.storageService.upload(file.buffer, s3Key, file.mimetype);

    return fileName;
  }
}
