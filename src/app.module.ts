import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/entitys/user.entity';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './modules/email/email.module';
import { ClubModule } from './modules/club/club.module';
import { EmailService } from './modules/email/services/email.service';
import { Club } from './modules/club/entitys/club.entity';
import { UserClubRole } from './modules/club/entitys/UserClubRole.entity';
import { Team } from './modules/teams/entitys/team.entity';
import { TeamModule } from './modules/teams/teams.module';
import { ClubJoinRequest } from './modules/club/entitys/clubJoinRequest.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '89358935',
      database: 'drills',
      entities: [User, Club, UserClubRole, ClubJoinRequest, Team],
      synchronize: true, // Automatically sync database schema (dev environment only)
      autoLoadEntities: true,
    }),

    UsersModule,
    AuthModule,
    EmailModule,
    ClubModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
