import { conversionService } from '@/features/conversion/services/conversion.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QueryKeys } from '@/shared/constants/query-keys'
import { Conversion } from '@/shared/entity/Conversion'

export function useCreateConversion(
  path: string,
  file: File,
  options: Record<string, any>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => conversionService.convert(path, file, options),
    onSuccess: (data) => {
      queryClient.setQueryData([QueryKeys.RecentConversions], (prevData: Conversion[]) => {
        return [data.data.conversion, ...prevData];
      });
    },
  })
}
