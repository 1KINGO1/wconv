import {useQuery} from '@tanstack/react-query';
import {currentUserService} from '@/shared/services/current-user.service';
import {QueryKeys} from '@/shared/constants/query-keys';

export function useCurrentUser() {
	return useQuery({
		queryFn: currentUserService.getCurrentUser,
		queryKey: [QueryKeys.CurrentUser],
	})
}