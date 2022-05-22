import { IsString } from 'class-validator';
import { IsEmailOrPhoneNumber } from '../decorators/is-email-or-phone-number.decorator';

export class LoginRequestBody {
  @IsString()
  @IsEmailOrPhoneNumber('user')
  user: string;

  @IsString()
  password: string;
}
