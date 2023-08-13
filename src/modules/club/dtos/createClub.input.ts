import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClubInput {
  @Field(() => String, { description: 'id of the club' })
  clubId: string;
  @Field(() => String, { description: 'name of the club' })
  clubName: string;
  @Field(() => String, { description: 'sport type' })
  sport: string;
  @Field(() => String, { description: 'who is the club manager' })
  clubManager: string;
  @Field(() => String, { description: 'who is the club admin' })
  clubAdmin: string;
  @Field(() => Number, { description: 'number of teams' })
  teamsCount: number;
  @Field(() => Number, { description: 'number of players' })
  playersCount: number;
  @Field(() => String, { description: 'league type' })
  league: string;
  @Field(() => String, { description: 'city' })
  city: string;
  @Field(() => String, { description: 'country' })
  country: string;
  @Field(() => String, { description: 'logo' })
  logo: string;
  @Field(() => String, { description: 'description' })
  description: string;
  @Field(() => String, { description: 'contactInformation' })
  contactInformation: string;
}
