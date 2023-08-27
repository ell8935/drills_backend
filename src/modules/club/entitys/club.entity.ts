import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserClubRole } from 'src/modules/users/entitys/UserClubRole.entity';

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

  @Column({ type: 'timestamp' })
  foundedAt: Date;

  @Column()
  website: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.club)
  userClubRoles: UserClubRole[];
}
