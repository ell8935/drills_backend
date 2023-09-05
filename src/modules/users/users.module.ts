import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { User } from './entitys/user.entity';
import { UsersController } from './controllers/users.controller';
import { UserClubRole } from './entitys/UserClubRole.entity';
import { Club } from '../club/entitys/club.entity';
import { Team } from '../teams/entitys/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserClubRole, Club, Team])],
  providers: [UsersService, UserClubRole, Team],
  exports: [UsersService, UserClubRole],
  controllers: [UsersController],
})
export class UsersModule {}
