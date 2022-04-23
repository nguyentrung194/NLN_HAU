import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateExpensDto {
  @IsString()
  public no: string;

  @IsString()
  public roomType: string;

  @IsString()
  AC: 'AC' | 'none';

  @IsArray()
  meal: Array<string>;

  @IsNumber()
  bedCapacity: number;

  @IsNumber()
  rent: number;

  @IsString()
  status: 'Booked' | 'Pending' | 'Open';
}
