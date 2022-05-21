import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { TypeOrmConfigService } from './database/typeorm.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AccountsModule,
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}