import { AuthGuard } from '../guards/auth.guard'
import { applyDecorators, UseGuards } from '@nestjs/common'

export const Auth = () => applyDecorators(UseGuards(AuthGuard))
