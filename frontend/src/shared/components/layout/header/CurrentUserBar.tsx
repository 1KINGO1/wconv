'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/shared/components/ui/avatar'
import { useCurrentUser } from '@/shared/hooks/useCurrentUser'
import { Button } from '@/shared/components/ui/button'
import Image from 'next/image'
import { useLogout } from '@/shared/hooks/useLogout'
import { useMobile } from '@/shared/hooks/useMobile'

export function CurrentUserBar() {
  const { data } = useCurrentUser()
  const { logout } = useLogout()
  const isMobile = useMobile()

  const logoutHandler = () => {
    logout()
  }

  return (
    <div className='flex gap-3 items-center'>
      {isMobile ? null : (<>
        <Avatar className='w-10 h-10'>
          <AvatarImage src={data?.avatarUrl} />
          <AvatarFallback>
            {data?.displayName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <p className='text-lg'>{data?.displayName}</p>
      </>)}

      <Button variant='ghost' onClick={logoutHandler} className='p-2'>
        <Image src='/logout-icon.svg' alt='logout' width={16} height={16} />
      </Button>
    </div>
  )
}
