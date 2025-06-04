import { ConversionFormat } from '@/shared/constants/conversion-format'

import { ConversionState } from '../constants/conversion-state'

export interface Conversion {
  id: string
  state: ConversionState
  fileFromName: string
  fileToName: string
  fileFromFormat: ConversionFormat
  fileToFormat: ConversionFormat
  userId: string
  createdAt: string
  updatedAt: string
}
