import { Card } from '@/shared/components/ui/card'

import Image from 'next/image'

interface FileFormatCardProps {
  imageUrl: string
  header: string
  description: string
  supportedFormats: string[]
}

export function FileFormatCard(props: FileFormatCardProps) {
  return (
    <Card className='px-8 py-7 rounded-4xl text-center gap-0 flex-1'>
      <div className='mx-auto'>
        <Image
          src={props.imageUrl}
          alt={props.header + ' Image'}
          width={25}
          height={25}
          className='select-none'
          draggable={false}
        />
      </div>
      <h2 className='text-xl mt-4'>{props.header}</h2>
      <p className='mt-2'>{props.description}</p>
      <ul className='mt-4 mx-auto list-inside text-center list-none flex flex-col gap-2'>
        {props.supportedFormats.map((format, index) =>
          <li key={index} className='text-sm'>
            {format}
          </li>
        )}
      </ul>
    </Card>
  )
}
