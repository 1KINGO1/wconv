'use client'

import type { VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { Button, buttonVariants } from '@/shared/components/ui/button'

import { useRouter } from 'next/navigation'

export function RedirectButton(
  props: React.ComponentProps &
    VariantProps & {
      asChild?: boolean
      url: string
      blank?: boolean
    },
) {
  const { url, blank, children, ...rest } = props

  const router = useRouter()
  const clickHandler = () => {
    if (blank) {
      window.open(url, '_blank')
      return
    }
    router.push(url)
  }

  return (
    <Button {...rest} onClick={clickHandler}>
      {props.children}
    </Button>
  )
}
