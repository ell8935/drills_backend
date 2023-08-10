import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOne(email);
    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.email, sub: user.password };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
