export const ConversionFormat = {
  PDF: 'PDF',
  PNG: 'PNG',
  JPG: 'JPG',
  WEBP: 'WEBP',
  TIFF: 'TIFF',
  AVIF: 'AVIF',
  GIF: 'GIF',
  DOCX: 'DOCX',
  MP3: 'MP3',
  WAV: 'WAV',
  OGG: 'OGG',
  FLAC: 'FLAC',
  AAC: 'AAC',
} as const

export type ConversionFormat =
  (typeof ConversionFormat)[keyof typeof ConversionFormat]
