'use client'

import type { VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { Button, buttonVariants } from '@/shared/components/ui/button'

import { useRouter } from 'next/navigation'

export function RedirectButton(
  props: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean
      url: string
    },
) {
  const router = useRouter()
  const clickHandler = () => {
    router.push(props.url)
  }

  return (
    <Button {...props} onClick={clickHandler}>
      {props.children}
    </Button>
  )
}
