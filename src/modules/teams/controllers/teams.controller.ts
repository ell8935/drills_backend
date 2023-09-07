import { Controller, Post, Param, Body } from '@nestjs/common';
import { TeamService } from '../services/teams.service';
import { AssignUserToTeamDto } from '../dtos/AssignUserToTeamDto.input';
import { CreateTeamDto } from '../dtos/createTeamDto.input';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('create')
  async createTeam(@Body() createTeamDto: CreateTeamDto) {
    const { teamName, clubId } = createTeamDto;
    return this.teamService.createTeam(teamName, clubId);
  }

  @Post(':teamId/assign/:userId')
  async assignUserToTeam(
    @Param('teamId') teamId: string,
    @Param('userId') userId: string,
    @Body() assignUserDto: AssignUserToTeamDto,
  ) {
    const { roleName } = assignUserDto;
    return this.teamService.assignUserToTeam(userId, teamId, roleName);
  }

  // @Delete(':teamId/remove/:userId')
  // async removeUserFromTeam(
  //   @Param('teamId') teamId: string,
  //   @Param('userId') userId: string,
  // ) {
  //   return this.teamService.removeUserFromTeam(userId, teamId);
  // }
}
