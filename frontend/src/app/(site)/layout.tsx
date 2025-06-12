import { PropsWithChildren } from 'react'

import { SocketProvider } from '@/providers/SocketProvider'
import { LayoutContainer } from '@/shared/components/layout/LayoutContainer'
import { WithAuthLayout } from '@/shared/components/layout/WithAuthLayout'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutContainer>
      <SocketProvider>
        <WithAuthLayout>
          {children}
        </WithAuthLayout>
      </SocketProvider>
    </LayoutContainer>
  )
}
