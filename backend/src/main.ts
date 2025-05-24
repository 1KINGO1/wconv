import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module';
import {ValidationPipe} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  const configurationService = app.get(ConfigService);

  app.setGlobalPrefix('/api')

  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));

  await app.listen(configurationService.getOrThrow<number>('PORT'));
}
bootstrap();
