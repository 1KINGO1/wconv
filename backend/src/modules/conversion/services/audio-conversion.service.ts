import * as ffmpeg from 'fluent-ffmpeg'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AudioConversionService {
  async processAudio<T extends {}>(
    inputPath: string,
    outputPath: string,
    conversionType: string,
    options: T,
  ) {
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .toFormat(conversionType)
        .on('end', () => {
          resolve(outputPath);
        })
        .on('error', (err) => {
          reject(err);
        })
        .saveToFile(outputPath);
    })
  }
}
