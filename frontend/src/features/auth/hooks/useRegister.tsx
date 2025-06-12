import { registerService } from '@/features/auth/services/register.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QueryKeys } from '@/shared/constants/query-keys'

export function useRegister() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: registerService.register,
    onSuccess: data => {
      queryClient.setQueryData([QueryKeys.CurrentUser], data.data.user);
    },
  })
}
