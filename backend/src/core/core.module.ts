import {Global, Module} from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from '../modules/auth/auth.module';
import {UserModule} from '../modules/user/user.module';
import { TokenModule } from '../modules/auth/token/token.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule,
    UserModule,
    TokenModule,
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
