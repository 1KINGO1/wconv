import { Module } from '@nestjs/common';
import { ConversionService } from './conversion.service';
import { ConversionController } from './conversion.controller';
import { StorageModule } from '../libs/storage/storage.module';

@Module({
  controllers: [ConversionController],
  providers: [ConversionService],
  imports: [StorageModule],
})
export class ConversionModule {}
