import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserClubRole } from 'src/modules/club/entitys/UserClubRole.entity';
import { Team } from 'src/modules/teams/entitys/team.entity';
import { ClubJoinRequest } from './clubJoinRequest.entity';

@Entity()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  clubId: string;

  @Column()
  clubName: string;

  @Column()
  sport: string;

  @Column()
  league: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  logo: string;

  @Column()
  description: string;

  @Column()
  foundedAt: string;

  @Column()
  website: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.club)
  userClubRoles: UserClubRole[];

  @OneToMany(() => ClubJoinRequest, (joinRequest) => joinRequest.club)
  joinRequests: ClubJoinRequest[];

  @OneToMany(() => Team, (team) => team.club)
  teams: Team[]; // Reference to teams within the club
}
