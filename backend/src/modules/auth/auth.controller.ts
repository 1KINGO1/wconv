import { Request, Response } from 'express'

import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { OAuthGoogleUser } from './types/OAuthGoogleUser'
import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('refresh')
  async refresh(@Req() req: Request) {
    return this.authService.refresh(req)
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    return this.authService.logout(res)
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.registerWithCredentials(res, registerDto)
  }

  @Post('login')
  async login(@Res({ passthrough: true }) res: Response, @Body() loginDto: LoginDto) {
    return this.authService.login(res, loginDto)
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request & { user: OAuthGoogleUser }, @Res() res: Response) {
    await this.authService.registerWithGoogleOAuth(res, req.user)
  }
}
