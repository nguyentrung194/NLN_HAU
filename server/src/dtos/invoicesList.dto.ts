import { Item } from '@/interfaces/interface';
import { IsArray, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateInvoicesDto {
  @IsDate()
  public date: Date;

  @IsNumber()
  public amount: number;

  @IsString()
  public status: 'Complete' | 'Pending';

  @IsArray()
  public items: Array<Item>;

  @IsNumber()
  public total: number;
}
