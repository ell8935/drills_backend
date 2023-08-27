import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Club } from 'src/modules/club/entitys/club.entity';
import { UserRole } from './userRole.entity';

@Entity()
export class UserClubRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userClubRoles)
  user: User;

  @ManyToOne(() => Club, (club) => club.userClubRoles)
  club: Club;

  @ManyToOne(() => UserRole, (role) => role.userClubRoles)
  role: UserRole;
}
