'use client'

import { PropsWithChildren } from 'react'
import { useConversionStateChange } from '@/features/conversion/hooks/useConversionStateChange'

export function ConversionWrapper({children}: PropsWithChildren){
  useConversionStateChange();

  return (
    <>
      {children}
    </>
  )
}