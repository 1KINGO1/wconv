import {
  Body,
  Controller,
  Post,
  Req,
} from '@nestjs/common';
import { ConversionService } from '../conversion.service';
import { FileInterceptor } from '../decorators/file.interceptor';
import { Auth } from '../../../shared/decorators/auth.decorator';
import { BaseImageConversionDto } from '../dto/BaseImageConversion.dto';
import { File } from '../decorators/file.decorator';
import { JobType } from '../types/job-type.enum';
import { Request } from 'express';

@Controller('conversion/convert')
export class PngController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('png-to-jpg')
  @FileInterceptor()
  async convertPngToJpg(
    @File(25, /image\/png/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.PNG_TO_JPG, body, req.user);
  }

  @Auth()
  @Post('png-to-webp')
  @FileInterceptor()
  async convertPngToWebp(
    @File(25, /image\/png/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.PNG_TO_WEBP, body, req.user);
  }

  @Auth()
  @Post('png-to-avif')
  @FileInterceptor()
  async convertPngToAvif(
    @File(25, /image\/png/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.PNG_TO_AVIF, body, req.user);
  }

  @Auth()
  @Post('png-to-tiff')
  @FileInterceptor()
  async convertPngToTiff(
    @File(25, /image\/png/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.PNG_TO_TIFF, body, req.user);
  }

  @Auth()
  @Post('png-to-gif')
  @FileInterceptor()
  async convertPngToGif(
    @File(25, /image\/png/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.PNG_TO_GIF, body, req.user);
  }
}