import { Injectable } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { Account } from 'src/accounts/entities/account.entity';
import { passwordAssistant } from 'src/bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly accountService: AccountsService) {}

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
