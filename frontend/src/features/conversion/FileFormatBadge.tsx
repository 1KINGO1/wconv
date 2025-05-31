import {PropsWithChildren} from 'react';

export function FileFormatBadge({children}: PropsWithChildren) {
	return (
		<span className="bg-foreground px-2 py-1 text-background rounded-full text-xs">{children}</span>
	)
}