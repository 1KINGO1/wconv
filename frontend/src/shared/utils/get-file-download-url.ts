import { API_BASE_URL, Urls } from '@/shared/constants/urls'

export function getFileDownloadUrl(file: string) {
  return API_BASE_URL + Urls.file(file)
}
