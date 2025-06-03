import { conversionService } from '@/features/conversion/services/conversion.service'
import { QueryKeys } from '@/shared/constants/query-keys'
import { Conversion } from '@/shared/entity/Conversion'

import { useQuery } from '@tanstack/react-query'

export function useConversions() {
  return useQuery<Conversion[]>({
    queryKey: [QueryKeys.Conversations],
    queryFn: conversionService.getConversions,
  })
}
