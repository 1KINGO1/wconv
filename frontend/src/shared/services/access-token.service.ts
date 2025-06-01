const ACCESS_TOKEN_KEY = 'access_token';

class AccessTokenService {
	getAccessToken() {
		return localStorage.getItem(ACCESS_TOKEN_KEY);
	}

	setAccessToken(accessToken: string) {
		return localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
	}
}

export const accessTokenService = new AccessTokenService();