import { apiWithAuth } from '@/shared/api/api-with-auth'
import { Urls } from '@/shared/constants/urls'
import { Conversion } from '@/shared/entity/Conversion'

class ConversionService {
  async convert(
    path: string,
    file: File,
    options?: Record<string, any>,
    onProgress?: (progress: number) => void,
  ) {
    const formData = new FormData()
    formData.append('file', file)

    if (options !== undefined) {
      for (let key of Object.keys(options)) {
        if (options[key] === null || options[key] === undefined) {
          continue
        }
        formData.append(key, options[key])
      }
    }

    return apiWithAuth.post<{ conversion: Conversion }>(
      Urls.conversion(path),
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          if (onProgress && progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            )
            onProgress(percentCompleted)
          }
        },
      },
    )
  }

  async getConversions(): Promise<Conversion[]> {
    const { data } = await apiWithAuth.get<Conversion[]>(Urls.conversions)
    return data
  }
}

export const conversionService = new ConversionService()
