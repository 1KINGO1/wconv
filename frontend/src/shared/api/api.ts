import axios from 'axios';
import {URLS} from '@/shared/constants/urls';

export const api = axios.create({
	baseURL: URLS.baseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});