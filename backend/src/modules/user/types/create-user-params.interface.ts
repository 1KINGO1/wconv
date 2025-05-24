import { UserLinkProvider } from 'prisma/generated';

class BaseCreateUserParams{
	username: string;
  displayName: string;
}

export class PasswordCreateUserParams extends BaseCreateUserParams {
	readonly type = 'password' as const;
	password: string;
}

export class OAuthCreateUserParams extends BaseCreateUserParams {
	readonly type = 'oauth' as const;
	provider: UserLinkProvider;
	providerUserId: string;
	avatarUrl?: string;
	accessToken?: string;
	refreshToken?: string;
}