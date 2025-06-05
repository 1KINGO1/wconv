import { Type } from 'class-transformer'
import { IsInt, IsOptional, Max, Min } from 'class-validator'

export class BaseImageConversionDto {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(100)
  quality: number

  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(9)
  compressionLevel: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(10000)
  resizeWidth?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(10000)
  resizeHeight?: number
}
