import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { CreateUserInput } from '../dtos/create-user.input';
import { User } from '../entitys/user.entity';
import { UpdateUserInput } from '../dtos/update-user.input';
import { UserRole } from '../entitys/userRole.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOneByEmail(@Args('email', { type: () => String }) email: string) {
    return this.usersService.findOne({ where: { email } }); // Use email directly as the parameter
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('userId', { type: () => String }) userId: string) {
    return this.usersService.remove(userId);
  }

  // @Mutation(() => UserClubRole)
  // associateUserWithClubAndRole(
  //   @Args('userId', { type: () => String }) userId: string,
  //   @Args('clubId', { type: () => String }) clubId: string,
  //   @Args('roleId', { type: () => String }) roleId: string,
  // ) {
  //   return this.usersService.associateUserWithClubAndRole(
  //     userId,
  //     clubId,
  //     roleId,
  //   );
  // }

  @Query(() => [UserRole], { name: 'userRolesInClub' })
  getUserRolesInClub(
    @Args('userId', { type: () => String }) userId: string,
    @Args('clubId', { type: () => String }) clubId: string,
  ) {
    return this.usersService.getUserRolesInClub(userId, clubId);
  }
}
