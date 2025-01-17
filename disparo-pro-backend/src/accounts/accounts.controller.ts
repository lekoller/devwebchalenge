import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
// import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @IsPublic()
  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  // @Get()
  // findAll() {
  //   return this.accountsService.findAll();
  // }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.accountsService.findOne(+id);
  }

  @Get('user/:user')
  async findUser(@Param('user') user: string) {
    const account: Account = await this.accountsService.findByEmailOrPhone(
      user,
    );

    return {
      ...account,
      password: undefined,
    };
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
  //   return this.accountsService.update(+id, updateAccountDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }
}
