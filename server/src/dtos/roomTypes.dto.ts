import { IsNumber, IsString } from 'class-validator';

export class CreateRoomTypeDto {
  @IsString()
  public name: string;

  @IsNumber()
  public rent: number;

  @IsString()
  public shortCode: string;

  @IsNumber()
  public noOfRoom: number;

  @IsString()
  type: string;

  @IsString()
  status: 'Active' | 'Inactive';
}
