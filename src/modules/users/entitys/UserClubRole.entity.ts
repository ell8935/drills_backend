import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Club } from 'src/modules/club/entitys/club.entity';
import { RolesIds } from '../types/userTypes';

@Entity()
export class UserClubRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userClubRoles)
  user: User;

  @ManyToOne(() => Club, (club) => club.userClubRoles)
  club: Club;

  @Column({ type: 'integer' })
  roleId: RolesIds;

  @Column({ nullable: true })
  description: string;
}
