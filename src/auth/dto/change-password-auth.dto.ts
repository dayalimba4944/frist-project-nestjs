import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class ChangePasswordDto {

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  old_password: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  confirm_password: string;

}

export default ChangePasswordDto;
