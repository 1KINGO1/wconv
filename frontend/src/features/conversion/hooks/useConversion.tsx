import { conversionService } from '@/features/conversion/services/conversion.service'

import { useMutation } from '@tanstack/react-query'

export function useConversion(
  path: string,
  file: File,
  options: Record<string, any>,
) {
  return useMutation({
    mutationFn: () => conversionService.convert(path, file, options),
  })
}
