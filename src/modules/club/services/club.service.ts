import { CreateClubProps, RequestToJoinClubProps } from '../types/club.types';
import { Club } from '../entitys/club.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/modules/users/entitys/user.entity';
import { UserClubRole } from 'src/modules/users/entitys/UserClubRole.entity';
import { ClubJoinRequest } from '../entitys/clubJoinRequest.entity';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
    @InjectRepository(ClubJoinRequest)
    private readonly clubJoinRequestRepository: Repository<ClubJoinRequest>,
    @InjectRepository(UserClubRole)
    private readonly userClubRoleRepository: Repository<UserClubRole>,
  ) {}

  async createClub(form: CreateClubProps) {
    const club = this.clubRepository.create(form);
    return await this.clubRepository.save(club);
  }

  async requestToJoinClub(form: RequestToJoinClubProps) {
    const { userId, clubId } = form;
    const user = await this.userRepository.findOne({ where: { userId } });
    const club = await this.clubRepository.findOne({ where: { clubId } });

    if (!user || !club) {
      throw new NotFoundException('User or club not found');
    }
    const joinRequest = new ClubJoinRequest();
    joinRequest.user = user;
    joinRequest.club = club;

    return await this.clubJoinRequestRepository.save(joinRequest);
  }

  async findOneClub(options: FindOneOptions<Club> = {}) {
    options.relations = ['teams'];

    return await this.clubRepository.findOne(options);
  }

  async findOneUserClubRole(options: FindOneOptions<UserClubRole> = {}) {
    return this.userClubRoleRepository.findOne(options);
  }

  async getClubs(): Promise<Array<Club>> {
    return await this.clubRepository.find();
  }

  async getClubsBySport(sport: string): Promise<Club[]> {
    return this.clubRepository.find({ where: { sport } });
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

  async removeUserClubRole(id: string) {
    const user = await this.findOneUserClubRole({
      where: { id },
    });
    await this.userClubRoleRepository.remove(user);

    return user;
  }
}
