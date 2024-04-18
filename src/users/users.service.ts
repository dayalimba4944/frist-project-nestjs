import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { mongo } from 'mongoose';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private UserModel: any) {
    
  }
  // constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(CreateUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(CreateUserDto);
    return createdUser.save();
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.UserModel.findOne({ email }).exec();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findOne(id: string): Promise<User[]> {
    return this.UserModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.UserModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  async remove(id: string): Promise<User | null> {
    return this.UserModel.findByIdAndDelete(id).exec();
  } 
  

}




