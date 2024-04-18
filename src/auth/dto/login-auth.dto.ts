// import { PartialType } from '@nestjs/mapped-types';
// import  CreateAuthDto  from './register-auth.dto';

import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginAuthDto {

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export default LoginAuthDto;
