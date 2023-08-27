import { Entity, Column } from 'typeorm';

@Entity()
export class AddUserRoleToClubInput {
  @Column()
  userId: string;

  @Column()
  clubId: string;

  @Column()
  roleId: string;
}
