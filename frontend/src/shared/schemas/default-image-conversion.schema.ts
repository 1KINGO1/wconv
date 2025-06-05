import { z } from 'zod'

export const defaultImageConversionSchema = z.object({
  quality: z.number().min(0).max(100),
  compressionLevel: z.number().min(0).max(9),
  resizeWidth: z.number().min(1).max(10000).nullable(),
  resizeHeight: z.number().min(1).max(10000).nullable(),
})

export type DefaultImageConversionSchemaType = z.infer
