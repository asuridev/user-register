import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repositories/user.repository';


@Injectable()
export class UserService {

  constructor(
    private readonly userRepository: UserRepository
  ){}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

}
