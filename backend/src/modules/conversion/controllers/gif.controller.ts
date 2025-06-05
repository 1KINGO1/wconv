import { Request } from 'express'

import { Auth } from '../../../shared/decorators/auth.decorator'
import { JobType } from '../constants/job-type.enum'
import { ConversionService } from '../conversion.service'
import { File } from '../decorators/file.decorator'
import { FileInterceptor } from '../decorators/file.interceptor'
import { BaseImageConversionDto } from '../dto/BaseImageConversion.dto'
import { Body, Controller, Post, Req } from '@nestjs/common'

@Controller('conversion/convert')
export class GifController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('gif-to-jpg')
  @FileInterceptor()
  async convertGifToJpg(
    @File(25, /image\/gif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convert(file, JobType.GIF_TO_JPG, body, req.user)
  }

  @Auth()
  @Post('gif-to-png')
  @FileInterceptor()
  async convertGifToPng(
    @File(25, /image\/gif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convert(file, JobType.GIF_TO_PNG, body, req.user)
  }

  @Auth()
  @Post('gif-to-webp')
  @FileInterceptor()
  async convertGifToWebp(
    @File(25, /image\/gif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convert(file, JobType.GIF_TO_WEBP, body, req.user)
  }

  @Auth()
  @Post('gif-to-avif')
  @FileInterceptor()
  async convertGifToAvif(
    @File(25, /image\/gif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convert(file, JobType.GIF_TO_AVIF, body, req.user)
  }

  @Auth()
  @Post('gif-to-tiff')
  @FileInterceptor()
  async convertGifToTiff(
    @File(25, /image\/gif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convert(file, JobType.GIF_TO_TIFF, body, req.user)
  }
}
