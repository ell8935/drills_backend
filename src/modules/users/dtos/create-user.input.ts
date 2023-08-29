import { Entity, Column } from 'typeorm';

@Entity()
export class CreateUserInput {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullName: string;
}
