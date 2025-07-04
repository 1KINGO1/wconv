'use client'

import {
  ChangeEvent,
  Dispatch,
  DragEvent,
  SetStateAction,
  useState,
} from 'react'

import { convertBytesToMb } from '@/shared/utils/convert-bytes-to-mb'
import { cn } from '@/shared/utils/utils'

interface FileInputProps {
  allowedMIMEType?: string | string[]
  invalidMimeTypeMessage?: string
  invalidSizeMessage?: string
  file: File | null
  setFile: Dispatch<SetStateAction<null | File>>
  error: string | null
  setError: Dispatch<SetStateAction<null | string>>
}

export function FileInput({
                            file,
                            setFile,
                            error,
                            setError,
                            ...props
                          }: FileInputProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const validateFileMIMEType = (file: File) => {
    if (
      props.allowedMIMEType !== undefined &&
      (
        Array.isArray(props.allowedMIMEType) ?
          !props.allowedMIMEType.includes(file.type) :
          props.allowedMIMEType !== file.type
      )
    ) {
      setError(props.invalidMimeTypeMessage ?? null)
    }
  }

  const handleDrop = (e: DragEvent) => {
    setError(null)

    e.preventDefault()
    e.stopPropagation()
    if (!e.dataTransfer || !e.dataTransfer.files.length) {
      return
    }
    const [droppedFile] = Array.from(e.dataTransfer.files)
    validateFileMIMEType(droppedFile)
    setFile(droppedFile)
    setImagePreview(null)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setFile(null)
    setImagePreview(null)

    const [selectedFile] = e.target.files ? Array.from(e.target.files) : []
    validateFileMIMEType(selectedFile)

    if (selectedFile.type.startsWith('image/')) {
      showImagePreview(selectedFile)
    }

    setFile(selectedFile)
  }

  const showImagePreview = (file: File) => {
    const reader = new FileReader()
    reader.onload = function(e) {
      setImagePreview((e?.target?.result as string) ?? null)
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e: DragEvent) => {
    setError(null)
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      className={cn(
        'flex flex-col justify-center items-center border-2 border-dashed border-gray-400 rounded-lg p-2 lg:p-6 text-center cursor-pointer hover:bg-gray-100 w-full max-w-lg lg:min-w-md min-h-60',
        {
          'border-red-500': error !== null,
          'border-green-700': file !== null && error === null,
        },
      )}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {error !== null && <p className="text-red-400">{error}</p>}
      <p className="text-gray-600">
        Drag & drop files here, or click to select
      </p>
      <input
        type="file"
        id="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file"
        className="block mt-2 text-blue-500 underline cursor-pointer"
      >
        Browse files
      </label>
      {
        imagePreview !== null &&
        (
          <div className="w-[80%] mt-5 bg-background shadow-md">
            <img className="w-full" src={imagePreview} alt="ImagePreview" />
          </div>
        )
      }

      {file !== null && (
        <div className="mt-2">
          <p>{file!.name}</p>
          <p>{convertBytesToMb(file!.size)}Mb</p>
        </div>
      )}
    </div>
  )
}
