import { UseInterceptors } from '@nestjs/common'
import { FileInterceptor as CommonFileInterceptor } from '@nestjs/platform-express'

export const FileInterceptor = () => UseInterceptors(CommonFileInterceptor('file'))
