import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User,UserSchema } from './entities/user.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{name: User.name , schema: UserSchema}])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { User, UserSchema } from './entities/user.entity';
// import { UsersService } from './users.service';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
//   ],
//   providers: [UsersService],
//   exports: [UsersService], 
// })
// export class UsersModule {}
