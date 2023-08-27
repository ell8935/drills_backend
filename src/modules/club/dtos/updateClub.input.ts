import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Club } from '../entitys/club.entity';

@Entity()
export class UpdateClub extends Club {
  @PrimaryGeneratedColumn('uuid')
  clubId: string;
}
