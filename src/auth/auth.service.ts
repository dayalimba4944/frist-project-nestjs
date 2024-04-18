import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UpdateProfileDto } from './dto/update-profile-auth.dto';
import { Validate } from 'class-validator';
import { NotFoundException } from '@nestjs/common';
import ChangePasswordDto from './dto/change-password-auth.dto';


@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    // private jwtService: JwtService,
    // private usersService: UsersService
  ) {} 

   
  register(registerAuthDto: RegisterAuthDto) {
    const createdUser = new this.UserModel(registerAuthDto);
    return createdUser.save();
    return registerAuthDto;
    return 'User registered successfully';
  }

  
  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.UserModel.findOne({ email: loginAuthDto.email });
    if (!user || user.password !== loginAuthDto.password) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const { password, ...result } = user.toJSON();
    return result;
  }

  logout(id: number) {
    return `User with ID ${id} logged out successfully`;
  }

  async updateProfile(id: string, updateProfileDto: UpdateProfileDto) {
    const user = await this.UserModel.findByIdAndUpdate(id, updateProfileDto, { new: true }).exec();
    return user;
  }

  async getProfileDetails(id: string) {
    const user = await this.UserModel.findById( id );
    return user;
  }

  async changePassword(id: string, changePasswordDto: ChangePasswordDto) {
    const user = await this.UserModel.findById( id );
    if(changePasswordDto.password == changePasswordDto.confirm_password){
      if(changePasswordDto.old_password === user.password){
        const user = await this.UserModel.findByIdAndUpdate(id, changePasswordDto, { new: true }).exec();
        return 'password change successfully';
      }
      return 'old password does not match'
    }
    return 'password or confirm_password does not match'
  }

  accountDelete(id: number) {
    return `User account with ID ${id} deleted successfully`;
  }
}
