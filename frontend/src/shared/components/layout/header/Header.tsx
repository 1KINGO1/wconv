import { RedirectButton } from '@/shared/components/elements/RedirectButton'
import { CurrentUserBar } from '@/shared/components/layout/header/CurrentUserBar'
import { NavBar } from '@/shared/components/layout/header/NavBar'

import Image from 'next/image'

export function Header() {
  return (
    <header className='flex flex-col lg:flex-row gap-2 items-center justify-between py-6.5 border-b-border border-b-1'>
      <div className='flex gap-2 items-center'>
        <p className='text-xl font-bold'>WCONV</p>
        <Image
          src='/logo.png'
          alt='WConv Logo'
          width={22}
          height={22}
          className='select-none'
          draggable={false}
        />
      </div>
      <div className='flex gap-2 lg:gap-5 items-center'>
        <NavBar />
        <div className='flex gap-2 items-center'>
          <RedirectButton url='/conversion/' className='p-2 rounded-xl lg:p-5 lg:rounded-full'>Convert</RedirectButton>
          <CurrentUserBar />
        </div>
      </div>
    </header>
  )
}
