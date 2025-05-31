'use client'

import {Card} from '@/shared/components/ui/card';
import {FileInput} from '@/shared/components/elements/FileInput';
import {useEffect, useState} from 'react';
import {SupportedConversion, supportedConversions} from '@/features/conversion/constants/supported-conversions';
import {mimeDescriptions} from '@/shared/constants/mimetypes-descriptions';
import {MimeType} from '@/shared/types/mimetype.enum';

export function Conversion() {
	const [file, setFile] = useState<File | null>(null);
	const [error, setError] = useState<null | string>(null);
	const [availableConversions, setAvailableConversions] = useState<SupportedConversion[]>([]);

	useEffect(() => {
		if (file === null) {
			setAvailableConversions([]);
			return;
		}

		const availableConversions = supportedConversions.filter(sc => sc.fileFromMimetype === file.type);
		if (availableConversions.length === 0) {
			const mimetypeDescription = mimeDescriptions[file.type as MimeType];
			setError(mimetypeDescription ? mimetypeDescription + " is not supported yet." : "File type is not supported.");
		}

		setAvailableConversions(availableConversions);
	}, [file])

	return (
		<div className="flex justify-center items-center">
			<Card className="p-8">
				<FileInput
					file={file}
					setFile={setFile}
					error={error}
					setError={setError}
				/>
			</Card>
		</div>
	)
}