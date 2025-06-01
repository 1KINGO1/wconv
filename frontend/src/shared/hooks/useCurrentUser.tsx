import { QueryKeys } from '@/shared/constants/query-keys'
import { currentUserService } from '@/shared/services/current-user.service'

import { useQuery } from '@tanstack/react-query'

export function useCurrentUser() {
  return useQuery({
    queryFn: currentUserService.getCurrentUser,
    queryKey: [QueryKeys.CurrentUser],
  })
}
