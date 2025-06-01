import axios from 'axios';
import {Urls} from '@/shared/constants/urls';

export const api = axios.create({
	baseURL: Urls.baseUrl,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});