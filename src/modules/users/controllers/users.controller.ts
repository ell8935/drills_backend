import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service'; // Make sure this import is correct

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/find')
  findOne(@Body('email') email: string) {
    return this.usersService.findOne(email);
  }
}
