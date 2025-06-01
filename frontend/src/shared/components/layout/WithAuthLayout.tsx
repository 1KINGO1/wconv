'use client'

import { PropsWithChildren, useEffect } from 'react'

import { useCurrentUser } from '@/shared/hooks/useCurrentUser'

import { useRouter } from 'next/navigation'

export function WithAuthLayout({ children }: PropsWithChildren) {
  const currentUserQuery = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (currentUserQuery.isError) {
      router.push('/login')
    }
  }, [currentUserQuery.isError])

  return children
}
