// src/users/dto/user.dto.ts

import { ObjectType, Field } from '@nestjs/graphql';
import { ClubDto } from 'src/modules/club/dtos/clubDto';

@ObjectType()
export class UserDto {
  @Field(() => String, { description: 'id of the user' })
  userId: string;

  @Field(() => String, { description: 'full name of the user' })
  fullName: string;

  @Field(() => String, { description: 'email of the user' })
  email: string;

  @Field(() => String, { description: 'password of the user' })
  password: string;

  @Field(() => String, { description: 'country of the user' })
  country: string;

  @Field(() => String, { description: 'city of the user' })
  city: string;

  @Field(() => Date, { description: 'date of birth of the user' })
  dateOfBirth: Date;

  @Field(() => String, { description: 'description' })
  description: string;

  @Field(() => ClubDto, {
    nullable: true,
    description: 'Club to which the user belongs',
  })
  club?: ClubDto;
}
