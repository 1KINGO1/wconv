import {z} from 'zod';

export const loginSchema = z.object({
	username: z.string().min(4).max(14),
	password: z.string().min(4).max(30),
})

export type TypeLoginSchema = z.infer<typeof loginSchema>