import { Controller, Post, Body } from '@nestjs/common';
import { CreateClubProps } from '../types/club.types';
import { ClubService } from '../services/club.service';
import { Public } from 'src/modules/auth/decorators/public.decorator';

@Controller('club')
export class ClubController {
  constructor(private clubService: ClubService) {}

  @Public()
  @Post('create')
  getProfile(@Body() form: CreateClubProps) {
    return this.clubService.createClub(form);
  }
}
