import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {GoogleStrategy} from './strategies/google.strategy';
import {PassportModule} from '@nestjs/passport';
import { TokenModule } from './token/token.module';

@Global()
@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
  exports: [AuthService],
})
export class AuthModule {}
