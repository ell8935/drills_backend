import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the club' })
  clubId: string;
  @Column()
  @Field(() => String, { description: 'name of the club' })
  clubName: string;
  @Column()
  @Field(() => String, { description: 'sport type' })
  sport: string;
  @Column()
  @Field(() => String, { description: 'who is the club manager' })
  clubManager: string;
  @Column()
  @Field(() => String, { description: 'who is the club admin' })
  clubAdmin: string;
  @Column()
  @Field(() => Number, { description: 'number of teams' })
  teamsCount: number;
  @Column()
  @Field(() => Number, { description: 'number of players' })
  playersCount: number;
  @Column()
  @Field(() => String, { description: 'league type' })
  league: string;
  @Column()
  @Field(() => String, { description: 'city' })
  city: string;
  @Column()
  @Field(() => String, { description: 'country' })
  country: string;
  @Column()
  @Field(() => String, { description: 'logo' })
  logo: string;
  @Column()
  @Field(() => String, { description: 'description' })
  description: string;
  @Column()
  @Field(() => String, { description: 'contactInformation' })
  contactInformation: string;
}
