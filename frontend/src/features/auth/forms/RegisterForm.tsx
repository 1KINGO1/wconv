'use client'

import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'

import { AuthWrapper } from '@/features/auth/AuthWrapper'
import { useRegister } from '@/features/auth/hooks/useRegister'
import { Button } from '@/shared/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import {
  registerSchema,
  TypeRegisterSchema,
} from '@/shared/schemas/register.schema'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

export function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      password: '',
      passwordMatch: '',
    },
  })
  const registerMutation = useRegister()
  const router = useRouter()

  const submitHandler = async (data: TypeRegisterSchema) => {
    if (data.password !== data.passwordMatch) {
      return form.setError('passwordMatch', {
        message: 'Passwords do not match',
      })
    }

    try {
      await registerMutation.mutateAsync(data)
      router.push('/conversion/dashboard')
    } catch (e) {
      const error = e as AxiosError
      if (error.status === 409) {
        return form.setError('username', {
          message:
            (error.response?.data as { message: string })?.message ??
            error.message,
        })
      }
    }
  }

  return (
    <AuthWrapper
      header='Registration'
      description='Register a new account'
      backButtonHref='/login'
      backButtonLabel='Log In'
    >
      <div className='flex flex-col gap-5'>
        <Form {...form}>
          <form
            className='flex flex-col gap-5'
            onSubmit={form.handleSubmit(submitHandler)}
          >
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='Username' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='Password' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='passwordMatch'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repeat Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Repeat Password'
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full text-base'>Register</Button>
          </form>
        </Form>
      </div>
    </AuthWrapper>
  )
}
