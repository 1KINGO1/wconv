import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from '../../shared/decorators/auth.decorator';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Auth()
  @Get('me')
  async me(@Req() req: Request){
     return req.user;
  }
}
