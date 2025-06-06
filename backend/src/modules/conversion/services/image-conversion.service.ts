import * as sharp from 'sharp'

import { BaseImageConversionDto } from '../dto/BaseImageConversion.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ImageConversionService {
  async processImage<T extends BaseImageConversionDto>(
    inputPath: string,
    outputPath: string,
    conversionType: string,
    options: T,
  ) {
    try {
      await sharp(inputPath)
        [conversionType]({
          quality: options.quality,
          compressionLevel: options.compressionLevel,
          adaptiveFiltering: true,
        })
        .resize(options.resizeWidth, options.resizeHeight, {
          fit: 'fill',
        })
        .toFile(outputPath)
    } catch (e) {
      throw new Error(e);
    }
  }
}
