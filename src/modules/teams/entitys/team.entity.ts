import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserClubRole } from 'src/modules/users/entitys/UserClubRole.entity';
import { Club } from 'src/modules/club/entitys/club.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  teamId: string;

  @Column()
  teamName: string;

  @Column({ nullable: true })
  league: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 'active', nullable: true })
  status: 'active' | 'disabled';

  @Column({ default: 'male', nullable: true })
  gender: 'male' | 'female';

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Club, (club) => club.teams)
  @JoinColumn({ name: 'clubId' }) // Assuming clubId is the foreign key in Team referencing Club
  club: string;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.team)
  teamRoles: UserClubRole[];
}
