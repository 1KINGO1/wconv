import * as ffmpeg from 'fluent-ffmpeg'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AudioConversionService {
  async processAudio<T extends {}>(
    inputPath: string,
    outputPath: string,
    conversionType: string,
  ) {
    return new Promise((resolve, reject) => {
      const fm = ffmpeg(inputPath)
        .output(outputPath)
        .on('end', () => {
          resolve(outputPath);
        })
        .on('error', (err) => {
          reject(err);
        });

      if (conversionType === 'aac') {
        fm.audioCodec(conversionType);
      }

      fm.run();
    })
  }
}
