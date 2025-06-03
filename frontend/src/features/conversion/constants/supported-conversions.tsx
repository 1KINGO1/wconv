import { FC } from 'react'

import { SimpleConversionForm } from '@/features/conversion/forms/SimpleConversionForm'
import { ConversionFormat } from '@/shared/constants/conversion-format'
import { MimeType } from '@/shared/constants/mimetype'
import { JpgToPngForm } from '@/features/conversion/forms/JpgToPngForm'

export interface SupportedConversion {
  fileFromMimetype: MimeType
  fileFromType: ConversionFormat
  fileToMimetype: MimeType
  fileToType: ConversionFormat
  path: string
  Form: (file: File, path: string) => FC
}

export const supportedConversions: SupportedConversion[] = [
  {
    fileFromMimetype: MimeType.JPEG,
    fileFromType: ConversionFormat.JPG,
    fileToMimetype: MimeType.PNG,
    fileToType: ConversionFormat.PNG,
    path: 'jpg-to-png',
    Form: JpgToPngForm,
  },
]

function FormElement() {
  return () => (
    <>
      <h1>test test</h1>
    </>
  )
}
