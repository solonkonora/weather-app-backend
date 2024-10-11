// auth/dto/update-password.dto.ts
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  readonly oldPassword: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  readonly newPassword: string;
}
