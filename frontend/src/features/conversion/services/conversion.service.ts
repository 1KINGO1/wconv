import { apiWithAuth } from '@/shared/api/api-with-auth'
import { Urls } from '@/shared/constants/urls'
import { Conversion } from '@/shared/entity/Conversion'

class ConversionService {
  async convert(path: string, file: File, options?: Record<string, any>) {
    const formData = new FormData()
    formData.append('file', file)

    return apiWithAuth.post<{conversion: Conversion}>(Urls.conversion(path), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  async getConversions(): Promise<Conversion[]> {
    const {data} = await apiWithAuth.get<Conversion[]>(Urls.conversions);
    return data;
  }
}

export const conversionService = new ConversionService()
