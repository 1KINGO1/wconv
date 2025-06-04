import { RedirectButton } from '@/shared/components/elements/RedirectButton'
import { Card } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { ConversionFormat } from '@/shared/constants/conversion-format'
import { ConversionState } from '@/shared/constants/conversion-state'
import { normalizeFileName } from '@/shared/utils/normalize-file-name'
import { cn } from '@/shared/utils/utils'

import Image from 'next/image'

import { FileFormatBadge } from './FileFormatBadge'

interface ConversionItemProps {
  state: ConversionState
  fileFromName: string
  fileFromUrl: string
  fileFromFormat: ConversionFormat
  fileToName?: string
  fileToUrl?: string
  fileToFormat: ConversionFormat
}

const colorMap: Record<ConversionState, string> = {
  [ConversionState.PENDING]: 'bg-pending',
  [ConversionState.FAILED]: 'bg-failed',
  [ConversionState.SUCCESS]: 'bg-success',
}

export function ConversionItem(props: ConversionItemProps) {
  return (
    <Card className='flex flex-row items-center px-4 py-4 w-full'>
      <div className='flex-1 flex justify-start'>
        <div
          className={cn(
            colorMap[props.state],
            'inline-block py-1 px-2 text-sm text-primary-foreground rounded-xl',
          )}
        >
          {props.state}
        </div>
      </div>
      <div className='flex items-center justify-center gap-2 flex-2 min-w-0'>
        <div className='flex items-center gap-2 min-w-0'>
          <p className='truncate'>{normalizeFileName(props.fileFromName)}</p>
          <FileFormatBadge>{props.fileFromFormat}</FileFormatBadge>
        </div>

        {props.state === ConversionState.PENDING && (
          <div className='min-w-5'>
            <Image
              src='/arrow_spin.png'
              className='rotating'
              alt='Spinning arrows'
              width={20}
              height={20}
            />
          </div>
        )}

        {props.state !== ConversionState.PENDING && (
          <div className='min-w-5'>
            <Image
              src='/arrow_right.png'
              alt='Arrow right'
              width={20}
              height={20}
            />
          </div>
        )}

        <div className='flex items-center gap-2 min-w-0'>
          {props.state !== ConversionState.FAILED ? (
            props.fileToName ? (
              <p className='truncate'>{normalizeFileName(props.fileToName)}</p>
            ) : (
              <div className='flex flex-row items-center'>
                <Skeleton className='h-5 w-[80px]' />
                <span>.{props.fileToFormat.toLowerCase()}</span>
              </div>
            )
          ) : null}
          <FileFormatBadge>{props.fileToFormat}</FileFormatBadge>
        </div>
      </div>
      <div className='flex-1 flex justify-end'>
        {props.state === ConversionState.SUCCESS && props.fileToUrl && (
          <RedirectButton
            className='text-sm'
            url={props.fileToUrl}
            blank={true}
          >
            Download
          </RedirectButton>
        )}
      </div>
    </Card>
  )
}
