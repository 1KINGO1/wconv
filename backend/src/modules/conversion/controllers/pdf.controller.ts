import { Request } from 'express'

import { Auth } from '../../../shared/decorators/auth.decorator'
import { JobType } from '../constants/job-type.enum'
import { ConversionService } from '../conversion.service'
import { File } from '../decorators/file.decorator'
import { FileInterceptor } from '../decorators/file.interceptor'
import { BaseImageConversionDto } from '../dto/BaseImageConversion.dto'
import { Body, Controller, Post, Req } from '@nestjs/common'

@Controller('conversion/convert')
export class PdfController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('pdf-to-docx')
  @FileInterceptor()
  async convertPdfToDocx(
    @File(100, /application\/pdf/)
    file: Express.Multer.File,

    @Req() req: Request,
  ) {
    return this.conversionService.convert(file, JobType.PDF_TO_DOCX, {}, req.user)
  }
}
