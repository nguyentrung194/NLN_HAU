import { IsDate, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  public email: string;

  @IsString()
  public booking: string;

  @IsString()
  public package_p: string;

  @IsString()
  public roomType: string;

  @IsDate()
  public arrive: Date;

  @IsString()
  public payment: string;
}
