import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ConversionService } from './conversion.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { Auth } from '../../shared/decorators/auth.decorator';
import { JpgToPngDto } from './dto/JpgToPng.dto';

const MB_SIZE = 1000000;

@Controller('conversion')
export class ConversionController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Get('')
  async getConversions(@Req() req: Request) {
    return this.conversionService.getUserConversions(req.user);
  }

  @Auth()
  @Post('convert/jpg-to-png')
  @UseInterceptors(FileInterceptor('file'))
  async convert(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: MB_SIZE * 100 }),
          new FileTypeValidator({ fileType: /image\/jpe?g/ }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Req() req: Request,
    @Body() body: JpgToPngDto
  ) {
    return this.conversionService.convertJpgToPng(file, body, req.user);
  }

  @Get('files/:key')
  async getFile(@Param('key') key: string, @Res() res: Response) {
    await this.conversionService.streamFileByName(key, res);
  }
}
