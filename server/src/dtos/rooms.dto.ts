import { Review } from '@/interfaces/interface';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  public room_no: string;

  @IsString()
  public room_type: string;

  @IsString()
  public description: string;

  @IsNumber()
  public rent: number;

  @IsArray()
  public images: Array<string>;

  @IsString()
  public reviews: Array<Review>;

  @IsString()
  public status: string;
}
