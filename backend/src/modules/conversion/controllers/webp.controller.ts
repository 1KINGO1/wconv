import { Body, Controller, Post, Req } from '@nestjs/common';
import { ConversionService } from '../conversion.service';
import { FileInterceptor } from '../decorators/file.interceptor';
import { Auth } from '../../../shared/decorators/auth.decorator';
import { BaseImageConversionDto } from '../dto/BaseImageConversion.dto';
import { File } from '../decorators/file.decorator';
import { JobType } from '../constants/job-type.enum';
import { Request } from 'express';

@Controller('conversion/convert')
export class WebpController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('webp-to-jpg')
  @FileInterceptor()
  async convertWebpToJpg(
    @File(25, /image\/webp/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.WEBP_TO_JPG,
      body,
      req.user,
    );
  }

  @Auth()
  @Post('webp-to-png')
  @FileInterceptor()
  async convertWebpToPng(
    @File(25, /image\/webp/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.WEBP_TO_PNG,
      body,
      req.user,
    );
  }

  @Auth()
  @Post('webp-to-avif')
  @FileInterceptor()
  async convertWebpToAvif(
    @File(25, /image\/webp/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.WEBP_TO_AVIF,
      body,
      req.user,
    );
  }

  @Auth()
  @Post('webp-to-tiff')
  @FileInterceptor()
  async convertWebpToTiff(
    @File(25, /image\/webp/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.WEBP_TO_TIFF,
      body,
      req.user,
    );
  }

  @Auth()
  @Post('webp-to-gif')
  @FileInterceptor()
  async convertWebpToGif(
    @File(25, /image\/webp/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.WEBP_TO_GIF,
      body,
      req.user,
    );
  }
}
