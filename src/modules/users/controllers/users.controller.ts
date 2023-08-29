import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service'; // Make sure this import is correct
import { RolesIds } from '../types/userTypes';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }
  @Get('findAll')
  findAllUserClubRole() {
    return this.usersService.findAllUserClubRole();
  }

  @Post('associate')
  associateUserWithClubAndRole(
    @Body() body: { userId: string; clubId: string; roleId: RolesIds },
  ) {
    const { userId, clubId, roleId } = body;

    return this.usersService.associateUserWithClubAndRole(
      userId,
      clubId,
      roleId,
    );
  }
}
