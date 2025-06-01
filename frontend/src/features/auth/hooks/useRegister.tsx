import {useMutation, useQueryClient} from '@tanstack/react-query';
import {registerService} from '@/features/auth/services/register.service';

export function useRegister() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: registerService.register,
		onSuccess: (data) => {
			console.log(data);
		}
	})
}