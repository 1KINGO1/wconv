import { PropsWithChildren } from 'react'

import { LayoutContainer } from '@/shared/components/layout/LayoutContainer'
import { WithAuthLayout } from '@/shared/components/layout/WithAuthLayout'
import { SocketProvider } from '@/providers/SocketProvider'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutContainer>
      <SocketProvider>
        <WithAuthLayout>{children}</WithAuthLayout>
      </SocketProvider>
    </LayoutContainer>
  )
}
