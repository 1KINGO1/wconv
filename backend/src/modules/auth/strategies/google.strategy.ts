import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import {ConfigService} from '@nestjs/config';
import {OAuthGoogleUser} from '../types/OAuthGoogleUser';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(configService: ConfigService) {
		super({
			clientID: configService.getOrThrow<string>('GOOGLE_CLIENT_ID'),
			clientSecret: configService.getOrThrow<string>('GOOGLE_CLIENT_SECRET'),
			callbackURL: configService.getOrThrow<string>('APPLICATION_URL') + '/api/auth/google/redirect',
			scope: ['email', 'profile'],
		});
	}

	async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
		const { name, emails, photos, id } = profile;
		const user: OAuthGoogleUser = {
			id,
			email: emails[0].value,
			firstName: name.givenName,
			picture: photos[0].value,
			accessToken,
		};
		done(null, user);
	}
}