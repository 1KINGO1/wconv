'use client'

import { useForm } from 'react-hook-form'

import { useConversion } from '@/features/conversion/hooks/useConversion'
import { Button } from '@/shared/components/ui/button'
import { Form } from '@/shared/components/ui/form'

export function SimpleConversionForm(file: File, requestSendUrl: string) {
  return function () {
    const form = useForm()
    const conversionMutation = useConversion(requestSendUrl, file, {})

    const submitHandler = async () => {
      await conversionMutation.mutateAsync()
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)}>
          <Button>Convert</Button>
        </form>
      </Form>
    )
  }
}
