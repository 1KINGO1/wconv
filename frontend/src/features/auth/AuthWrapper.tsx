import { PropsWithChildren } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'

import Image from 'next/image'
import Link from 'next/link'

interface AuthWrapperProps extends PropsWithChildren {
  header: string
  description: string
  backButtonLabel?: string
  backButtonHref?: string
}

export function AuthWrapper({
  children,
  header,
  description,
  backButtonLabel,
  backButtonHref,
}: AuthWrapperProps) {
  return (
    <div className={`h-full flex items-center justify-around px-20`}>
      {/*<div className="flex items-center justify-center gap-3">*/}
      {/*	<Image*/}
      {/*		src="/logo.png"*/}
      {/*		className="select-none"*/}
      {/*		draggable={false}*/}
      {/*		alt="WConv Logo"*/}
      {/*		width={500}*/}
      {/*		height={300}*/}
      {/*	/>*/}
      {/*</div>*/}

      <Card className='w-[400px]'>
        <CardHeader>
          <div className='flex items-center justify-center gap-3'>
            <h1 className='text-2xl font-bold'>WCONV</h1>
          </div>

          <CardTitle>{header}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className='flex justify-end'>
          {backButtonHref && (
            <Link
              href={backButtonHref}
              className='text-secondary font-light text-sm'
            >
              {backButtonLabel}
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
