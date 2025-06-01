import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { TokenService } from '../../modules/auth/token/token.service';
import { UserService } from '../../modules/user/user.service';
import { query, Request, Response } from 'express';
import { AuthService } from '../../modules/auth/auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly REDIRECT_URL: string;

  constructor(
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    this.REDIRECT_URL =
      this.configService.getOrThrow<string>('CLIENT_AUTH_URL');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const response: Response = context.switchToHttp().getResponse();
    const token = this.parseAccessTokenFromHeader(
      request.headers['authorization'],
    );

    const redirectOnFailure = false;
    const addReturnUrl = false;

    try {
      let userId: string;

      if (!token) {
        throw new UnauthorizedException();
      }

      try {
        const tokenPayload = await this.tokenService.verifyAccessToken(token);
        if (tokenPayload.id === undefined) throw new UnauthorizedException();
        userId = tokenPayload.id;
      } catch (e) {
        throw new UnauthorizedException();
      }

      try {
        request.user = await this.userService.getById(userId);
      } catch (e) {
        this.authService.logout(response);
        throw new UnauthorizedException(
          'User is not found or has been deleted',
        );
      }

      return true;
    } catch (e) {
      if (redirectOnFailure) {
        let url = this.REDIRECT_URL;

        if (addReturnUrl) {
          const queryParams = new URLSearchParams();
          queryParams.set(
            'returnUrl',
            this.configService.getOrThrow<string>('APPLICATION_URL') +
              request.url,
          );
          url += '?';
          url += queryParams.toString();
        }

        response.redirect(url);
        return;
      }
      throw e;
    }
  }

  private parseAccessTokenFromHeader(authHeader: string) {
    return authHeader?.split(' ')?.[1];
  }
}
