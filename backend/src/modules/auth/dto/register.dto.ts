import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { MatchPasswordConstraint } from '../../../shared/decorators/password-match.constraint';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(14)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Validate(MatchPasswordConstraint)
  passwordMatch: string;
}
