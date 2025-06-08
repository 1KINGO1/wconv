import { SupportedConversion } from '@/features/conversion/constants/supported-conversions'

interface ConversionFormProps {
  file: File | null,
  selectedConversion: SupportedConversion | null,
}

export function ConversionForm(props: ConversionFormProps){
  return (props.selectedConversion === null || props.file === null) ? null : (
    <props.selectedConversion.Form
      file={props.file}
      requestSendUrl={props.selectedConversion.url}
    />
  )
}