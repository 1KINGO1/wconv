import {ConversionItem} from '@/features/conversion/ConversionItem';
import {ConversionState} from '@/shared/constants/conversion-state';
import {ConversionFormat} from '@/shared/constants/conversion-format';

export function RecentConversions() {
	return (
		<div className="mt-24 text-center">
			<h1 className="text-3xl">Recent Conversions</h1>
			<div className="grid grid-cols-1 auto-rows-fr gap-4 mt-6">
				<ConversionItem
					state={ConversionState.PENDING}
					fileFromName="3312312451242_aboba.jpg"
					fileFromUrl="http://localhost:3000/api/conversion/files/3312312451242_aboba.png"
					fileFromFormat={ConversionFormat.JPG}
					fileToFormat={ConversionFormat.PNG}
				/>
				<ConversionItem
					state={ConversionState.SUCCESS}
					fileFromName="3312312451242_aboba.jpg"
					fileFromUrl="http://localhost:3000/api/conversion/files/3312312451242_aboba.png"
					fileFromFormat={ConversionFormat.JPG}
					fileToFormat={ConversionFormat.PNG}
					fileToName={"converted_3312312451242_aboba.jpg"}
					fileToUrl={"http://localhost:3000/api/conversion/files/3312312451242_aboba.png"}
				/>
				<ConversionItem
					state={ConversionState.FAILED}
					fileFromName="3312312451242_aboba.jpg"
					fileFromUrl="http://localhost:3000/api/conversion/files/3312312451242_aboba.png"
					fileFromFormat={ConversionFormat.JPG}
					fileToFormat={ConversionFormat.PNG}
				/>
			</div>
		</div>
	)
}