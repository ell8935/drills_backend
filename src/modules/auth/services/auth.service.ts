import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/modules/email/services/email.service';
import { CreateUserInput } from 'src/modules/users/dtos/create-user.input';
import { Omit } from 'src/globalTypes';
import { User } from 'src/modules/users/entitys/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOne({
      where: { email, password },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    const userWithoutPassword: Omit<User, 'password'> = { ...user };

    return {
      access_token: await this.jwtService.signAsync(userWithoutPassword),
    };
  }

  async signUp({ email, password, fullName }: CreateUserInput) {
    const isRegistered = await this.usersService.findOne({
      where: { email },
    });
    if (isRegistered) {
      throw new UnauthorizedException('Email is already registered');
    }

    const user = await this.usersService.create({
      email,
      password,
      fullName,
    });
    await this.emailService.sendEmail('Welcome', {
      email,
      password: '',
      fullName,
    });
    return { user, message: 'User created successfully!' };
  }

  async checkIfEmailInDB(email: string) {
    const user = await this.usersService.findOne({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException('Shalom');
    }
    console.log(user);

    return { message: 'Email is already registerd', statusCode: 409 };
  }
}
