import { accessTokenService } from '@/shared/services/access-token.service'
import { useRouter } from 'next/navigation'
import { currentUserService } from '@/shared/services/current-user.service'
import { useQueryClient } from '@tanstack/react-query'

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = async () => {
    await currentUserService.logout();
    accessTokenService.setAccessToken('');
    router.push('/login');
    queryClient.removeQueries();
  };

  return { logout };
}