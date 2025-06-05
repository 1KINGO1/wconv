import { Global, Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { TokenService } from './token.service'

@Global()
@Module({
  providers: [TokenService],
  imports: [JwtModule.register({})],
  exports: [TokenService],
})
export class TokenModule {}
