import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";


@Entity("user")
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id:string

  @Column('text')
  name:string;
  
  @Column('text')
  lastname:string;

  @Column('text',{unique:true})
  email:string;
  
  @Column('text')
  phone:string;


}
