import {Global, Module} from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from '../modules/auth/auth.module';
import {UserModule} from '../modules/user/user.module';
import { TokenModule } from '../modules/auth/token/token.module';
import { ConversionModule } from '../modules/conversion/conversion.module';
import { StorageModule } from '../modules/libs/storage/storage.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule,
    UserModule,
    TokenModule,
    ConversionModule,
    StorageModule,
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
