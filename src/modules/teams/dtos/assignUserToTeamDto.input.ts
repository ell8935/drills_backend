import { RolesNames } from 'src/modules/users/types/userTypes';
import { Entity, Column } from 'typeorm';

@Entity()
export class AssignUserToTeamDto {
  @Column()
  roleName: RolesNames;

  @Column()
  clubId: string;
}
