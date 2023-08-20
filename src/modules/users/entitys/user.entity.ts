import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserClubRole } from './UserClubRole.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the user' })
  userId: string;
  @Column()
  @Field(() => String, { description: 'full name of the user' })
  fullName: string;
  @Column()
  @Field(() => String, { description: 'email of the user' })
  email: string;
  @Column()
  @Field(() => String, { description: 'password of the user' })
  password: string;
  @Column()
  @Field(() => String, { description: 'country of the user' })
  country: string;
  @Column()
  @Field(() => String, { description: 'city of the user' })
  city: string;
  @Column()
  @Field(() => Date, { description: 'date of birth of the user' })
  dateOfBirth: Date;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column()
  @Field(() => String, { description: 'description' })
  description: string;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.user)
  userClubRoles: UserClubRole[];
}
