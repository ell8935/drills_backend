import { CreateClubProps } from '../types/club.types';
import { Club } from '../entitys/club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

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

  async getClubs(): Promise<Array<Club>> {
    return await this.clubRepository.find();
  }

  async getClubsBySport(sport: string): Promise<Club[]> {
    return this.clubRepository.find({ where: { sport } });
  }
  async findOne(options: FindOneOptions<Club> = {}) {
    return this.clubRepository.findOne(options);
  }

  async update(form: Club): Promise<Club> {
    const club = await this.clubRepository.preload({
      clubId: form.clubId,
      ...form,
    });
    if (!club) {
      throw new NotFoundException(`Club #${form.clubId} not found`);
    }
    return this.clubRepository.save(club);
  }
}
