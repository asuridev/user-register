import { IsEmail, IsNumber, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {

  @MinLength(1)
  @MaxLength(16)
  @IsString()
  name:string;

  @MinLength(1)
  @MaxLength(16)
  @IsString()
  lastname:string;

  @IsString()
  @IsEmail()
  email:string;

  @IsPhoneNumber('CO')
  phone:string;
  
}
