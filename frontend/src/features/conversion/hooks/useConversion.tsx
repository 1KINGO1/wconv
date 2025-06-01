import {useMutation} from '@tanstack/react-query';
import {conversionService} from '@/features/conversion/services/conversion.service';

export function useConversion(path: string, file: File, options: Record<string, any>) {
	return useMutation({
		mutationFn: () => conversionService.convert(path, file, options),
	})
}