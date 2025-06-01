export const ConversionFormat = {
  PDF: 'PDF',
  PNG: 'PNG',
  JPG: 'JPG',
} as const

export type ConversionFormat =
  (typeof ConversionFormat)[keyof typeof ConversionFormat]
