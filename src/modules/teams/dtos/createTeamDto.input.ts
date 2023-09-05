import { Entity, Column } from 'typeorm';

@Entity()
export class CreateTeamDto {
  @Column()
  teamName: string;

  @Column()
  clubId: string;
}
