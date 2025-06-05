import {SupportedConversionForm} from '@/features/conversion/constants/supported-conversions'
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {useCreateConversion} from '@/features/conversion/hooks/useCreateConversion';
import {BaseConversionForm} from '@/features/conversion/forms/BaseConversionForm';

export const EmptyForm: SupportedConversionForm = ({file, requestSendUrl},) => {
	const form = useForm()
	const [progress, setProgress] = useState(0)
	const conversionMutation = useCreateConversion(
		requestSendUrl,
		file,
		setProgress,
	)

	const submitHandler = async () => {
		await conversionMutation.mutateAsync({})
		setProgress(0);
	}

	return (
		<BaseConversionForm
			form={form}
			mutateFunction={submitHandler}
			buttonText={progress ? `${progress}%` : 'Convert'}
		/>
	)
}