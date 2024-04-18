import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

}

export default UpdateProfileDto;
