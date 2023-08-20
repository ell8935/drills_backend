import { ObjectType, Field } from '@nestjs/graphql';
import { UserClubRole } from 'src/modules/users/entitys/UserClubRole.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  @Field(() => Date, { description: 'contactInformation' })
  foundedAt: Date;
  @Column()
  @Field(() => String, { description: 'description' })
  website: string;
  @Column()
  @Field(() => String, { description: 'email' })
  email: string;
  @Column()
  @Field(() => String, { description: 'phone Number' })
  phoneNumber: string;

  @OneToMany(() => UserClubRole, (userClubRole) => userClubRole.club)
  userClubRoles: UserClubRole[];
}
