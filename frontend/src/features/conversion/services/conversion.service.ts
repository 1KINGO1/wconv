import { apiWithAuth } from '@/shared/api/api-with-auth'
import { Urls } from '@/shared/constants/urls'

class ConversionService {
  async convert(path: string, file: File, options?: Record<string, any>) {
    const formData = new FormData()
    formData.append('file', file)

    return apiWithAuth.post(Urls.conversion(path), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }
}

export const conversionService = new ConversionService()
