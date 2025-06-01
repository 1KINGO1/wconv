import {PropsWithChildren} from 'react';
import {LayoutContainer} from '@/shared/components/layout/LayoutContainer';
import {WithAuthLayout} from '@/shared/components/layout/WithAuthLayout';

export default function Layout({children}: PropsWithChildren) {
	return (
		<LayoutContainer>
			<WithAuthLayout>
				{children}
			</WithAuthLayout>
		</LayoutContainer>
	)
}