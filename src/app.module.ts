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
import { UserClubRole } from './modules/users/entitys/UserClubRole.entity';

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
      entities: [User, Club, UserClubRole],
      synchronize: true, // Automatically sync database schema (dev environment only)
      autoLoadEntities: true,
    }),

    UsersModule,
    AuthModule,
    EmailModule,
    ClubModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
