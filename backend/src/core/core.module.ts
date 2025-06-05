import { AuthModule } from '../modules/auth/auth.module'
import { TokenModule } from '../modules/auth/token/token.module'
import { ConversionModule } from '../modules/conversion/conversion.module'
import { StorageModule } from '../modules/libs/storage/storage.module'
import { RedisGatewayModule } from '../modules/redis-gateway/redis-gateway.module'
import { UserModule } from '../modules/user/user.module'
import { WebsocketModule } from '../modules/websocket/websocket.module'
import { PrismaModule } from './prisma/prisma.module'
import { RedisModule } from './redis/redis.module'
import { RedisService } from './redis/redis.service'
import { BullModule } from '@nestjs/bullmq'
import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

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
          connection: redisService,
        }
      },
    }),
    WebsocketModule,
    RedisGatewayModule,
  ],
})
export class CoreModule {}
