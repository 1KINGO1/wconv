import { ConversionFormat } from 'prisma/generated'

import { JobType } from './job-type.enum'

interface JobTypeInfoItem {
  conversionFormat: string
  conversionFromFormat: ConversionFormat
  conversionToFormat: ConversionFormat
}

export const JobTypeInfo: Record<JobType, JobTypeInfoItem> = {
  /* PNG */
  [JobType.PNG_TO_JPG]: {
    conversionFormat: 'jpeg',
    conversionFromFormat: ConversionFormat.PNG,
    conversionToFormat: ConversionFormat.JPG,
  },
  [JobType.PNG_TO_WEBP]: {
    conversionFormat: 'webp',
    conversionFromFormat: ConversionFormat.PNG,
    conversionToFormat: ConversionFormat.WEBP,
  },
  [JobType.PNG_TO_AVIF]: {
    conversionFormat: 'avif',
    conversionFromFormat: ConversionFormat.PNG,
    conversionToFormat: ConversionFormat.AVIF,
  },
  [JobType.PNG_TO_TIFF]: {
    conversionFormat: 'tiff',
    conversionFromFormat: ConversionFormat.PNG,
    conversionToFormat: ConversionFormat.TIFF,
  },
  [JobType.PNG_TO_GIF]: {
    conversionFormat: 'gif',
    conversionFromFormat: ConversionFormat.PNG,
    conversionToFormat: ConversionFormat.GIF,
  },

  /* JPG */
  [JobType.JPG_TO_PNG]: {
    conversionFormat: 'png',
    conversionFromFormat: ConversionFormat.JPG,
    conversionToFormat: ConversionFormat.PNG,
  },
  [JobType.JPG_TO_WEBP]: {
    conversionFormat: 'webp',
    conversionFromFormat: ConversionFormat.JPG,
    conversionToFormat: ConversionFormat.WEBP,
  },
  [JobType.JPG_TO_AVIF]: {
    conversionFormat: 'avif',
    conversionFromFormat: ConversionFormat.JPG,
    conversionToFormat: ConversionFormat.AVIF,
  },
  [JobType.JPG_TO_TIFF]: {
    conversionFormat: 'tiff',
    conversionFromFormat: ConversionFormat.JPG,
    conversionToFormat: ConversionFormat.TIFF,
  },
  [JobType.JPG_TO_GIF]: {
    conversionFormat: 'gif',
    conversionFromFormat: ConversionFormat.JPG,
    conversionToFormat: ConversionFormat.GIF,
  },

  /* WEBP */
  [JobType.WEBP_TO_PNG]: {
    conversionFormat: 'png',
    conversionFromFormat: ConversionFormat.WEBP,
    conversionToFormat: ConversionFormat.PNG,
  },
  [JobType.WEBP_TO_JPG]: {
    conversionFormat: 'jpeg',
    conversionFromFormat: ConversionFormat.WEBP,
    conversionToFormat: ConversionFormat.JPG,
  },
  [JobType.WEBP_TO_AVIF]: {
    conversionFormat: 'avif',
    conversionFromFormat: ConversionFormat.WEBP,
    conversionToFormat: ConversionFormat.AVIF,
  },
  [JobType.WEBP_TO_TIFF]: {
    conversionFormat: 'tiff',
    conversionFromFormat: ConversionFormat.WEBP,
    conversionToFormat: ConversionFormat.TIFF,
  },
  [JobType.WEBP_TO_GIF]: {
    conversionFormat: 'gif',
    conversionFromFormat: ConversionFormat.WEBP,
    conversionToFormat: ConversionFormat.GIF,
  },

  /*AVIF*/
  [JobType.AVIF_TO_PNG]: {
    conversionFormat: 'png',
    conversionFromFormat: ConversionFormat.AVIF,
    conversionToFormat: ConversionFormat.PNG,
  },
  [JobType.AVIF_TO_JPG]: {
    conversionFormat: 'jpeg',
    conversionFromFormat: ConversionFormat.AVIF,
    conversionToFormat: ConversionFormat.JPG,
  },
  [JobType.AVIF_TO_WEBP]: {
    conversionFormat: 'webp',
    conversionFromFormat: ConversionFormat.AVIF,
    conversionToFormat: ConversionFormat.WEBP,
  },
  [JobType.AVIF_TO_TIFF]: {
    conversionFormat: 'tiff',
    conversionFromFormat: ConversionFormat.AVIF,
    conversionToFormat: ConversionFormat.TIFF,
  },
  [JobType.AVIF_TO_GIF]: {
    conversionFormat: 'gif',
    conversionFromFormat: ConversionFormat.AVIF,
    conversionToFormat: ConversionFormat.GIF,
  },

  /*TIFF*/
  [JobType.TIFF_TO_PNG]: {
    conversionFormat: 'png',
    conversionFromFormat: ConversionFormat.TIFF,
    conversionToFormat: ConversionFormat.PNG,
  },
  [JobType.TIFF_TO_JPG]: {
    conversionFormat: 'jpeg',
    conversionFromFormat: ConversionFormat.TIFF,
    conversionToFormat: ConversionFormat.JPG,
  },
  [JobType.TIFF_TO_WEBP]: {
    conversionFormat: 'webp',
    conversionFromFormat: ConversionFormat.TIFF,
    conversionToFormat: ConversionFormat.WEBP,
  },
  [JobType.TIFF_TO_AVIF]: {
    conversionFormat: 'avif',
    conversionFromFormat: ConversionFormat.TIFF,
    conversionToFormat: ConversionFormat.AVIF,
  },
  [JobType.TIFF_TO_GIF]: {
    conversionFormat: 'gif',
    conversionFromFormat: ConversionFormat.TIFF,
    conversionToFormat: ConversionFormat.GIF,
  },

  /*GIF*/
  [JobType.GIF_TO_PNG]: {
    conversionFormat: 'png',
    conversionFromFormat: ConversionFormat.GIF,
    conversionToFormat: ConversionFormat.PNG,
  },
  [JobType.GIF_TO_JPG]: {
    conversionFormat: 'jpeg',
    conversionFromFormat: ConversionFormat.GIF,
    conversionToFormat: ConversionFormat.JPG,
  },
  [JobType.GIF_TO_WEBP]: {
    conversionFormat: 'webp',
    conversionFromFormat: ConversionFormat.GIF,
    conversionToFormat: ConversionFormat.WEBP,
  },
  [JobType.GIF_TO_AVIF]: {
    conversionFormat: 'avif',
    conversionFromFormat: ConversionFormat.GIF,
    conversionToFormat: ConversionFormat.AVIF,
  },
  [JobType.GIF_TO_TIFF]: {
    conversionFormat: 'tiff',
    conversionFromFormat: ConversionFormat.GIF,
    conversionToFormat: ConversionFormat.TIFF,
  },

  /* PDF */
  [JobType.PDF_TO_DOCX]: {
    conversionFormat: 'docx',
    conversionFromFormat: ConversionFormat.PDF,
    conversionToFormat: ConversionFormat.DOCX,
  },
  [JobType.PDF_TO_PPTX]: {
    conversionFormat: 'pptx',
    conversionFromFormat: ConversionFormat.PDF,
    conversionToFormat: ConversionFormat.PPTX,
  },

  /* DOCX */
  [JobType.DOCX_TO_PDF]: {
    conversionFormat: 'pdf',
    conversionFromFormat: ConversionFormat.DOCX,
    conversionToFormat: ConversionFormat.PDF,
  },
} as const

export type JobTypeInfo = (typeof JobTypeInfo)[JobType]
