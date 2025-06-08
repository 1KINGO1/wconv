import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

export function useMobile() {
  return useMediaQuery('(max-width: 1024px)')
}