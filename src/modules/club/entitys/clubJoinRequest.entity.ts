import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Club } from 'src/modules/club/entitys/club.entity';
import { User } from 'src/modules/users/entitys/user.entity';

@Entity()
export class ClubJoinRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.clubJoinRequests)
  user: User;

  @ManyToOne(() => Club, (club) => club.joinRequests)
  club: Club;

  @Column({ default: false })
  isApproved: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
