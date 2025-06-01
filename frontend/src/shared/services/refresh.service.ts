import { api } from '@/shared/api/api'
import { Urls } from '@/shared/constants/urls'

class RefreshService {
  async refresh() {
    return api.post(
      Urls.refresh,
      {},
      {
        withCredentials: true,
      },
    )
  }

  async logoutOnFailure() {
    return api.post(Urls.logout)
  }
}

export const refreshService = new RefreshService()
