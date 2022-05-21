import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  IsBoolean,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  public name: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  public email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(11)
  public phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(60)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  public password: string;

  @IsBoolean()
  @IsNotEmpty()
  public marketing: string;
}
