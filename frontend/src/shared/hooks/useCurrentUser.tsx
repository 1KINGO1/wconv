import {useQuery} from '@tanstack/react-query';
import {currentUserService} from '@/shared/services/current-user.service';
import {QUERY_KEYS} from '@/shared/constants/query-keys.enum';

export function useCurrentUser() {
	return useQuery({
		queryFn: currentUserService.getCurrentUser,
		queryKey: [QUERY_KEYS.CURRENT_USER]
	})
}