import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersService } from './users/users.service';
// import { UsersController } from './users/users.controller';
// import { User } from './entities/user.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { User } from './modules/users/user.entity';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Change this to your PostgreSQL server host
      port: 5432, // Change this to your PostgreSQL server port
      username: 'postgres',
      password: '89358935',
      database: 'drills',
      entities: [User],
      synchronize: true, // Automatically sync database schema (dev environment only)
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
