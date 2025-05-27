import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService extends Redis implements OnModuleInit, OnModuleDestroy {
  public subscriber: Redis;

  constructor(configService: ConfigService) {
    const options = {
      host: configService.getOrThrow<string>('REDIS_HOST'),
      port: configService.getOrThrow<number>('REDIS_PORT'),
      maxRetriesPerRequest: null,
    };

    super(options);

    this.subscriber = new Redis(options);
  }

  async onModuleInit() {
    // await this.connect();
    // await this.subscriber.connect();
  }

  async onModuleDestroy() {
    await this.subscriber.quit();
    await this.quit();
  }
}
