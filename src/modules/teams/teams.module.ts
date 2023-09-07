import { Module } from '@nestjs/common';
import { TeamController } from './controllers/teams.controller';
import { TeamService } from './services/teams.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entitys/team.entity';
import { UserClubRole } from '../club/entitys/UserClubRole.entity';
import { User } from '../users/entitys/user.entity';
import { ClubService } from '../club/services/club.service';
import { Club } from '../club/entitys/club.entity';
import { ClubJoinRequest } from '../club/entitys/clubJoinRequest.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Team, UserClubRole, User, Club, ClubJoinRequest]),
  ],
  providers: [TeamService, ClubService],
  controllers: [TeamController],
})
export class TeamModule {}
