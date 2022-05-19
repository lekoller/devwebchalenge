import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  @InjectRepository(Account)
  private readonly repository: Repository<Account>;

  create(body: CreateAccountDto) {
    const user: Account = new Account();

    user.name = body.name;
    user.email = body.email;
    user.phone = body.phone;
    user.password = body.password;
    user.marketing = body.marketing;

    return this.repository.save(user);
  }

  async findAll() {
    const accounts = await this.repository.find();
    return { accounts };
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
