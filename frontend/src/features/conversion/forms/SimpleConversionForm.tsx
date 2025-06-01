'use client'

import {Form} from '@/shared/components/ui/form';
import {useForm} from 'react-hook-form';
import {Button} from '@/shared/components/ui/button';
import {useConversion} from '@/features/conversion/hooks/useConversion';

export function SimpleConversionForm(file: File, requestSendUrl: string) {
	return function() {
		const form = useForm();
		const conversionMutation = useConversion(requestSendUrl, file, {});

		const submitHandler = async () => {
			await conversionMutation.mutateAsync()
		}

		return (
			<Form {...form}>
				<form onSubmit={form.handleSubmit(submitHandler)}>
					<Button>
						Convert
					</Button>
				</form>
			</Form>
		)
	}
}