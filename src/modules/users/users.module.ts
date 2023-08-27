import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { User } from './entitys/user.entity';
import { UsersController } from './controllers/users.controller';
import { UserRole } from './entitys/userRole.entity';
import { UserClubRole } from './entitys/UserClubRole.entity';
import { Club } from '../club/entitys/club.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRole, UserClubRole, Club])],
  providers: [UsersService, UserClubRole],
  exports: [UsersService, UserClubRole],
  controllers: [UsersController],
})
export class UsersModule {}
