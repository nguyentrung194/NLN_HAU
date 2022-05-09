import { IsNumber, IsString } from 'class-validator';

export class CreateRoomTypeDto {
  @IsString()
  public name: string;

  @IsNumber()
  public rent: number;

  @IsString()
  public short_code: string;

  @IsNumber()
  public no_of_room: number;

  @IsNumber()
  public type_star: number;

  @IsString()
  public status: string;
}
