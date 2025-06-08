'use client'

import { ConversionItem } from '@/features/conversion/ConversionItem'
import { useConversions } from '@/features/conversion/hooks/useConversions'
import { getFileDownloadUrl } from '@/shared/utils/get-file-download-url'
import { useMobile } from '@/shared/hooks/useMobile'

export function RecentConversions() {
  const { data, isSuccess } = useConversions()
  const isMobile = useMobile()

  return (
    isMobile ? null : <div className='mt-24 text-center'>
      <h1 className='text-3xl'>Recent Conversions</h1>
      <div className='grid grid-cols-1 auto-rows-fr gap-4 mt-6'>
        {isSuccess &&
          data
            .slice(0, 3)
            .map(conversion => (
              <ConversionItem
                key={conversion.id}
                state={conversion.state}
                fileFromName={conversion.fileFromName}
                fileFromUrl={getFileDownloadUrl(conversion.fileFromName)}
                fileFromFormat={conversion.fileFromFormat}
                fileToFormat={conversion.fileToFormat}
                fileToName={conversion.fileToName}
                fileToUrl={getFileDownloadUrl(conversion.fileToName)}
              />
            ))}
      </div>
    </div>
  )
}
