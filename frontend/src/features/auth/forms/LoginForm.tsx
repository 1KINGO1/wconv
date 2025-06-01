'use client'

import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'

import { AuthWrapper } from '@/features/auth/AuthWrapper'
import { useLogin } from '@/features/auth/hooks/useLogin'
import { RedirectButton } from '@/shared/components/elements/RedirectButton'
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
import { Separator } from '@/shared/components/ui/separator'
import { loginSchema, TypeLoginSchema } from '@/shared/schemas/login.schema'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const loginMutation = useLogin()
  const router = useRouter()

  const submitHandler = async (data: TypeLoginSchema) => {
    try {
      await loginMutation.mutateAsync(data)
      router.push('/conversion/dashboard')
    } catch (e) {
      const error = e as AxiosError
      const responseData = error.response?.data as
        | { message: string }
        | undefined

      if (responseData && responseData.message === 'User not found') {
        return form.setError('username', {
          message: responseData.message,
        })
      }

      if (responseData && responseData.message === 'Invalid Credentials') {
        return form.setError('password', {
          message: responseData.message,
        })
      }

      console.log(e)
    }
  }

  return (
    <AuthWrapper
      header='Welcome Back'
      description='Log in to continue to WConv'
      backButtonHref='/register'
      backButtonLabel='Sign up'
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
            <Button className='w-full text-base'>Log In</Button>
          </form>
        </Form>
        <Separator />
        <RedirectButton
          variant='outline'
          url='http://localhost:3000/api/auth/google'
        >
          Log In with Google
        </RedirectButton>
      </div>
    </AuthWrapper>
  )
}
