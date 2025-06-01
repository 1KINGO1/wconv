'use client'

import {useCurrentUser} from '@/shared/hooks/useCurrentUser';
import {useRouter} from 'next/navigation';
import {PropsWithChildren, useEffect} from 'react';

export function WithAuthLayout({ children }: PropsWithChildren) {
	const currentUserQuery = useCurrentUser();
	const router = useRouter()

	useEffect(() => {
		if (currentUserQuery.isError) {
			router.push('/login');
		}
	}, [currentUserQuery.isError])
	
	return children;
}