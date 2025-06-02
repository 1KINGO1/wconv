import { ConversionState } from '../constants/conversion-state'
import { ConversionFormat } from '@/shared/constants/conversion-format'

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
