import { Controller } from '@nestjs/common';
import { UsersService } from '../services/users.service'; // Make sure this import is correct

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
