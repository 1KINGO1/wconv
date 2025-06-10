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
  [JobType.DOCX_TO_HTML]: {
    conversionFormat: 'html',
    conversionFromFormat: ConversionFormat.DOCX,
    conversionToFormat: ConversionFormat.HTML,
  },

  /* DOCX */
  [JobType.DOCX_TO_PDF]: {
    conversionFormat: 'pdf',
    conversionFromFormat: ConversionFormat.DOCX,
    conversionToFormat: ConversionFormat.PDF,
  },

  /* MP3 */
  [JobType.MP3_TO_AAC]: {
    conversionFormat: 'aac',
    conversionFromFormat: ConversionFormat.MP3,
    conversionToFormat: ConversionFormat.AAC,
  },
  [JobType.MP3_TO_WAV]: {
    conversionFormat: 'wav',
    conversionFromFormat: ConversionFormat.MP3,
    conversionToFormat: ConversionFormat.WAV,
  },
  [JobType.MP3_TO_OGG]: {
    conversionFormat: 'ogg',
    conversionFromFormat: ConversionFormat.MP3,
    conversionToFormat: ConversionFormat.OGG,
  },
  [JobType.MP3_TO_FLAC]: {
    conversionFormat: 'flac',
    conversionFromFormat: ConversionFormat.MP3,
    conversionToFormat: ConversionFormat.FLAC,
  },

  /* AAC */
  [JobType.AAC_TO_MP3]: {
    conversionFormat: 'mp3',
    conversionFromFormat: ConversionFormat.AAC,
    conversionToFormat: ConversionFormat.MP3,
  },
  [JobType.AAC_TO_WAV]: {
    conversionFormat: 'wav',
    conversionFromFormat: ConversionFormat.AAC,
    conversionToFormat: ConversionFormat.WAV,
  },
  [JobType.AAC_TO_OGG]: {
    conversionFormat: 'ogg',
    conversionFromFormat: ConversionFormat.AAC,
    conversionToFormat: ConversionFormat.OGG,
  },
  [JobType.AAC_TO_FLAC]: {
    conversionFormat: 'flac',
    conversionFromFormat: ConversionFormat.AAC,
    conversionToFormat: ConversionFormat.FLAC,
  },

  /* WAV */
  [JobType.WAV_TO_MP3]: {
    conversionFormat: 'mp3',
    conversionFromFormat: ConversionFormat.WAV,
    conversionToFormat: ConversionFormat.MP3,
  },
  [JobType.WAV_TO_AAC]: {
    conversionFormat: 'aac',
    conversionFromFormat: ConversionFormat.WAV,
    conversionToFormat: ConversionFormat.AAC,
  },
  [JobType.WAV_TO_OGG]: {
    conversionFormat: 'ogg',
    conversionFromFormat: ConversionFormat.WAV,
    conversionToFormat: ConversionFormat.OGG,
  },
  [JobType.WAV_TO_FLAC]: {
    conversionFormat: 'flac',
    conversionFromFormat: ConversionFormat.WAV,
    conversionToFormat: ConversionFormat.FLAC,
  },

  /* OGG */
  [JobType.OGG_TO_MP3]: {
    conversionFormat: 'mp3',
    conversionFromFormat: ConversionFormat.OGG,
    conversionToFormat: ConversionFormat.MP3,
  },
  [JobType.OGG_TO_AAC]: {
    conversionFormat: 'aac',
    conversionFromFormat: ConversionFormat.OGG,
    conversionToFormat: ConversionFormat.AAC,
  },
  [JobType.OGG_TO_WAV]: {
    conversionFormat: 'wav',
    conversionFromFormat: ConversionFormat.OGG,
    conversionToFormat: ConversionFormat.WAV,
  },
  [JobType.OGG_TO_FLAC]: {
    conversionFormat: 'flac',
    conversionFromFormat: ConversionFormat.OGG,
    conversionToFormat: ConversionFormat.FLAC,
  },

  /* FLAC */
  [JobType.FLAC_TO_MP3]: {
    conversionFormat: 'mp3',
    conversionFromFormat: ConversionFormat.FLAC,
    conversionToFormat: ConversionFormat.MP3,
  },
  [JobType.FLAC_TO_AAC]: {
    conversionFormat: 'aac',
    conversionFromFormat: ConversionFormat.FLAC,
    conversionToFormat: ConversionFormat.AAC,
  },
  [JobType.FLAC_TO_WAV]: {
    conversionFormat: 'wav',
    conversionFromFormat: ConversionFormat.FLAC,
    conversionToFormat: ConversionFormat.WAV,
  },
  [JobType.FLAC_TO_OGG]: {
    conversionFormat: 'ogg',
    conversionFromFormat: ConversionFormat.FLAC,
    conversionToFormat: ConversionFormat.OGG,
  },
} as const

export type JobTypeInfo = (typeof JobTypeInfo)[JobType]
