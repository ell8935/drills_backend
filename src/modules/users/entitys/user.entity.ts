import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserClubRole } from './UserClubRole.entity';
import { StatusOptions } from '../types/userTypes';
import { ClubJoinRequest } from 'src/modules/club/entitys/clubJoinRequest.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;
  @Column()
  fullName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  country: string;
  @Column({ nullable: true })
  city: string;
  @Column({ nullable: true })
  dateOfBirth: Date;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true })
  description: string;
  @Column({ nullable: true })
  status: StatusOptions;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.user)
  userClubRoles: UserClubRole[];

  @OneToMany(() => ClubJoinRequest, (joinRequest) => joinRequest.user)
  clubJoinRequests: ClubJoinRequest[];

  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
  }
}
