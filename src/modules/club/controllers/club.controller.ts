import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateClubProps } from '../types/club.types';
import { ClubService } from '../services/club.service';
import { Club } from '../entitys/club.entity';

@Controller('club')
export class ClubController {
  constructor(private clubService: ClubService) {}

  @Post('create')
  createClub(@Body() form: CreateClubProps) {
    return this.clubService.createClub(form);
  }

  @Get('clubs')
  clubs() {
    return this.clubService.getClubs();
  }

  @Get(':sport')
  getClubsBySport(@Param('sport') sport: any): Promise<Club[]> {
    return this.clubService.getClubsBySport(sport);
  }
}
