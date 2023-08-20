// src/clubs/dto/club.dto.ts

import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ClubDto {
  @Field(() => String, { description: 'id of the club' })
  clubId: string;

  @Field(() => String, { description: 'name of the club' })
  clubName: string;

  @Field(() => String, { description: 'sport type' })
  sport: string;

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

  @Field(() => Date, { description: 'contactInformation' })
  foundedAt: Date;

  @Field(() => String, { description: 'description' })
  website: string;

  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => String, { description: 'phone Number' })
  phoneNumber: string;

  // @OneToMany(() => User, (user) => user.club)
  // members: User[];
}
