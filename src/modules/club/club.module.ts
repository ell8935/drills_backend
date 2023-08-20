import { Module } from '@nestjs/common';
import { ClubController } from './controllers/club.controller';
import { ClubService } from './services/club.service';
import { ClubsResolver } from './resolvers/club.resolver';
import { Club } from './entitys/club.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClubRole } from '../users/entitys/UserClubRole.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Club, UserClubRole])],
  controllers: [ClubController],
  providers: [ClubService, ClubsResolver],
})
export class ClubModule {}
