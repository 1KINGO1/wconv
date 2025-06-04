import { QueryKeys } from '@/shared/constants/query-keys'
import { Conversion } from '@/shared/entity/Conversion'

import { useQuery } from '@tanstack/react-query'

export function useRecentConversion() {
  return useQuery<Conversion[]>({
    queryKey: [QueryKeys.RecentConversions],
    queryFn: () => [],
  })
}
