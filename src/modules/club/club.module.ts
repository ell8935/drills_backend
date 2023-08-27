import { Module } from '@nestjs/common';
import { ClubController } from './controllers/club.controller';
import { ClubService } from './services/club.service';
import { Club } from './entitys/club.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClubRole } from '../users/entitys/UserClubRole.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Club, UserClubRole])],
  controllers: [ClubController],
  providers: [ClubService],
})
export class ClubModule {}
