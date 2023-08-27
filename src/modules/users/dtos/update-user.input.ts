import { Entity, Column } from 'typeorm';
import { CreateUserInput } from './create-user.input';

@Entity()
export class UpdateUserInput extends CreateUserInput {
  @Column()
  id: string;
}
