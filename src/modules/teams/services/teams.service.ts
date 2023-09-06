import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from '../entitys/team.entity';
import { UserClubRole } from 'src/modules/users/entitys/UserClubRole.entity';
import { Repository } from 'typeorm';
import { RolesNames } from 'src/modules/users/types/userTypes';
import { User } from 'src/modules/users/entitys/user.entity';
import { ClubService } from 'src/modules/club/services/club.service';
import { Club } from 'src/modules/club/entitys/club.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
    @InjectRepository(UserClubRole)
    private readonly userClubRoleRepository: Repository<UserClubRole>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
    private readonly clubService: ClubService, // Inject the ClubService
  ) {}

  async createTeam(teamName: string, clubId: string): Promise<Team> {
    const club = await this.clubService.findOneClub({ where: { clubId } });

    if (!club) {
      throw new Error(`Club with ID ${clubId} not found.`);
    }

    const newTeam = new Team();
    newTeam.club = club.clubId;
    newTeam.teamName = teamName;
    newTeam.status = 'active';
    const team = this.teamRepository.create(newTeam);

    return await this.teamRepository.save(team);
  }

  async assignUserToTeam(
    userId: string,
    teamId: string,
    roleName: RolesNames,
  ): Promise<UserClubRole> {
    const userClubRole = new UserClubRole();
    userClubRole.user = await this.userRepository.findOne({
      where: { userId },
    });
    userClubRole.team = await this.teamRepository.findOne({
      where: { teamId },
    });
    userClubRole.roleName = roleName;

    return await this.userClubRoleRepository.save(userClubRole);
  }

  //   async removeUserFromTeam(userId: string, teamId: string): Promise<void> {
  //     // Find and delete the user's role in the team
  //     await this.userClubRoleRepository.delete({ userId, team: { teamId } });
  //   }
}
