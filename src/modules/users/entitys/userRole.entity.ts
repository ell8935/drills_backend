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
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  roleId: string;
  @Column()
  roleName: string;
  @Column()
  description: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.role)
  userClubRoles: UserClubRole[];
}
