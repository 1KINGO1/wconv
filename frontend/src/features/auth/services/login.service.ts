import { api } from '@/shared/api/api'
import { Urls } from '@/shared/constants/urls'
import { TypeLoginSchema } from '@/shared/schemas/login.schema'

class LoginService {
  async login(body: TypeLoginSchema) {
    return api.post(Urls.login, body)
  }
}

export const loginService = new LoginService()
