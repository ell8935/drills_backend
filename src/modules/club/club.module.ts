import { Module } from '@nestjs/common';
import { ClubController } from './controllers/club.controller';
import { ClubService } from './services/club.service';
import { Club } from './entitys/club.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClubRole } from '../users/entitys/UserClubRole.entity';
import { UsersService } from '../users/services/users.service';
import { User } from '../users/entitys/user.entity';
import { ClubJoinRequest } from './entitys/clubJoinRequest';

@Module({
  imports: [
    TypeOrmModule.forFeature([Club, UserClubRole, User, ClubJoinRequest]),
  ],
  controllers: [ClubController],
  providers: [ClubService, UsersService, ClubJoinRequest],
  exports: [ClubJoinRequest],
})
export class ClubModule {}
