import { IsString } from 'class-validator';

export class CreateRoomTypeDto {
  @IsString()
  public name: string;

  @IsString()
  public image: string;

  @IsString()
  public status: string;
}
