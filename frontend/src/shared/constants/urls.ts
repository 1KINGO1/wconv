export const Urls = {
	baseUrl: 'http://localhost:3000/api/',
	refresh: '/auth/refresh',
	currentUser: '/user/me',
	logout: '/auth/logout',
	login: '/auth/login',
	register: '/auth/register',
	conversion: (path: string) => '/conversion/convert/' + path,
} as const;