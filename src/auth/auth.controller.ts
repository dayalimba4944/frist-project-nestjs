import { Controller, Get, Post, Patch, Param, Delete, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterAuthDto from './dto/register-auth.dto';
import LoginAuthDto from './dto/login-auth.dto';
import UpdateProfileDto from './dto/update-profile-auth.dto';
import ChangePasswordDto from './dto/change-password-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body(new ValidationPipe()) registerAuthDto: RegisterAuthDto) {
    return await this.authService.register(registerAuthDto);
  }

  @Post('login')
  login(@Body(new ValidationPipe()) loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Get('logout/:id')
  logout(@Param('id') id: string) {
    return this.authService.logout(+id);
  }

  @Get('profile-details/:id')
  getProfileDetails(@Param('id') id: string) {
    return this.authService.getProfileDetails(id);
  }

  @Patch('update-profile/:id')
  updateProfile(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.authService.updateProfile(id, updateProfileDto);
  }

  @Patch('change-password/:id')
  changePassword(@Param('id') id: string, @Body() changePasswordDto: ChangePasswordDto) {
    return this.authService.changePassword(id, changePasswordDto);
  }

  @Delete(':id')
  accountDelete(@Param('id') id: string) {
    return this.authService.accountDelete(+id);
  }
}
