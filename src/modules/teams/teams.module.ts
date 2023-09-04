import { Module } from '@nestjs/common';
import { TeamsController } from './controllers/teams.controller';
import { TeamsService } from './services/teams.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entitys/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamsService],
  controllers: [TeamsController],
})
export class TeamsModule {}
