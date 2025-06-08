import { accessTokenService } from '@/shared/services/access-token.service'
import { useRouter } from 'next/navigation'
import { currentUserService } from '@/shared/services/current-user.service'

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    await currentUserService.logout();
    accessTokenService.setAccessToken('');
    router.push('/login');
  };

  return { logout };
}