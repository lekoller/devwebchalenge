import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  IsBoolean,
} from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  public phone: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsBoolean()
  @IsNotEmpty()
  public marketing: string;
}
