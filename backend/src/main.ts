import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'

import { CoreModule } from './core/core.module'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(CoreModule)
  const configurationService = app.get(ConfigService)

  app.setGlobalPrefix('/api')

  app.use(cookieParser())

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  const isProduction = configurationService.get<boolean>('NODE_ENV')
  if (isProduction) {
    app.set('trust proxy', 1)
  }

  const allowedOrigins = configurationService.getOrThrow<string>('CORS').split(',');
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    }),
  )

  await app.listen(configurationService.getOrThrow<number>('PORT'))
}
bootstrap()
