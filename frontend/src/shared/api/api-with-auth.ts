import axios from 'axios';
import {Urls} from '@/shared/constants/urls';
import {refreshService} from '@/shared/services/refresh.service';
import {accessTokenService} from '@/shared/services/access-token.service';

export const apiWithAuth = axios.create({
	baseURL: Urls.baseUrl,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

apiWithAuth.interceptors.request.use(
	(config) => {
		const token = accessTokenService.getAccessToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue: {resolve: Function, reject: Function}[] = [];

function processQueue(error: Error | null, token = null) {
	failedQueue.forEach((prom) => {
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});

	failedQueue = [];
}

apiWithAuth.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject });
				})
					.then((token) => {
						originalRequest.headers.Authorization = `Bearer ${token}`;
						return axios(originalRequest);
					})
					.catch((err) => Promise.reject(err));
			}

			originalRequest._retry = true;
			isRefreshing = true;

			try {
				const response = await refreshService.refresh();
				const newAccessToken = response.data.accessToken;

				accessTokenService.setAccessToken(
					newAccessToken
				)

				apiWithAuth.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
				processQueue(null, newAccessToken);

				return apiWithAuth(originalRequest);
			} catch (err) {
				processQueue(err as Error, null);

				await refreshService.logoutOnFailure();

				return Promise.reject(err);
			} finally {
				isRefreshing = false;
			}
		}

		return Promise.reject(error);
	}
);