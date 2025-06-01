import { ACCESS_TOKEN_KEY } from '@/shared/constants/access-token-key'

class AccessTokenService {
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  }

  setAccessToken(accessToken: string) {
    return localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  }
}

export const accessTokenService = new AccessTokenService()
