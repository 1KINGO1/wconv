import { useRecentConversion } from '@/features/conversion/hooks/useRecentConversion'
import { ConversionItem } from '@/features/conversion/ConversionItem'
import { getFileDownloadUrl } from '@/shared/utils/get-file-download-url'

export function ConversionRecentConversions() {
  const { data: recentConversions } = useRecentConversion()

  return !recentConversions ? null :
    recentConversions.map(conversion => (
      <ConversionItem
        key={conversion.id}
        state={conversion.state}
        fileFromName={conversion.fileFromName}
        fileFromUrl={conversion.fileToName}
        fileFromFormat={conversion.fileFromFormat}
        fileToFormat={conversion.fileToFormat}
        fileToName={conversion?.fileToName}
        fileToUrl={getFileDownloadUrl(conversion?.fileToName)}
      />
    ))
}