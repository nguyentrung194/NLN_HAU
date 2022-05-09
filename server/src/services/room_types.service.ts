import { CreateRoomTypeDto } from '@/dtos/room_types.dto';
import { HttpException } from '@exceptions/HttpException';
import { RoomType } from '@/interfaces/interface';
import { room_typeModel } from '@/models/model';
import { isEmpty } from '@utils/util';
import { v4 } from 'uuid';

class RoomTypeService {
  public room_types = room_typeModel;

  public async findAllRoomType(): Promise<RoomType[]> {
    const room_types: RoomType[] = await this.room_types.find();
    return room_types;
  }

  public async findRoomTypeById(room_typeId: string): Promise<RoomType> {
    if (isEmpty(room_typeId)) throw new HttpException(400, "You're not room_typeId");

    const findRoomType: RoomType = await this.room_types.findOne({ id: room_typeId });
    if (!findRoomType) throw new HttpException(409, "You're not room_type");

    return findRoomType;
  }

  public async createRoomType(room_typeData: CreateRoomTypeDto): Promise<RoomType> {
    if (isEmpty(room_typeData)) throw new HttpException(400, "You're not room_typeData");

    const createRoomTypeData: RoomType = await this.room_types.create({
      ...room_typeData,
      id: v4(),
    });

    return createRoomTypeData;
  }

  public async updateRoomType(
    room_typeId: string,
    room_typeData: CreateRoomTypeDto,
  ): Promise<RoomType> {
    if (isEmpty(room_typeData)) throw new HttpException(400, "You're not room_typeData");

    const updateRoomTypeById: RoomType = await this.room_types.findOneAndUpdate(
      { id: room_typeId },
      room_typeData,
    );
    if (!updateRoomTypeById) throw new HttpException(409, "You're not room_type");

    return updateRoomTypeById;
  }

  public async deleteRoomType(room_typeId: string): Promise<RoomType> {
    const deleteRoomTypeById: RoomType = await this.room_types.findOneAndDelete({
      id: room_typeId,
    });
    if (!deleteRoomTypeById) throw new HttpException(409, "You're not room_type");

    return deleteRoomTypeById;
  }
}

export default RoomTypeService;
