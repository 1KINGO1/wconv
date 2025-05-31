import {Card} from '@/shared/components/ui/card';
import {ConversionState} from '@/shared/types/conversion-state.enum';
import {ConversionFormat} from '@/shared/types/conversion-format.enum';
import {normalizeFileName} from '@/shared/utils/normalize-file-name';
import {Skeleton} from '@/shared/components/ui/skeleton';
import Image from 'next/image';
import {cn} from '@/shared/utils/utils';
import {Button} from '@/shared/components/ui/button';
import { FileFormatBadge } from './FileFormatBadge';

interface ConversionItemProps {
	state: ConversionState;
	fileFromName: string;
	fileFromUrl: string;
	fileFromFormat: ConversionFormat;
	fileToName?: string;
	fileToUrl?: string;
	fileToFormat: ConversionFormat;
}

const colorMap: Record<ConversionState, string> = {
	[ConversionState.PENDING]: "bg-pending",
	[ConversionState.FAILED]: "bg-failed",
	[ConversionState.SUCCESS]: "bg-success",
}

export function ConversionItem(props: ConversionItemProps) {
	return (
		<Card className="flex flex-row items-center px-4 py-4">
			<div className="flex-1 flex justify-start">
				<div className={cn(colorMap[props.state], "inline-block py-1 px-2 text-sm text-primary-foreground rounded-xl")}>
					{props.state}
				</div>
			</div>
			<div className="flex items-center justify-center gap-2 flex-1">
				<div className="flex items-center gap-2">
					<p>{normalizeFileName(props.fileFromName)}</p>
					<FileFormatBadge>{props.fileFromFormat}</FileFormatBadge>
				</div>

				{props.state === ConversionState.PENDING && (
					<div>
						<Image src="/arrow_spin.png" className="rotating" alt="Spinning arrows" width={20} height={20}/>
					</div>
				)}

				{props.state !== ConversionState.PENDING && (
					<div>
						<Image src="/arrow_right.png" alt="Arrow right" width={20} height={20}/>
					</div>
				)}

				<div className="flex items-center gap-2">
					{props.state !== ConversionState.FAILED ? props.fileToName ? <p>{normalizeFileName(props.fileToName)}</p> : (
						(
							<div className="flex flex-row items-center">
								<Skeleton className="h-5 w-[80px]"/>
								<span>.{props.fileToFormat.toLowerCase()}</span>
							</div>
						)
					) : null}
					<FileFormatBadge>{props.fileToFormat}</FileFormatBadge>
				</div>
			</div>
			<div className="flex-1 flex justify-end">
				{props.state === ConversionState.SUCCESS && (
					<Button className="text-sm">
						Download
					</Button>
				)}
			</div>
		</Card>
	)
}