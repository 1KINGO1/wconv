import {api} from '@/shared/api/api';
import {URLS} from '@/shared/constants/urls';

class RefreshService {
	async refresh() {
		return api.post(URLS.refresh, {}, {
			withCredentials: true,
		});
	}
}

export const refreshService = new RefreshService();