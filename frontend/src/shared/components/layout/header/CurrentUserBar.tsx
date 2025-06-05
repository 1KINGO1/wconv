'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import { useCurrentUser } from '@/shared/hooks/useCurrentUser'

export function CurrentUserBar() {
  const { data } = useCurrentUser()

  return (
    <div className='flex gap-3 items-center'>
      <Avatar className='w-10 h-10'>
        <AvatarImage src={data?.avatarUrl} />
        <AvatarFallback>{data?.displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <p className='text-lg'>{data?.displayName}</p>
    </div>
  )
}
