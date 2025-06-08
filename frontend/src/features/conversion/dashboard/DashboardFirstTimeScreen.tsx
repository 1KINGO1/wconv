import { FileFormatCard } from '@/features/conversion/dashboard/FileFormatCard'
import { RedirectButton } from '@/shared/components/elements/RedirectButton'

export function DashboardFirstTimeScreen() {
  return (
    <div className='text-center'>
      <h1 className='text-3xl'>Convert Your Files Effortlessly</h1>
      <p className='text-xl font-light mt-4'>
        Choose from a wide range of file conversion categories to suit your
        needs.
      </p>
      <RedirectButton
        className='mt-9 text-lg font-normal px-8 py-5'
        url='/conversion/'
      >
        Get Started
      </RedirectButton>

      <div className='flex justify-between mt-12 gap-8 flex-col lg:flex-row'>
        <FileFormatCard
          imageUrl='/pdf.png'
          header='PDF Conversion'
          description='Convert documents to and from PDF format easily.'
        />
        <FileFormatCard
          imageUrl='/image.png'
          header='Image Conversion'
          description='Change image formats quickly and efficiently.'
        />
        <FileFormatCard
          imageUrl='/audio.png'
          header='Audio Conversion'
          description='Convert audio files to various formats effortlessly.'
        />
      </div>
    </div>
  )
}
