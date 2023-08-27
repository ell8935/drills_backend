import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserClubRole } from '../../entitys/UserClubRole.entity';
import { UsersService } from '../../services/users.service';

@Resolver(() => UserClubRole)
export class UserRoleClubResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserClubRole)
  associateUserWithClubAndRole(
    @Args('userId', { type: () => String }) userId: string,
    @Args('clubId', { type: () => String }) clubId: string,
    @Args('roleId', { type: () => String }) roleId: string,
  ) {
    return this.usersService.associateUserWithClubAndRole1(
      userId,
      clubId,
      roleId,
    );
  }
}
