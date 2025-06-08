import { useEffect, useState } from 'react'
import { SupportedConversion, supportedConversions } from '@/features/conversion/constants/supported-conversions'
import { useConversionStateChange } from '@/features/conversion/hooks/useConversionStateChange'
import { mimeDescriptions } from '@/shared/constants/mimetypes-descriptions'

export const useConversion = () => {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<null | string>(null)
  const [availableConversions, setAvailableConversions] = useState<
    SupportedConversion[]
  >([])
  const [selectedConversion, setSelectedConversion] =
    useState<SupportedConversion | null>(null)

  useConversionStateChange()

  useEffect(() => {
    if (file === null) {
      cleanUp();
      return
    }

    const availableConversions = supportedConversions.filter(
      sc => sc.fileFromMimetype.includes(file.type),
    )
    if (availableConversions.length === 0) {
      const mimetypeDescription = mimeDescriptions.get(file.type)
      setError(
        mimetypeDescription
          ? mimetypeDescription + ' is not supported yet.'
          : 'File type is not supported.',
      )
    }

    setAvailableConversions(availableConversions)
    setSelectedConversion(availableConversions[0]);
  }, [file])
  useEffect(() => {
    if (error === null) return
    cleanUp();
  }, [error])

  const cleanUp = () => {
    setSelectedConversion(null)
    setAvailableConversions([])
  }

  const selectHandler = (value: string) => {
    setSelectedConversion(
      availableConversions.find(c => c.fileToMimetype.includes(value)) ?? null,
    )
  }

  return {
    file, setFile,
    error, setError,
    availableConversions, setAvailableConversions,
    selectedConversion, setSelectedConversion,
    selectHandler,
  }
}