'use client'

import { useEffect, useMemo, useState } from 'react'

import {
  SupportedConversion,
  supportedConversions,
} from '@/features/conversion/constants/supported-conversions'
import { ConversionItem } from '@/features/conversion/ConversionItem'
import { useRecentConversion } from '@/features/conversion/hooks/useRecentConversion'
import { FileInput } from '@/shared/components/elements/FileInput'
import { Card } from '@/shared/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { MimeType } from '@/shared/constants/mimetype'
import { mimeDescriptions } from '@/shared/constants/mimetypes-descriptions'
import { useConversionStateChange } from '@/features/conversion/hooks/useConversionStateChange'
import { getFileDownloadUrl } from '@/shared/utils/get-file-download-url'

export function Conversion() {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<null | string>(null)
  const [availableConversions, setAvailableConversions] = useState<
    SupportedConversion[]
  >([])
  const [selectedConversion, setSelectedConversion] =
    useState<SupportedConversion | null>(null)
  const { data: recentConversions } = useRecentConversion()
  useConversionStateChange();

  useEffect(() => {
    if (file === null) {
      setAvailableConversions([])
      return
    }

    const availableConversions = supportedConversions.filter(
      sc => sc.fileFromMimetype === file.type,
    )
    if (availableConversions.length === 0) {
      const mimetypeDescription = mimeDescriptions[file.type as MimeType]
      setError(
        mimetypeDescription
          ? mimetypeDescription + ' is not supported yet.'
          : 'File type is not supported.',
      )
    }

    setAvailableConversions(availableConversions)
  }, [file])
  useEffect(() => {
    if (error === null) return;
    setSelectedConversion(null)
    setAvailableConversions([])
  }, [error])
  useEffect(() => {
    setSelectedConversion(null);
  }, [availableConversions])
  const selectHandler = (value: string) => {
    setSelectedConversion(
      availableConversions.find(c => c.fileToMimetype === value) ?? null,
    )
  }

  const FormElement = useMemo(() => {
    if (!selectedConversion || !file) return null
    return selectedConversion.Form(file, selectedConversion.path)
  }, [selectedConversion, file])

  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <Card className='p-8'>
        <FileInput
          file={file}
          setFile={setFile}
          error={error}
          setError={setError}
        />
        <div className='flex flex-col gap-4 justify-center items-center'>
          {availableConversions.length > 0 && (
            <Select onValueChange={selectHandler}>
              <SelectTrigger className='w-[240px]'>
                <SelectValue placeholder='Select a format to convert' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Formats</SelectLabel>
                  {availableConversions.map(c => (
                    <SelectItem value={c.fileToMimetype} key={c.fileToMimetype}>
                      {c.fileToType}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
          {selectedConversion && FormElement && <FormElement />}
        </div>
      </Card>
      <div className='flex flex-col gap-2 w-full justify-center'>
        {recentConversions &&
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
          ))}
      </div>
    </div>
  )
}
