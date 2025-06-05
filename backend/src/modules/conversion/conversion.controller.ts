import { Request, Response } from 'express'

import { Auth } from '../../shared/decorators/auth.decorator'
import { Controller, Get, Param, Req, Res } from '@nestjs/common'

import { ConversionService } from './conversion.service'

@Controller('conversion')
export class ConversionController {
  constructor(private readonly conversionService: ConversionService) {}

  @Auth()
  @Get('')
  async getConversions(@Req() req: Request) {
    return this.conversionService.getUserConversions(req.user)
  }

  @Get('files/:key')
  async getFile(@Param('key') key: string, @Res() res: Response) {
    await this.conversionService.streamFileByName(key, res)
  }
}
