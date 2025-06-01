import axios from 'axios'

import { API_BASE_URL } from '@/shared/constants/urls'

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
