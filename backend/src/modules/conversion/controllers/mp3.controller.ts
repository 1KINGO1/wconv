import { Request } from 'express'

import { Auth } from '../../../shared/decorators/auth.decorator'
import { JobType } from '../constants/job-type.enum'
import { ConversionService } from '../conversion.service'
import { File } from '../decorators/file.decorator'
import { FileInterceptor } from '../decorators/file.interceptor'
import { Controller, Post, Req } from '@nestjs/common'

@Controller('conversion/convert')
export class Mp3Controller {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('mp3-to-aac')
  @FileInterceptor()
  async convertMp3ToAac(
    @File(100, /audio\/mpeg/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.MP3_TO_AAC, {}, req.user)
  }

  @Auth()
  @Post('mp3-to-wav')
  @FileInterceptor()
  async convertMp3ToWav(
    @File(100, /audio\/mpeg/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.MP3_TO_WAV, {}, req.user)
  }

  @Auth()
  @Post('mp3-to-ogg')
  @FileInterceptor()
  async convertMp3ToOgg(
    @File(100, /audio\/mpeg/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.MP3_TO_OGG, {}, req.user)
  }

  @Auth()
  @Post('mp3-to-flac')
  @FileInterceptor()
  async convertMp3ToFlac(
    @File(100, /audio\/mpeg/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.MP3_TO_FLAC, {}, req.user)
  }
}
