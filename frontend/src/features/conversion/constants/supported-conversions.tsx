import {MimeType} from '@/shared/types/mimetype.enum';
import {ConversionFormat} from '@/shared/types/conversion-format.enum';
import {FC} from 'react';

export interface SupportedConversion {
	fileFromMimetype: MimeType,
	fileFromType: ConversionFormat,
	fileToMimetype: MimeType,
	fileToType: ConversionFormat,
	Form: FC,
}

export const supportedConversions: SupportedConversion[] = [
	{
		fileFromMimetype: MimeType.JPEG,
		fileFromType: ConversionFormat.JPG,
		fileToMimetype: MimeType.PNG,
		fileToType: ConversionFormat.PNG,
		Form: FormElement
	}
]

function FormElement(){
	return (
		<><h1>test test</h1></>
	)
}