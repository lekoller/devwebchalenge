import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { passwordAssistant } from './bcrypt';

@Injectable()
export class AccountsService {
  @InjectRepository(Account)
  private readonly repository: Repository<Account>;

  async create(body: CreateAccountDto) {
    const user: Account = new Account();

    user.name = body.name;
    user.email = body.email;
    user.phone = body.phone;
    user.marketing = body.marketing;
    user.password = await passwordAssistant.hash(body.password);

    const created: Account = await this.repository.save(user);
    return { ...created, password: undefined };
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
