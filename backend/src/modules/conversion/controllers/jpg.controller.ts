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
export class JpgController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('jpg-to-png')
  @FileInterceptor()
  async convertJpgToPng(
    @File(25, /image\/jpe?g/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.JPG_TO_PNG, body, req.user);
  }

  @Auth()
  @Post('jpg-to-webp')
  @FileInterceptor()
  async convertJpgToWebp(
    @File(25, /image\/jpe?g/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.JPG_TO_WEBP, body, req.user);
  }

  @Auth()
  @Post('jpg-to-avif')
  @FileInterceptor()
  async convertJpgToAvif(
    @File(25, /image\/jpe?g/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.JPG_TO_AVIF, body, req.user);
  }

  @Auth()
  @Post('jpg-to-tiff')
  @FileInterceptor()
  async convertJpgToTiff(
    @File(25, /image\/jpe?g/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.JPG_TO_TIFF, body, req.user);
  }

  @Auth()
  @Post('jpg-to-gif')
  @FileInterceptor()
  async convertJpgToGif(
    @File(25, /image\/jpe?g/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto
  ) {
    return this.conversionService.convertImage(file, JobType.JPG_TO_GIF, body, req.user);
  }
}
