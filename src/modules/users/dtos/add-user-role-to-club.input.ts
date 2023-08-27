import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddUserRoleToClubInput {
  @Field(() => String)
  userId: string;

  @Field(() => String)
  clubId: string;

  @Field(() => String)
  roleId: string;
}
