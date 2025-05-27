import { Module } from '@nestjs/common';
import { ConversionService } from './conversion.service';
import { ConversionController } from './conversion.controller';
import { StorageModule } from '../libs/storage/storage.module';
import { BullModule } from '@nestjs/bullmq';
import { ConversionProcessor } from './processors/conversion.processor';
import { WebsocketModule } from '../websocket/websocket.module';

@Module({
  controllers: [ConversionController],
  providers: [ConversionService, ConversionProcessor],
  imports: [
    StorageModule,
    BullModule.registerQueue({
      name: 'conversion'
    }),
    WebsocketModule
  ],
})
export class ConversionModule {}
