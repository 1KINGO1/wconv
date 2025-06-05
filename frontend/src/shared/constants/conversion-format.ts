export const ConversionFormat = {
  PDF: 'PDF',
  PNG: 'PNG',
  JPG: 'JPG',
  WEBP: 'WEBP',
  TIFF: 'TIFF',
  AVIF: 'AVIF',
  GIF: 'GIF',
  DOCX: 'DOCX',
} as const

export type ConversionFormat =
  (typeof ConversionFormat)[keyof typeof ConversionFormat]
