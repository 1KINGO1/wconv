import * as sharp from 'sharp'

import { BaseImageConversionDto } from '../dto/BaseImageConversion.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ImageConversionService {
  async processImage<T extends BaseImageConversionDto>(
    inputBuffer: Buffer,
    conversionType: string,
    options: T,
  ) {
    try {
      const responseBuffer = await sharp(inputBuffer)
        [conversionType]({
          quality: options.quality,
          compressionLevel: options.compressionLevel,
          adaptiveFiltering: true,
        })
        .resize(options.resizeWidth, options.resizeHeight, {
          fit: 'fill',
        })
        .toBuffer()
      return responseBuffer
    } catch (e) {
      return null
    }
  }
}
