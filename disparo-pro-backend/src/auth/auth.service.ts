import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AccountsService } from 'src/accounts/accounts.service';
import { Account } from 'src/accounts/entities/account.entity';
import { passwordAssistant } from 'src/bcrypt';
import UserToken from './interfaces/UserToken';
import UserPayload from './interfaces/UserPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountsService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: Account): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }

  async validateUser(user: string, password: string) {
    const account: Account = await this.accountService.findByEmailOrPhone(user);

    if (!user) {
      throw new Error('Email address or phone number provided is incorrect.');
    }

    const isPasswordValid = await passwordAssistant.compare(
      password,
      account.password,
    );

    if (isPasswordValid) {
      return {
        ...account,
        password: undefined,
      };
    }

    throw new Error('Password provided is incorrect.');
  }
}
