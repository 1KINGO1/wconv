'use client'

import { PropsWithChildren, useState } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'

import { Button } from '@/shared/components/ui/button'
import { Form } from '@/shared/components/ui/form'

interface BaseConversionFormParams<T extends FieldValues> extends PropsWithChildren {
  form: UseFormReturn<T>
  mutateFunction: (data: T) => Promise<void>
  buttonText?: string
}

export function BaseConversionForm<T extends FieldValues>({
  children,
  form,
  mutateFunction,
  buttonText
}: BaseConversionFormParams<T>) {
  const [loading, setLoading] = useState(false)

  const submitHandler = async (data: T) => {
    if (loading) return
    setLoading(true)
    try {
      await mutateFunction(data)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)} className='flex flex-col gap-2 w-full'>
        {children}
        <Button disabled={loading}>{buttonText || 'Convert'}</Button>
      </form>
    </Form>
  )
}
