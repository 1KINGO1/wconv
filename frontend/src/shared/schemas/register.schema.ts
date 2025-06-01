import { z } from 'zod'

export const registerSchema = z.object({
  username: z.string().min(4).max(14),
  password: z.string().min(4).max(30),
  passwordMatch: z.string().min(4).max(30),
})

export type TypeRegisterSchema = z.infer<typeof registerSchema>
