import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { TokenService } from '../../modules/auth/token/token.service';
import { UserService } from '../../modules/user/user.service';
import { Request, Response } from 'express';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}


  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const response: Response = context.switchToHttp().getResponse();
    const token = this.parseAccessTokenFromHeader(request.headers['authorization']);

    let userId: string;

    try {
      const tokenPayload = await this.tokenService.verifyAccessToken(token);
      if (tokenPayload.id === undefined) throw new UnauthorizedException();
      userId = tokenPayload.id;
    }
    catch (e) {
      throw new UnauthorizedException();
    }

    try {
      request.user = await this.userService.getById(userId);
    }
    catch (e) {
      this.authService.logout(response);
      throw new UnauthorizedException('User is not found or has been deleted');
    }

    return true;
  }

  private parseAccessTokenFromHeader(authHeader: string) {
    return authHeader.split(' ')[1];
  }

}
