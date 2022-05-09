import { Client, Item } from '@/interfaces/interface';
import { IsObject, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsObject()
  public user: Client;

  @IsObject()
  public room: Item;

  @IsString()
  public note: string;

  @IsString()
  public status: string;
}
