import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserClubRole } from 'src/modules/users/entitys/UserClubRole.entity';
import { Club } from 'src/modules/club/entitys/club.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  teamId: string;

  @Column()
  teamName: string;

  @Column()
  league: string;

  @Column()
  logo: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @Column()
  gender: 'male' | 'female';

  @ManyToOne(() => Club, (club) => club.teams)
  club: Club;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.team)
  teamRoles: UserClubRole[];
}
