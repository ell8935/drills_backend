import { Entity, Column, ManyToOne } from 'typeorm';
import { ClubDto } from 'src/modules/club/dtos/clubDto';

@Entity()
export class UserDto {
  @Column()
  userId: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  description: string;

  @ManyToOne(() => ClubDto, { nullable: true })
  club?: ClubDto;
}
