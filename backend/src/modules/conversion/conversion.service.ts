import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { StorageService } from '../libs/storage/storage.service';
import { Response } from 'express';
import { Readable } from 'stream';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConversionService {
  private readonly S3_FILES_FOLDER_PREFIX: string;

  constructor(
    private readonly storageService: StorageService,
    private readonly configService: ConfigService
  ) {
    this.S3_FILES_FOLDER_PREFIX = this.configService.getOrThrow<string>('S3_FILES_FOLDER') + '/';
  }

  async convertJpgToPng(file: Express.Multer.File) {
    const fileName = await this.uploadFileToS3(file);

    return {
      fileName,
      url: this.configService.getOrThrow<string>("APPLICATION_URL") + `/api/conversion/files/${fileName}`,
    }
  }
  async streamFileByName(key: string, res: Response) {
    try {
      const response = await this.storageService.read(`${this.S3_FILES_FOLDER_PREFIX}${key}`);

      res.set({
        'Content-Type': response.ContentType,
        'Content-Length': response.ContentLength,
        'Cache-Control': 'public, max-age=3600',
        'ETag': response.ETag,
        'Last-Modified': response.LastModified.toISOString(),
      });

      if (response.Body instanceof Readable) {
        response.Body.pipe(res);
      } else {
        const readable = Readable.from(response.Body as unknown as Uint8Array);
        readable.pipe(res);
      }
    } catch (e) {
      if (e.hasOwnProperty('Code') && e['Code'] === 'NoSuchKey') {
        throw new NotFoundException('File not found');
      }
      throw new InternalServerErrorException(e.message);
    }
  }

  private async uploadFileToS3(file: Express.Multer.File) {
    const fileName = this.generateFileName(file.originalname);
    const s3Key = this.S3_FILES_FOLDER_PREFIX + fileName;
    await this.storageService.upload(file.buffer, s3Key, file.mimetype);

    return fileName;
  }

  private generateFileName(originalName: string) {
    return `${Date.now()}-${originalName}`;
  }
}
