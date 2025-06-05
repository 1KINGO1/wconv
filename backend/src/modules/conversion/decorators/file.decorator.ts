import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
} from '@nestjs/common'

const MB_SIZE = 1000000

export const File = (maxSizeMd: number, fileType: RegExp) =>
  UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: maxSizeMd * MB_SIZE }),
        new FileTypeValidator({ fileType: fileType }),
      ],
    }),
  )
