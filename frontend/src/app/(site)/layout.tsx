import {PropsWithChildren} from 'react';
import {LayoutContainer} from '@/shared/components/layout/LayoutContainer';

export default function Layout({children}: PropsWithChildren) {
	return (
		<LayoutContainer>
			{children}
		</LayoutContainer>
	)
}