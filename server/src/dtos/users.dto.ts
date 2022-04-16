import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  public phone: string;

  @IsString()
  public password: string;
}
