import { Request } from 'express'

import { Auth } from '../../../shared/decorators/auth.decorator'
import { JobType } from '../constants/job-type.enum'
import { ConversionService } from '../conversion.service'
import { File } from '../decorators/file.decorator'
import { FileInterceptor } from '../decorators/file.interceptor'
import { Controller, Post, Req } from '@nestjs/common'

const fileRegex = /(audio\/vnd\.dlna\.adts)|(audio\/aac)/

@Controller('conversion/convert')
export class AacController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('aac-to-mp3')
  @FileInterceptor()
  async convertAacToMp3(
    @File(100, fileRegex) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.AAC_TO_MP3, {}, req.user)
  }

  @Auth()
  @Post('aac-to-wav')
  @FileInterceptor()
  async convertAacToWav(
    @File(100, fileRegex) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.AAC_TO_WAV, {}, req.user)
  }

  @Auth()
  @Post('aac-to-ogg')
  @FileInterceptor()
  async convertAacToOgg(
    @File(100, fileRegex) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.AAC_TO_OGG, {}, req.user)
  }

  @Auth()
  @Post('aac-to-flac')
  @FileInterceptor()
  async convertAacToFlac(
    @File(100, fileRegex) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.AAC_TO_FLAC, {}, req.user)
  }
}
