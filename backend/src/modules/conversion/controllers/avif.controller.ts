import { Body, Controller, Post, Req } from '@nestjs/common';
import { ConversionService } from '../conversion.service';
import { FileInterceptor } from '../decorators/file.interceptor';
import { Auth } from '../../../shared/decorators/auth.decorator';
import { BaseImageConversionDto } from '../dto/BaseImageConversion.dto';
import { File } from '../decorators/file.decorator';
import { JobType } from '../constants/job-type.enum';
import { Request } from 'express';

@Controller('conversion/convert')
export class AvifController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Post('avif-to-jpg')
  @FileInterceptor()
  async convertAvifToJpg(
    @File(25, /image\/avif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.AVIF_TO_JPG,
      body,
      req.user,
    );
  }

  @Auth()
  @Post('avif-to-png')
  @FileInterceptor()
  async convertAvifToPng(
    @File(25, /image\/avif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.AVIF_TO_PNG,
      body,
      req.user,
    );
  }

  @Auth()
  @Post('avif-to-webp')
  @FileInterceptor()
  async convertAvifToWebp(
    @File(25, /image\/avif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.AVIF_TO_WEBP,
      body,
      req.user,
    );
  }

  @Auth()
  @Post('avif-to-tiff')
  @FileInterceptor()
  async convertAvifToTiff(
    @File(25, /image\/avif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.AVIF_TO_TIFF,
      body,
      req.user,
    );
  }

  @Auth()
  @Post('avif-to-gif')
  @FileInterceptor()
  async convertAvifToGif(
    @File(25, /image\/avif/)
    file: Express.Multer.File,

    @Req() req: Request,
    @Body() body: BaseImageConversionDto,
  ) {
    return this.conversionService.convertImage(
      file,
      JobType.AVIF_TO_GIF,
      body,
      req.user,
    );
  }
}
