import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Club } from '../entitys/club.entity';
import { ClubService } from '../services/club.service';
import { CreateClubInput } from '../dtos/createClub.input';

@Resolver(() => Club)
export class ClubsResolver {
  constructor(private readonly clubService: ClubService) {}

  @Mutation(() => Club)
  createClub(@Args('createClubInput') createClubInput: CreateClubInput) {
    return this.clubService.createClub(createClubInput);
  }
}
