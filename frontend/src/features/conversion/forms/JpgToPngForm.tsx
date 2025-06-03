'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useCreateConversion } from '@/features/conversion/hooks/useCreateConversion'
import { Button } from '@/shared/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form'
import {
  defaultImageConversionSchema,
  DefaultImageConversionSchemaType,
} from '@/shared/schemas/default-image-conversion.schema'

import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/shared/components/ui/input'

export function JpgToPngForm(file: File, requestSendUrl: string) {
  return function () {
    const form = useForm({
      resolver: zodResolver(defaultImageConversionSchema),
      defaultValues: {
        quality: 90,
        compressionLevel: 6,
        resizeWidth: null,
        resizeHeight: null,
      },
    })
    const [loading, setLoading] = useState(false)
    const conversionMutation = useCreateConversion(requestSendUrl, file)

    const submitHandler = async (data: DefaultImageConversionSchemaType) => {
      if (loading) return
      setLoading(true)
      await conversionMutation.mutateAsync(data)
      setLoading(false)
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-3 w-full">
          <FormField
            control={form.control}
            name='quality'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quality</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    step={10}
                    placeholder='Quality'
                    min={10}
                    max={100}
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='compressionLevel'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Compression Level</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Compression Level'
                    min={1}
                    max={9}
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='resizeWidth'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resize Width</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Resize Width'
                    min={1}
                    max={10000}
                    {...field}
                    value={field.value ?? ''}
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : null) }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='resizeHeight'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resize Height</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Resize Height'
                    min={1}
                    max={10000}
                    {...field}
                    value={field.value ?? ''}
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : null) }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading}>Convert</Button>
        </form>
      </Form>
    )
  }
}
