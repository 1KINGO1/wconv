'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { SupportedConversionForm } from '@/features/conversion/constants/supported-conversions'
import { BaseConversionForm } from '@/features/conversion/forms/BaseConversionForm'
import { useCreateConversion } from '@/features/conversion/hooks/useCreateConversion'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import {
  defaultImageConversionSchema,
  DefaultImageConversionSchemaType,
} from '@/shared/schemas/default-image-conversion.schema'

import { zodResolver } from '@hookform/resolvers/zod'

export const BasicImageConversionForm: SupportedConversionForm = ({
  file,
  requestSendUrl,
}) => {
  const form = useForm({
    resolver: zodResolver(defaultImageConversionSchema),
    defaultValues: {
      quality: 90,
      compressionLevel: 6,
      resizeWidth: null,
      resizeHeight: null,
    },
  })
  const [progress, setProgress] = useState(0)
  const conversionMutation = useCreateConversion(
    requestSendUrl,
    file,
    setProgress,
  )

  const submitHandler = async (data: DefaultImageConversionSchemaType) => {
    await conversionMutation.mutateAsync(data)
    setProgress(0)
  }

  let buttonText = 'Convert';

  if (progress) {
    buttonText = `${progress}%`
  }
  if (progress === 100) {
    buttonText = `${progress}% Processing`
  }

  return (
    <BaseConversionForm
      form={form}
      mutateFunction={submitHandler}
      buttonText={buttonText}
    >
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
                onChange={e => field.onChange(parseInt(e.target.value, 10))}
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
                onChange={e => field.onChange(parseInt(e.target.value, 10))}
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
                onChange={e =>
                  field.onChange(
                    e.target.value ? parseInt(e.target.value, 10) : null,
                  )
                }
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
                onChange={e =>
                  field.onChange(
                    e.target.value ? parseInt(e.target.value, 10) : null,
                  )
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </BaseConversionForm>
  )
}
