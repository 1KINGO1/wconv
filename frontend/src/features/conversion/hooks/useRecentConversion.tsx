import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '@/shared/constants/query-keys'
import { Conversion } from '@/shared/entity/Conversion'

export function useRecentConversion(){
  return useQuery<Conversion[]>({
    queryKey: [QueryKeys.RecentConversions],
    queryFn: () => []
  })
}