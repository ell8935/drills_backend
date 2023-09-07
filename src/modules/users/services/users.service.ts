import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from '../entitys/user.entity';
import { CreateUserInput } from '../dtos/create-user.input';
import { UpdateUserInput } from '../dtos/update-user.input';
import { UserClubRole } from '../../club/entitys/UserClubRole.entity';
import { Club } from 'src/modules/club/entitys/club.entity';
import { RolesNames } from '../types/userTypes';
import { Team } from 'src/modules/teams/entitys/team.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserClubRole) // Inject the repository for the junction table
    private readonly userClubRoleRepository: Repository<UserClubRole>,
    @InjectRepository(Club) // Inject the repository for the junction table
    private readonly clubRepository: Repository<Club>,
    @InjectRepository(Team) // Inject the repository for the junction table
    private readonly teamRepository: Repository<Team>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find();
  }
  async findAllUserClubRole(): Promise<Array<UserClubRole>> {
    const data = await this.userClubRoleRepository.find({
      relations: ['user', 'club', 'team'], // Specify the relations you want to load
    });

    return data;
  }

  async findOne(options: FindOneOptions<User> = {}) {
    return this.userRepository.findOne(options);
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userRepository.preload({
      id: id,
      ...updateUserInput,
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return this.userRepository.save(user);
  }

  async remove(userId: string): Promise<User> {
    const user = await this.findOne({
      where: { userId },
    });
    await this.userRepository.remove(user);
    return user;
  }

  async associateUserWithClubAndRole(
    userId: string,
    clubId: string,
    roleName: RolesNames,
  ): Promise<UserClubRole> {
    const userClubRole = new UserClubRole();
    userClubRole.user = await this.userRepository.findOne({
      where: { userId },
    });
    userClubRole.club = await this.clubRepository.findOne({
      where: { clubId },
    });

    userClubRole.roleName = roleName;

    return this.userClubRoleRepository.save(userClubRole);
  }
  async createPlaceholder(
    userId: string,
    clubId: string,
    roleName: RolesNames,
    fullName: string,
  ): Promise<UserClubRole> {
    const userClubRole = new UserClubRole();

    //need to make email and password more secure
    const partialPlaceholderUser = new User({
      fullName,
      email: 'placeholder@haha.com',
      password: 'password',
    });
    const placeholderUser = await this.create(partialPlaceholderUser);

    userClubRole.user = placeholderUser;
    userClubRole.club = await this.clubRepository.findOne({
      where: { clubId },
    });

    userClubRole.roleName = roleName;

    return this.userClubRoleRepository.save(userClubRole);
  }
}
