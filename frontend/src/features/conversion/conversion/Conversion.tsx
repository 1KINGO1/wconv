'use client'

import { FileInput } from '@/shared/components/elements/FileInput'
import { Card } from '@/shared/components/ui/card'

import { ConversionSelector } from '@/features/conversion/conversion/ConversionSelector'
import { ConversionForm } from '@/features/conversion/conversion/ConversionForm'
import { ConversionRecentConversions } from '@/features/conversion/conversion/ConversionRecentConversions'
import { useConversion } from '@/features/conversion/conversion/hooks/useConversion'


export function Conversion() {
  const {
    file,
    setFile,
    error,
    setError,
    availableConversions,
    selectedConversion,
    selectHandler,
  } = useConversion()

  return (
    <div className="flex flex-col gap-2 lg:gap-8 justify-center items-center">
      <Card className="p-3 lg:p-8">
        <FileInput
          file={file}
          setFile={setFile}
          error={error}
          setError={setError}
        />
        <div className="flex flex-col gap-4 justify-center items-center">
          <ConversionSelector
            availableConversions={availableConversions}
            selectedConversion={selectedConversion}
            onConversionSelect={selectHandler}
          />
          <ConversionForm
            file={file}
            selectedConversion={selectedConversion}
          />
        </div>
      </Card>
      <div className="flex mt-5 lg:mt-0 flex-col gap-2 w-full justify-center">
        <ConversionRecentConversions />
      </div>
    </div>
  )
}
