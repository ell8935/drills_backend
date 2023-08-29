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

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.user)
  userClubRoles: UserClubRole[];
}
