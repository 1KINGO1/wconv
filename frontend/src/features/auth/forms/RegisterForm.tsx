import {AuthWrapper} from '@/features/auth/AuthWrapper';
import { Input } from '@/shared/components/ui/input';
import {Button} from '@/shared/components/ui/button';

export function RegisterForm() {
	return (
		<AuthWrapper
			header="Registration"
			description="Register a new account"
			backButtonHref="/login"
			backButtonLabel="Log In"
		>
			<div className="flex flex-col gap-5">
				<form className="flex flex-col gap-5">
					<Input placeholder="Username"/>
					<Input placeholder="Password"/>
					<Input placeholder="Repeat password"/>
					<Button className="w-full text-base">Register</Button>
				</form>
			</div>
		</AuthWrapper>
	)
}