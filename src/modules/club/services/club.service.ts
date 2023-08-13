import { Injectable } from '@nestjs/common';
import { CreateClubProps } from '../types/club.types';
import { Club } from '../entitys/club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
  ) {}
  async createClub(form: CreateClubProps) {
    const club = this.clubRepository.create(form);
    return await this.clubRepository.save(club);
  }
}
