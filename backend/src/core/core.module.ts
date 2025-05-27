import { Global, Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../modules/auth/auth.module';
import { UserModule } from '../modules/user/user.module';
import { TokenModule } from '../modules/auth/token/token.module';
import { ConversionModule } from '../modules/conversion/conversion.module';
import { StorageModule } from '../modules/libs/storage/storage.module';
import { RedisModule } from './redis/redis.module';
import { BullModule } from '@nestjs/bullmq';
import { RedisService } from './redis/redis.service';
import { WebsocketModule } from '../modules/websocket/websocket.module';
import { RedisGatewayModule } from '../modules/redis-gateway/redis-gateway.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    TokenModule,
    ConversionModule,
    StorageModule,
    RedisModule,
    BullModule.forRootAsync({
      inject: [RedisService],
      imports: [RedisModule],
      useFactory: (redisService: RedisService) => {
        return {
          connection: redisService
        }
      }
    }),
    WebsocketModule,
    RedisGatewayModule
  ],
})
export class CoreModule {}
