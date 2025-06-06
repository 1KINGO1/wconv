import { Request } from 'express'

import { Auth } from '../../../shared/decorators/auth.decorator'
import { JobType } from '../constants/job-type.enum'
import { ConversionService } from '../conversion.service'
import { File } from '../decorators/file.decorator'
import { FileInterceptor } from '../decorators/file.interceptor'
import { BaseImageConversionDto } from '../dto/BaseImageConversion.dto'
import { Body, Controller, Post, Req } from '@nestjs/common'

@Controller('conversion/convert')
export class DocxController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('docx-to-pdf')
  @FileInterceptor()
  async convertWebpToJpg(
    @File(100, /application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document/)
    file: Express.Multer.File,

    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.DOCX_TO_PDF, {}, req.user)
  }
}
