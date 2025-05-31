import axios from 'axios';
import {URLS} from '@/shared/constants/urls';

export const api = axios.create({
	baseURL: URLS.baseUrl,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});