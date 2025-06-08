import { Request } from 'express'

import { Auth } from '../../../shared/decorators/auth.decorator'
import { JobType } from '../constants/job-type.enum'
import { ConversionService } from '../conversion.service'
import { File } from '../decorators/file.decorator'
import { FileInterceptor } from '../decorators/file.interceptor'
import { Controller, Post, Req } from '@nestjs/common'

const fileFormatRegex = /audio\/ogg/

@Controller('conversion/convert')
export class OggController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('ogg-to-mp3')
  @FileInterceptor()
  async convertOggToMp3(
    @File(100, fileFormatRegex) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.OGG_TO_MP3, {}, req.user)
  }

  @Auth()
  @Post('ogg-to-aac')
  @FileInterceptor()
  async convertOggToAac(
    @File(100, fileFormatRegex) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.OGG_TO_AAC, {}, req.user)
  }

  @Auth()
  @Post('ogg-to-wav')
  @FileInterceptor()
  async convertOggToWav(
    @File(100, fileFormatRegex) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.OGG_TO_WAV, {}, req.user)
  }

  @Auth()
  @Post('ogg-to-flac')
  @FileInterceptor()
  async convertOggToFlac(
    @File(100, fileFormatRegex) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.OGG_TO_FLAC, {}, req.user)
  }
}
