import { Request } from 'express'

import { Auth } from '../../../shared/decorators/auth.decorator'
import { JobType } from '../constants/job-type.enum'
import { ConversionService } from '../conversion.service'
import { File } from '../decorators/file.decorator'
import { FileInterceptor } from '../decorators/file.interceptor'
import { Controller, Post, Req } from '@nestjs/common'

@Controller('conversion/convert')
export class WavController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('wav-to-mp3')
  @FileInterceptor()
  async convertWavToMp3(
    @File(100, /audio\/wav|audio\/x-wav|audio\/wave|audio\/x-pn-wav/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.WAV_TO_MP3, {}, req.user)
  }

  @Auth()
  @Post('wav-to-aac')
  @FileInterceptor()
  async convertWavToAac(
    @File(100, /audio\/wav|audio\/x-wav|audio\/wave|audio\/x-pn-wav/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.WAV_TO_AAC, {}, req.user)
  }

  @Auth()
  @Post('wav-to-ogg')
  @FileInterceptor()
  async convertWavToOgg(
    @File(100, /audio\/wav|audio\/x-wav|audio\/wave|audio\/x-pn-wav/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.WAV_TO_OGG, {}, req.user)
  }

  @Auth()
  @Post('wav-to-flac')
  @FileInterceptor()
  async convertWavToFlac(
    @File(100, /audio\/wav|audio\/x-wav|audio\/wave|audio\/x-pn-wav/) file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.WAV_TO_FLAC, {}, req.user)
  }
}
