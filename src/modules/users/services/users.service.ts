import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserInput } from '../dtos/create-user.input';
import { UpdateUserInput } from '../dtos/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find();
  }

  async findOne(options: FindOneOptions<User> = {}) {
    return this.userRepository.findOne(options);
  }

  async update(
    userId: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    const user = await this.userRepository.preload({
      userId: userId,
      ...updateUserInput,
    });
    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return this.userRepository.save(user);
  }

  async remove(userId: string): Promise<User> {
    const user = await this.findOne({
      where: { userId },
    });
    await this.userRepository.remove(user);
    return {
      userId: userId,
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      password: '',
    };
  }
}
