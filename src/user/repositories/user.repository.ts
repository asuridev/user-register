import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserRepository{

  constructor(
    @InjectRepository(UserEntity)
    private readonly repository:Repository<UserEntity>
  ){}

  async create(createUserDto:CreateUserDto):Promise<UserEntity>{
    try {
      const user = this.repository.create(createUserDto);
      await this.repository.save(user);
      return user;
    } catch (error) {
      throw new BadRequestException("fail insert DB")
    }
  }

  
}