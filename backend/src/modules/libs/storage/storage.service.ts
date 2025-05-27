import {
  GetObjectCommand,
  PutObjectCommand,
  PutObjectCommandInput,
  GetObjectCommandInput,
  S3Client, GetObjectCommandOutput,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';

@Injectable()
export class StorageService {
  private readonly client: S3Client;
  private readonly bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this.client = new S3Client({
      region: this.configService.getOrThrow<string>('S3_REGION'),
      credentials: {
        accessKeyId: this.configService.getOrThrow<string>('S3_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.getOrThrow<string>(
          'S3_SECRET_ACCESS_KEY',
        ),
      },
    });

    this.bucketName = this.configService.getOrThrow<string>('S3_BUCKET_NAME');
  }

  async upload(buffer: Buffer, key: string, mimetype: string) {
    const command: PutObjectCommandInput = {
      Bucket: this.bucketName,
      Key: String(key),
      Body: buffer,
      ContentType: mimetype,
    };

    try {
      await this.client.send(new PutObjectCommand(command));
    } catch (error) {
      throw error;
    }
  }
  async read(key: string) {
    const command: GetObjectCommandInput = {
      Bucket: this.bucketName,
      Key: key,
    };

    try {
      const response = await this.client.send(new GetObjectCommand(command));
      return response;
    } catch (error) {
      throw error;
    }
  }

  readResponseIntoReadable(output: GetObjectCommandOutput): Readable {
    if (output.Body instanceof Readable) {
      return output.Body
    } else {
      return Readable.from(output.Body as unknown as Uint8Array);
    }
  }
}
