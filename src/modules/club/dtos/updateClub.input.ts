import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateClubInput } from './createClub.input';

@InputType()
export class UpdateClubInput extends PartialType(CreateClubInput) {
  @Field(() => String)
  clubId: string;
}
