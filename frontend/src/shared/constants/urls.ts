export const Urls = {
  refresh: '/auth/refresh',
  currentUser: '/user/me',
  logout: '/auth/logout',
  login: '/auth/login',
  register: '/auth/register',
  conversion: (path: string) => '/conversion/convert/' + path,
  file: (fileName: string) => '/conversion/files/' + fileName,
  conversions: '/conversion/',
} as const

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL + '/api' : 'http://localhost:3000/api'
