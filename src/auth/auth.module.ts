import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthModule } from '../user-auth/user-auth.module';

@Module({
  imports: [UserAuthModule],
  providers: [AuthService],
})
export class AuthModule {}
