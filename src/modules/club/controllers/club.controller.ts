import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateClubProps, RequestToJoinClubProps } from '../types/club.types';
import { ClubService } from '../services/club.service';
import { Club } from '../entitys/club.entity';
import { UsersService } from 'src/modules/users/services/users.service';
import { RolesNames } from 'src/modules/users/types/userTypes';

@Controller('club')
export class ClubController {
  constructor(
    private clubService: ClubService,
    private readonly usersService: UsersService,
  ) {}

  @Post('update')
  updateClub(@Body() form: Club) {
    return this.clubService.update(form);
  }

  @Post('create')
  createClub(@Body() form: CreateClubProps) {
    return this.clubService.createClub(form);
  }

  @Post('requestToJoinClub')
  requestToJoinClub(@Body() form: RequestToJoinClubProps) {
    return this.clubService.requestToJoinClub(form);
  }

  @Get('clubs')
  clubs() {
    return this.clubService.getClubs();
  }

  @Get(':id')
  getClub(@Param('id') id: string): Promise<Club> {
    return this.clubService.findOneClub({ where: { clubId: id } });
  }

  @Post('removeUserClubRole')
  removeUserClubRole(@Body() body: { id: string }) {
    const { id } = body;
    return this.clubService.removeUserClubRole(id);
  }

  @Post('associate')
  associateUserWithClubAndRole(
    @Body() body: { userId: string; clubId: string; roleName: RolesNames },
  ) {
    const { userId, clubId, roleName } = body;

    return this.usersService.associateUserWithClubAndRole(
      userId,
      clubId,
      roleName,
    );
  }

  @Post('createPlaceholder')
  createPlaceholder(
    @Body()
    body: {
      userId: string;
      clubId: string;
      roleName: RolesNames;
      fullName: string;
    },
  ) {
    const { userId, clubId, roleName, fullName } = body;

    return this.usersService.createPlaceholder(
      userId,
      clubId,
      roleName,
      fullName,
    );
  }
}
