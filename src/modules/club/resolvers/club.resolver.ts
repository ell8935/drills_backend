import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Club } from '../entitys/club.entity';
import { ClubService } from '../services/club.service';
import { CreateClubInput } from '../dtos/createClub.input';
import { UpdateClubInput } from '../dtos/updateClub.input';

@Resolver(() => Club)
export class ClubsResolver {
  constructor(private readonly clubService: ClubService) {}

  @Mutation(() => Club)
  createClub(@Args('createClubInput') createClubInput: CreateClubInput) {
    return this.clubService.createClub(createClubInput);
  }

  @Query(() => Club, { name: 'findOneById' })
  findOneById(@Args('clubId', { type: () => String }) clubId: string) {
    return this.clubService.findOne({ where: { clubId } });
  }

  @Mutation(() => Club)
  updateClub(@Args('updateClubInput') updateClubInput: UpdateClubInput) {
    return this.clubService.update(updateClubInput.clubId, updateClubInput);
  }
}
