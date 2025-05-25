import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { hash } from 'argon2';
import { OAuthGoogleUser } from './types/OAuthGoogleUser';
import { User, UserLinkProvider } from 'prisma/generated';
import { TokenService } from './token/token.service';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly REFRESH_TOKEN_COOKIE_NAME: string;

  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
    private readonly configService: ConfigService,
  ) {
    this.REFRESH_TOKEN_COOKIE_NAME = this.configService.getOrThrow<string>('REFRESH_TOKEN_COOKIE_NAME');
  }

  async registerWithCredentials(res: Response, registerDto: RegisterDto) {
    const user = await this.userService.create({
      type: 'password',
      displayName: registerDto.username,
      username: registerDto.username,
      password: await hash(registerDto.password),
    });

    const tokens = await this.tokenService.issueTokenPair({ id: user.id });
    this.attachRefreshTokenCookie(res, tokens.refreshToken)

    return {
      user,
      tokens,
    };
  }
  async registerWithGoogleOAuth(res: Response, googleOAuthUser: OAuthGoogleUser) {
    let user: User;

    try {
      user = await this.userService.getByProvider(
        UserLinkProvider.GOOGLE,
        googleOAuthUser.id,
      );
    } catch (e) {
      user = await this.userService.create({
        type: 'oauth',
        username: googleOAuthUser.email,
        displayName: googleOAuthUser.firstName,
        avatarUrl: googleOAuthUser.picture,
        accessToken: googleOAuthUser.accessToken,
        provider: UserLinkProvider.GOOGLE,
        providerUserId: googleOAuthUser.id,
      });
    }

    const tokens = await this.tokenService.issueTokenPair({ id: user.id });
    this.attachRefreshTokenCookie(res, tokens.refreshToken)

    res.redirect(googleOAuthUser.returnUrl);
  }
  async refresh(req: Request) {
    const refreshToken = req.cookies[this.REFRESH_TOKEN_COOKIE_NAME];

    if (!refreshToken) {
      throw new UnauthorizedException()
    }

    try {
       const refreshTokenPayload = await this.tokenService.verifyRefreshToken(refreshToken);
       return {
         accessToken: await this.tokenService.issueAccessToken({
           id: refreshTokenPayload.id
         })
       }
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
  logout(res: Response) {
    res.cookie(this.REFRESH_TOKEN_COOKIE_NAME, '', {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
  }

  private attachRefreshTokenCookie(res: Response, refreshToken: string) {
    res.cookie(this.REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 29),
      httpOnly: true,
    })
  }
}
