import { loginService } from '@/features/auth/services/login.service'
import { QueryKeys } from '@/shared/constants/query-keys'

import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useLogin() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: loginService.login,
    onSuccess: response => {
      const { data } = response
      queryClient.setQueryData([QueryKeys.CurrentUser], () => {
        return data.user
      })
    },
  })
}
