import { api } from '@/shared/api/api'
import { Urls } from '@/shared/constants/urls'
import { TypeRegisterSchema } from '@/shared/schemas/register.schema'

class RegisterService {
  async register(registerData: TypeRegisterSchema) {
    return api.post(Urls.register, registerData)
  }
}

export const registerService = new RegisterService()
