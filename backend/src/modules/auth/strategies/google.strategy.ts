import { Request } from 'express'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'

import { OAuthGoogleUser } from '../types/OAuthGoogleUser'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.getOrThrow<string>('GOOGLE_CLIENT_ID'),
      clientSecret: configService.getOrThrow<string>('GOOGLE_CLIENT_SECRET'),
      callbackURL:
        configService.getOrThrow<string>('APPLICATION_URL') + '/api/auth/google/redirect',
      scope: ['email', 'profile'],
      passReqToCallback: true,
    })
  }

  async validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const { name, emails, photos, id } = profile
    // console.log(req.query);
    // const { state } = req.query as { state?: string };
    const user: OAuthGoogleUser = {
      id,
      email: emails[0].value,
      firstName: name.givenName,
      picture: photos[0].value,
      accessToken,
      returnUrl: this.configService.getOrThrow<string>('CLIENT_DASHBOARD_URL'),
    }
    done(null, user)
  }
}
