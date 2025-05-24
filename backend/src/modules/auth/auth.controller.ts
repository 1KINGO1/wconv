import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {RegisterDto} from './dto/register.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { OAuthGoogleUser } from './types/OAuthGoogleUser';
import { Auth } from 'src/shared/decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('refresh')
  async refresh(@Req() req: Request) {
    return this.authService.refresh(req);
  }

  @Auth()
  @Post('logout')
  async logout(@Res() res: Response) {
    return this.authService.logout(res);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res({passthrough: true}) res: Response) {
    return this.authService.registerWithCredentials(res, registerDto);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request & {user: OAuthGoogleUser}, @Res({passthrough: true}) res: Response) {
    return this.authService.registerWithGoogleOAuth(res, req.user)
  }
}
