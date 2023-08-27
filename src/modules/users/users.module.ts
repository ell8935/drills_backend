import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { UsersResolver } from './resolvers/users.resolver';
import { User } from './entitys/user.entity';
import { UsersController } from './controllers/users.controller';
import { UserRole } from './entitys/userRole.entity';
import { UserClubRole } from './entitys/UserClubRole.entity';
import { Club } from '../club/entitys/club.entity';
import { UserRoleClubResolver } from './resolvers/user-role-club/user-role-club.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRole, UserClubRole, Club])],
  providers: [UsersService, UsersResolver, UserClubRole, UserRoleClubResolver],
  exports: [UsersService, UserClubRole, UserRoleClubResolver],
  controllers: [UsersController],
})
export class UsersModule {}
