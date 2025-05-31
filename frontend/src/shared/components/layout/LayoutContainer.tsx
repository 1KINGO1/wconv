import {PropsWithChildren} from 'react';
import { Header } from './header/Header';

interface LayoutContainerProps extends PropsWithChildren {}

export function LayoutContainer(props: LayoutContainerProps) {
	return (
		<div className="container mx-auto px-5 h-full flex flex-col">
			<Header />
			<main className="py-10 flex-1">
				{props.children}
			</main>
		</div>
	)
}