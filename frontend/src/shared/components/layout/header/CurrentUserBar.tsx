import {Avatar, AvatarFallback, AvatarImage} from '@/shared/components/ui/avatar';

export function CurrentUserBar() {
	return (
		<div className="flex gap-3 items-center">
			<Avatar className="w-10 h-10">
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>KN</AvatarFallback>
			</Avatar>
			<p className="text-lg">KINGO</p>
		</div>
	)
}