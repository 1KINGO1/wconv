import { apiWithAuth } from '@/shared/api/api-with-auth'
import { Urls } from '@/shared/constants/urls'
import { User } from '@/shared/entity/User'

class CurrentUserService {
  async getCurrentUser(): Promise<User> {
    const { data } = await apiWithAuth.get(Urls.currentUser)
    return data
  }

  async logout(): Promise<void> {
    await apiWithAuth.post(Urls.logout)
  }
}

export const currentUserService = new CurrentUserService()
