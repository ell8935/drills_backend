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
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the role' })
  roleId: string;
  @Column()
  @Field(() => String, { description: 'Role "Manager", "Trainer", "Player")' })
  rollName: string;
  @Column()
  @Field(() => String, { description: 'description' })
  description: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.role)
  userClubRoles: UserClubRole[];
}
