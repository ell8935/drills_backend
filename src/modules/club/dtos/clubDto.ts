import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ClubDto {
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

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
