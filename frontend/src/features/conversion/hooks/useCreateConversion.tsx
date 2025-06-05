import { conversionService } from '@/features/conversion/services/conversion.service'
import { QueryKeys } from '@/shared/constants/query-keys'
import { Conversion } from '@/shared/entity/Conversion'

import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCreateConversion(
  path: string,
  file: File,
  onProgress?: (progressPercents: number) => void,
) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (options: Record<string, any>) =>
      conversionService.convert(path, file, options, onProgress),
    onSuccess: data => {
      queryClient.setQueryData(
        [QueryKeys.RecentConversions],
        (prevData: Conversion[]) => {
          return [data.data.conversion, ...prevData]
        },
      )
    },
  })
}
