import { StorageModule } from '../libs/storage/storage.module'
import { WebsocketModule } from '../websocket/websocket.module'
import { AvifController } from './controllers/avif.controller'
import { GifController } from './controllers/gif.controller'
import { JpgController } from './controllers/jpg.controller'
import { PdfController } from './controllers/pdf.controller'
import { PngController } from './controllers/png.controller'
import { WebpController } from './controllers/webp.controller'
import { ConversionProcessor } from './conversion.processor'
import { ImageConversionService } from './services/image-conversion.service'
import { BullModule } from '@nestjs/bullmq'
import { Module } from '@nestjs/common'

import { ConversionController } from './conversion.controller'
import { ConversionService } from './conversion.service'
import { PdfToDocxConversionService } from './services/pdf-to-docx-conversion.service'
import { DocxToPdfConversionService } from './services/docx-to-pdf-conversion.service'
import { DocxController } from './controllers/docx.controller'
import { AacController } from './controllers/aac.controller'
import { FlacController } from './controllers/flac.controller'
import { Mp3Controller } from './controllers/mp3.controller'
import { WavController } from './controllers/wav.controller'
import { OggController } from './controllers/ogg.controller'
import { AudioConversionService } from './services/audio-conversion.service'

@Module({
  controllers: [
    ConversionController,
    JpgController,
    PngController,
    AvifController,
    GifController,
    WebpController,
    PdfController,
    DocxController,
    AacController,
    AvifController,
    FlacController,
    Mp3Controller,
    OggController,
    WavController
  ],
  providers: [
    ConversionService,
    ConversionProcessor,
    ImageConversionService,
    PdfToDocxConversionService,
    DocxToPdfConversionService,
    AudioConversionService
  ],
  imports: [
    StorageModule,
    BullModule.registerQueue({
      name: 'conversion',
    }),
    WebsocketModule,
  ],
})
export class ConversionModule {
}
