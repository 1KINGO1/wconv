'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useCreateConversion } from '@/features/conversion/hooks/useCreateConversion'
import { Button } from '@/shared/components/ui/button'
import { Form } from '@/shared/components/ui/form'

export function SimpleConversionForm(file: File, requestSendUrl: string) {
  return function () {
    const form = useForm()
    const [loading, setLoading] = useState(false)
    const conversionMutation = useCreateConversion(requestSendUrl, file)

    const submitHandler = async () => {
      if (loading) return;
      setLoading(true)
      await conversionMutation.mutateAsync({})
      setLoading(false)
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)}>
          <Button disabled={loading}>Convert</Button>
        </form>
      </Form>
    )
  }
}
