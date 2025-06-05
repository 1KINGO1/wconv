'use client'

import { useEffect } from 'react'

import { ConversionItem } from '@/features/conversion/ConversionItem'
import { useConversionStateChange } from '@/features/conversion/hooks/useConversionStateChange'
import { getFileDownloadUrl } from '@/shared/utils/get-file-download-url'

import { useConversions } from './hooks/useConversions'

export function MyConversions() {
  const { data, isSuccess, refetch } = useConversions()
  useConversionStateChange()

  useEffect(() => {
    refetch()
  }, [])

  return (
    <div className='flex flex-col justify-center h-full gap-4'>
      {isSuccess
        ? data.map(conversion => (
            <ConversionItem
              key={conversion.id}
              state={conversion.state}
              fileFromName={conversion.fileFromName}
              fileFromUrl={getFileDownloadUrl(conversion.fileFromName)}
              fileFromFormat={conversion.fileFromFormat}
              fileToFormat={conversion.fileToFormat}
              fileToName={conversion?.fileToName}
              fileToUrl={
                conversion?.fileToName
                  ? getFileDownloadUrl(conversion.fileToName)
                  : undefined
              }
            />
          ))
        : null}
    </div>
  )
}
