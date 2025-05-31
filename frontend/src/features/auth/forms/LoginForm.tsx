import {AuthWrapper} from '@/features/auth/AuthWrapper';
import { Input } from '@/shared/components/ui/input';
import {Button} from '@/shared/components/ui/button';
import {Separator} from '@/shared/components/ui/separator';

export function LoginForm() {
	return (
		<AuthWrapper
			header="Welcome Back"
			description="Log in to continue to WConv"
			backButtonHref="/register"
			backButtonLabel="Sign up"
		>
			<div className="flex flex-col gap-5">
				<form className="flex flex-col gap-5">
					<Input placeholder="Username"/>
					<Input placeholder="Password"/>
					<Button className="w-full text-base">Log In</Button>
				</form>
				<Separator />
				<Button variant="outline">Log In with Google</Button>
			</div>
		</AuthWrapper>
	)
}