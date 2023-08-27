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
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;
  @Column()
  fullName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  country: string;
  @Column()
  city: string;
  @Column()
  dateOfBirth: Date;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column()
  description: string;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.user)
  userClubRoles: UserClubRole[];
}
