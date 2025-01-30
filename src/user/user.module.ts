import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([ UserEntity ])
  ],
  controllers: [UserController],
  providers: [UserRepository, UserService],
})
export class UserModule {}
