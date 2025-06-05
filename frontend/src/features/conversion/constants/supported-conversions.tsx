import { FC, ReactNode } from 'react'

import { BasicImageConversionForm } from '@/features/conversion/forms/BasicImageConversionForm'
import { ConversionFormat } from '@/shared/constants/conversion-format'
import { MimeType } from '@/shared/constants/mimetype'

export interface SupportedConversion {
  fileFromMimetype: MimeType
  fileFromType: ConversionFormat
  fileToMimetype: MimeType
  fileToType: ConversionFormat
  path: string
  Form: SupportedConversionForm
}

export type SupportedConversionForm = FC<{file: File, requestSendUrl: string}>

export const supportedConversions: SupportedConversion[] = [
  // JPG
  {
    fileFromMimetype: MimeType.JPEG,
    fileFromType: ConversionFormat.JPG,
    fileToMimetype: MimeType.PNG,
    fileToType: ConversionFormat.PNG,
    path: 'jpg-to-png',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.JPEG,
    fileFromType: ConversionFormat.JPG,
    fileToMimetype: MimeType.WEBP,
    fileToType: ConversionFormat.WEBP,
    path: 'jpg-to-webp',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.JPEG,
    fileFromType: ConversionFormat.JPG,
    fileToMimetype: MimeType.AVIF,
    fileToType: ConversionFormat.AVIF,
    path: 'jpg-to-avif',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.JPEG,
    fileFromType: ConversionFormat.JPG,
    fileToMimetype: MimeType.GIF,
    fileToType: ConversionFormat.GIF,
    path: 'jpg-to-gif',
    Form: BasicImageConversionForm,
  },
  // PNG
  {
    fileFromMimetype: MimeType.PNG,
    fileFromType: ConversionFormat.PNG,
    fileToMimetype: MimeType.JPEG,
    fileToType: ConversionFormat.JPG,
    path: 'png-to-jpg',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.PNG,
    fileFromType: ConversionFormat.PNG,
    fileToMimetype: MimeType.WEBP,
    fileToType: ConversionFormat.WEBP,
    path: 'png-to-webp',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.PNG,
    fileFromType: ConversionFormat.PNG,
    fileToMimetype: MimeType.AVIF,
    fileToType: ConversionFormat.AVIF,
    path: 'png-to-avif',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.PNG,
    fileFromType: ConversionFormat.PNG,
    fileToMimetype: MimeType.GIF,
    fileToType: ConversionFormat.GIF,
    path: 'png-to-gif',
    Form: BasicImageConversionForm,
  },

  // WEBP
  {
    fileFromMimetype: MimeType.WEBP,
    fileFromType: ConversionFormat.WEBP,
    fileToMimetype: MimeType.JPEG,
    fileToType: ConversionFormat.JPG,
    path: 'webp-to-jpg',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.WEBP,
    fileFromType: ConversionFormat.WEBP,
    fileToMimetype: MimeType.PNG,
    fileToType: ConversionFormat.PNG,
    path: 'webp-to-png',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.WEBP,
    fileFromType: ConversionFormat.WEBP,
    fileToMimetype: MimeType.AVIF,
    fileToType: ConversionFormat.AVIF,
    path: 'webp-to-avif',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.WEBP,
    fileFromType: ConversionFormat.WEBP,
    fileToMimetype: MimeType.GIF,
    fileToType: ConversionFormat.GIF,
    path: 'webp-to-gif',
    Form: BasicImageConversionForm,
  },

  // GIF
  {
    fileFromMimetype: MimeType.GIF,
    fileFromType: ConversionFormat.GIF,
    fileToMimetype: MimeType.JPEG,
    fileToType: ConversionFormat.JPG,
    path: 'gif-to-jpg',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.GIF,
    fileFromType: ConversionFormat.GIF,
    fileToMimetype: MimeType.PNG,
    fileToType: ConversionFormat.PNG,
    path: 'gif-to-png',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.GIF,
    fileFromType: ConversionFormat.GIF,
    fileToMimetype: MimeType.WEBP,
    fileToType: ConversionFormat.WEBP,
    path: 'gif-to-webp',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.GIF,
    fileFromType: ConversionFormat.GIF,
    fileToMimetype: MimeType.AVIF,
    fileToType: ConversionFormat.AVIF,
    path: 'gif-to-avif',
    Form: BasicImageConversionForm,
  },

  // AVIF
  {
    fileFromMimetype: MimeType.AVIF,
    fileFromType: ConversionFormat.AVIF,
    fileToMimetype: MimeType.JPEG,
    fileToType: ConversionFormat.JPG,
    path: 'avif-to-jpg',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.AVIF,
    fileFromType: ConversionFormat.AVIF,
    fileToMimetype: MimeType.PNG,
    fileToType: ConversionFormat.PNG,
    path: 'avif-to-png',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.AVIF,
    fileFromType: ConversionFormat.AVIF,
    fileToMimetype: MimeType.WEBP,
    fileToType: ConversionFormat.WEBP,
    path: 'avif-to-webp',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.AVIF,
    fileFromType: ConversionFormat.AVIF,
    fileToMimetype: MimeType.TIFF,
    fileToType: ConversionFormat.TIFF,
    path: 'avif-to-tiff',
    Form: BasicImageConversionForm,
  },
]
