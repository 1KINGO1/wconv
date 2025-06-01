import { registerService } from '@/features/auth/services/register.service'

import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useRegister() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: registerService.register,
    onSuccess: data => {
      console.log(data)
    },
  })
}
