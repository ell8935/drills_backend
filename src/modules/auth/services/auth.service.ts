import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../types/auth.types';
import { EmailService } from 'src/modules/email/services/email.service';

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
    const payload = { username: user.email, sub: user.password };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp({ email, password, firstName, lastName }: User) {
    const isRegistered = await this.usersService.findOne({
      where: { email },
    });
    if (isRegistered) {
      throw new UnauthorizedException('Email is already registered');
    }

    const user = await this.usersService.create({
      email,
      password,
      firstName,
      lastName,
      role: 'admin',
    });
    await this.emailService.sendEmail('Welcome', {
      email,
      password: '',
      firstName,
      lastName,
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
