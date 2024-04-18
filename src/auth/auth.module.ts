// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User , UserSchema} from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { Model } from 'mongoose';


@Module({
  imports:[
    MongooseModule.forFeature([{name: User.name , schema: UserSchema}]),
    // UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
}) 
export class AuthModule {}
 