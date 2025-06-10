import { FC, ReactNode } from 'react'

import { BasicImageConversionForm } from '@/features/conversion/forms/BasicImageConversionForm'
import { ConversionFormat } from '@/shared/constants/conversion-format'
import { MimeType } from '@/shared/constants/mimetype'
import { EmptyForm } from '@/features/conversion/forms/EmptyForm'

export interface SupportedConversion {
  fileFromMimetype: MimeType
  fileFromType: ConversionFormat
  fileToMimetype: MimeType
  fileToType: ConversionFormat
  url: string
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
    url: 'jpg-to-png',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.JPEG,
    fileFromType: ConversionFormat.JPG,
    fileToMimetype: MimeType.WEBP,
    fileToType: ConversionFormat.WEBP,
    url: 'jpg-to-webp',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.JPEG,
    fileFromType: ConversionFormat.JPG,
    fileToMimetype: MimeType.AVIF,
    fileToType: ConversionFormat.AVIF,
    url: 'jpg-to-avif',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.JPEG,
    fileFromType: ConversionFormat.JPG,
    fileToMimetype: MimeType.GIF,
    fileToType: ConversionFormat.GIF,
    url: 'jpg-to-gif',
    Form: BasicImageConversionForm,
  },
  // PNG
  {
    fileFromMimetype: MimeType.PNG,
    fileFromType: ConversionFormat.PNG,
    fileToMimetype: MimeType.JPEG,
    fileToType: ConversionFormat.JPG,
    url: 'png-to-jpg',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.PNG,
    fileFromType: ConversionFormat.PNG,
    fileToMimetype: MimeType.WEBP,
    fileToType: ConversionFormat.WEBP,
    url: 'png-to-webp',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.PNG,
    fileFromType: ConversionFormat.PNG,
    fileToMimetype: MimeType.AVIF,
    fileToType: ConversionFormat.AVIF,
    url: 'png-to-avif',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.PNG,
    fileFromType: ConversionFormat.PNG,
    fileToMimetype: MimeType.GIF,
    fileToType: ConversionFormat.GIF,
    url: 'png-to-gif',
    Form: BasicImageConversionForm,
  },

  // WEBP
  {
    fileFromMimetype: MimeType.WEBP,
    fileFromType: ConversionFormat.WEBP,
    fileToMimetype: MimeType.JPEG,
    fileToType: ConversionFormat.JPG,
    url: 'webp-to-jpg',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.WEBP,
    fileFromType: ConversionFormat.WEBP,
    fileToMimetype: MimeType.PNG,
    fileToType: ConversionFormat.PNG,
    url: 'webp-to-png',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.WEBP,
    fileFromType: ConversionFormat.WEBP,
    fileToMimetype: MimeType.AVIF,
    fileToType: ConversionFormat.AVIF,
    url: 'webp-to-avif',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.WEBP,
    fileFromType: ConversionFormat.WEBP,
    fileToMimetype: MimeType.GIF,
    fileToType: ConversionFormat.GIF,
    url: 'webp-to-gif',
    Form: BasicImageConversionForm,
  },

  // GIF
  {
    fileFromMimetype: MimeType.GIF,
    fileFromType: ConversionFormat.GIF,
    fileToMimetype: MimeType.JPEG,
    fileToType: ConversionFormat.JPG,
    url: 'gif-to-jpg',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.GIF,
    fileFromType: ConversionFormat.GIF,
    fileToMimetype: MimeType.PNG,
    fileToType: ConversionFormat.PNG,
    url: 'gif-to-png',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.GIF,
    fileFromType: ConversionFormat.GIF,
    fileToMimetype: MimeType.WEBP,
    fileToType: ConversionFormat.WEBP,
    url: 'gif-to-webp',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.GIF,
    fileFromType: ConversionFormat.GIF,
    fileToMimetype: MimeType.AVIF,
    fileToType: ConversionFormat.AVIF,
    url: 'gif-to-avif',
    Form: BasicImageConversionForm,
  },

  // AVIF
  {
    fileFromMimetype: MimeType.AVIF,
    fileFromType: ConversionFormat.AVIF,
    fileToMimetype: MimeType.JPEG,
    fileToType: ConversionFormat.JPG,
    url: 'avif-to-jpg',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.AVIF,
    fileFromType: ConversionFormat.AVIF,
    fileToMimetype: MimeType.PNG,
    fileToType: ConversionFormat.PNG,
    url: 'avif-to-png',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.AVIF,
    fileFromType: ConversionFormat.AVIF,
    fileToMimetype: MimeType.WEBP,
    fileToType: ConversionFormat.WEBP,
    url: 'avif-to-webp',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.AVIF,
    fileFromType: ConversionFormat.AVIF,
    fileToMimetype: MimeType.TIFF,
    fileToType: ConversionFormat.TIFF,
    url: 'avif-to-tiff',
    Form: BasicImageConversionForm,
  },
  {
    fileFromMimetype: MimeType.PDF,
    fileFromType: ConversionFormat.PDF,
    fileToMimetype: MimeType.MS_WORD,
    fileToType: ConversionFormat.DOCX,
    url: 'pdf-to-docx',
    Form: EmptyForm,
  },

  {
    fileFromMimetype: MimeType.MS_WORD_OPENXML,
    fileFromType: ConversionFormat.DOCX,
    fileToMimetype: MimeType.PDF,
    fileToType: ConversionFormat.PDF,
    url: 'docx-to-pdf',
    Form: EmptyForm,
  },

  {
    fileFromMimetype: MimeType.MP3,
    fileFromType: ConversionFormat.MP3,
    fileToMimetype: MimeType.AAC,
    fileToType: ConversionFormat.AAC,
    url: 'mp3-to-aac',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.MP3,
    fileFromType: ConversionFormat.MP3,
    fileToMimetype: MimeType.WAV,
    fileToType: ConversionFormat.WAV,
    url: 'mp3-to-wav',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.MP3,
    fileFromType: ConversionFormat.MP3,
    fileToMimetype: MimeType.OGG_AUDIO,
    fileToType: ConversionFormat.OGG,
    url: 'mp3-to-ogg',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.MP3,
    fileFromType: ConversionFormat.MP3,
    fileToMimetype: MimeType.FLAC,
    fileToType: ConversionFormat.FLAC,
    url: 'mp3-to-flac',
    Form: EmptyForm,
  },

  /* AAC conversions */
  {
    fileFromMimetype: MimeType.AAC,
    fileFromType: ConversionFormat.AAC,
    fileToMimetype: MimeType.MP3,
    fileToType: ConversionFormat.MP3,
    url: 'aac-to-mp3',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.AAC,
    fileFromType: ConversionFormat.AAC,
    fileToMimetype: MimeType.WAV,
    fileToType: ConversionFormat.WAV,
    url: 'aac-to-wav',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.AAC,
    fileFromType: ConversionFormat.AAC,
    fileToMimetype: MimeType.OGG_AUDIO,
    fileToType: ConversionFormat.OGG,
    url: 'aac-to-ogg',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.AAC,
    fileFromType: ConversionFormat.AAC,
    fileToMimetype: MimeType.FLAC,
    fileToType: ConversionFormat.FLAC,
    url: 'aac-to-flac',
    Form: EmptyForm,
  },

  /* WAV conversions */
  {
    fileFromMimetype: MimeType.WAV,
    fileFromType: ConversionFormat.WAV,
    fileToMimetype: MimeType.MP3,
    fileToType: ConversionFormat.MP3,
    url: 'wav-to-mp3',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.WAV,
    fileFromType: ConversionFormat.WAV,
    fileToMimetype: MimeType.AAC,
    fileToType: ConversionFormat.AAC,
    url: 'wav-to-aac',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.WAV,
    fileFromType: ConversionFormat.WAV,
    fileToMimetype: MimeType.OGG_AUDIO,
    fileToType: ConversionFormat.OGG,
    url: 'wav-to-ogg',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.WAV,
    fileFromType: ConversionFormat.WAV,
    fileToMimetype: MimeType.FLAC,
    fileToType: ConversionFormat.FLAC,
    url: 'wav-to-flac',
    Form: EmptyForm,
  },

  /* OGG conversions */
  {
    fileFromMimetype: MimeType.OGG_AUDIO,
    fileFromType: ConversionFormat.OGG,
    fileToMimetype: MimeType.MP3,
    fileToType: ConversionFormat.MP3,
    url: 'ogg-to-mp3',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.OGG_AUDIO,
    fileFromType: ConversionFormat.OGG,
    fileToMimetype: MimeType.AAC,
    fileToType: ConversionFormat.AAC,
    url: 'ogg-to-aac',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.OGG_AUDIO,
    fileFromType: ConversionFormat.OGG,
    fileToMimetype: MimeType.WAV,
    fileToType: ConversionFormat.WAV,
    url: 'ogg-to-wav',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.OGG_AUDIO,
    fileFromType: ConversionFormat.OGG,
    fileToMimetype: MimeType.FLAC,
    fileToType: ConversionFormat.FLAC,
    url: 'ogg-to-flac',
    Form: EmptyForm,
  },

  /* FLAC conversions */
  {
    fileFromMimetype: MimeType.FLAC,
    fileFromType: ConversionFormat.FLAC,
    fileToMimetype: MimeType.MP3,
    fileToType: ConversionFormat.MP3,
    url: 'flac-to-mp3',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.FLAC,
    fileFromType: ConversionFormat.FLAC,
    fileToMimetype: MimeType.AAC,
    fileToType: ConversionFormat.AAC,
    url: 'flac-to-aac',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.FLAC,
    fileFromType: ConversionFormat.FLAC,
    fileToMimetype: MimeType.WAV,
    fileToType: ConversionFormat.WAV,
    url: 'flac-to-wav',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.FLAC,
    fileFromType: ConversionFormat.FLAC,
    fileToMimetype: MimeType.OGG_AUDIO,
    fileToType: ConversionFormat.OGG,
    url: 'flac-to-ogg',
    Form: EmptyForm,
  },
  {
    fileFromMimetype: MimeType.MS_WORD_OPENXML,
    fileFromType: ConversionFormat.DOCX,
    fileToMimetype: MimeType.HTML,
    fileToType: ConversionFormat.HTML,
    url: 'docx-to-html',
    Form: EmptyForm,
  },
]
