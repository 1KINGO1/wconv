import { Module } from '@nestjs/common';
import { ConversionService } from './conversion.service';
import { ConversionController } from './conversion.controller';
import { StorageModule } from '../libs/storage/storage.module';
import { BullModule } from '@nestjs/bullmq';
import { ConversionProcessor } from './processors/conversion.processor';
import { WebsocketModule } from '../websocket/websocket.module';
import { JpgController } from './controllers/jpg.controller';
import { PngController } from './controllers/png.controller';
import { AvifController } from './controllers/avif.controller';
import { GifController } from './controllers/gif.controller';
import { WebpController } from './controllers/webp.controller';

@Module({
  controllers: [
    ConversionController,
    JpgController,
    PngController,
    AvifController,
    GifController,
    WebpController,
  ],
  providers: [ConversionService, ConversionProcessor],
  imports: [
    StorageModule,
    BullModule.registerQueue({
      name: 'conversion',
    }),
    WebsocketModule,
  ],
})
export class ConversionModule {}
