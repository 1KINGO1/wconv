import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { SupportedConversion } from '../constants/supported-conversions'

interface ConversionSelectorProps {
  availableConversions: SupportedConversion[]
  selectedConversion: SupportedConversion | null
  onConversionSelect: (value: string) => void
}

export function ConversionSelector(props: ConversionSelectorProps) {
  return props.availableConversions.length === 0 ? null : (
    <Select onValueChange={props.onConversionSelect} value={props.selectedConversion?.fileToMimetype?.[0] ?? undefined}>
      <SelectTrigger className='w-[240px]'>
        <SelectValue placeholder='Select a format to convert' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Formats</SelectLabel>
          {props.availableConversions.map(c => (
            <SelectItem value={c.fileToMimetype?.[0]} key={c.fileToMimetype?.[0]}>
              {c.fileToType}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}