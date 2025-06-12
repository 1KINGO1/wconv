import { PropsWithChildren } from 'react'

import { ConversionWrapper } from '@/features/conversion/ConversionWrapper'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ConversionWrapper>
      {children}
    </ConversionWrapper>
  )
}
