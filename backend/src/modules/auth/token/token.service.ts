import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtTokenPayload } from '../types/JwtTokenPayload';

@Injectable()
export class TokenService {
  private readonly ACCESS_TOKEN_SECRET: string;
  private readonly REFRESH_TOKEN_SECRET: string;

  constructor(
    configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.ACCESS_TOKEN_SECRET =
      configService.getOrThrow<string>('JWT_ACCESS_SECRET');
    this.REFRESH_TOKEN_SECRET =
      configService.getOrThrow<string>('JWT_REFRESH_SECRET');
  }

  async issueRefreshToken(payload: JwtTokenPayload): Promise<string> {
    return this.jwtService.signAsync(payload, {
      expiresIn: '30d',
      secret: this.REFRESH_TOKEN_SECRET,
    });
  }

  async issueAccessToken(payload: JwtTokenPayload): Promise<string> {
    return this.jwtService.signAsync(payload, {
      expiresIn: '15m',
      secret: this.ACCESS_TOKEN_SECRET,
    });
  }

  async issueTokenPair(payload: JwtTokenPayload) {
    return {
      accessToken: await this.issueAccessToken(payload),
      refreshToken: await this.issueRefreshToken(payload),
    };
  }

  async verifyRefreshToken(token: string): Promise<JwtTokenPayload> {
    return this.jwtService.verifyAsync(token, {
      secret: this.REFRESH_TOKEN_SECRET,
    });
  }

  async verifyAccessToken(token: string): Promise<JwtTokenPayload> {
    return this.jwtService.verifyAsync(token, {
      secret: this.ACCESS_TOKEN_SECRET,
    });
  }
}
