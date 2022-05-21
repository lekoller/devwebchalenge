import { Request } from 'express';
import { Account } from 'src/accounts/entities/account.entity';

interface AuthRequest extends Request {
  user: Account;
}

export default AuthRequest;
