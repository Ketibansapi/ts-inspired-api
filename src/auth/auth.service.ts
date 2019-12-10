
import { Injectable } from '@nestjs/common';
import { UserAuthService } from '../user-auth/user-auth.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserAuthService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}