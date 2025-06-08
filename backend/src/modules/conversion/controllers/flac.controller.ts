import { Request } from 'express'

import { Auth } from '../../../shared/decorators/auth.decorator'
import { JobType } from '../constants/job-type.enum'
import { ConversionService } from '../conversion.service'
import { File } from '../decorators/file.decorator'
import { FileInterceptor } from '../decorators/file.interceptor'
import { Controller, Post, Req } from '@nestjs/common'

@Controller('conversion/convert')
export class FlacController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('flac-to-mp3')
  @FileInterceptor()
  async convertFlacToMp3(
    @File(100, /audio\/(x-)?flac/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.FLAC_TO_MP3, {}, req.user)
  }

  @Auth()
  @Post('flac-to-aac')
  @FileInterceptor()
  async convertFlacToAac(
    @File(100, /audio\/(x-)?flac/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.FLAC_TO_AAC, {}, req.user)
  }

  @Auth()
  @Post('flac-to-wav')
  @FileInterceptor()
  async convertFlacToWav(
    @File(100, /audio\/(x-)?flac/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.FLAC_TO_WAV, {}, req.user)
  }

  @Auth()
  @Post('flac-to-ogg')
  @FileInterceptor()
  async convertFlacToOgg(
    @File(100, /audio\/(x-)?flac/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.FLAC_TO_OGG, {}, req.user)
  }
}
