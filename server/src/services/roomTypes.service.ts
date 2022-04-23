import { CreateRoomTypeDto } from '@dtos/roomTypes.dto';
import { HttpException } from '@exceptions/HttpException';
import { RoomType } from '@/interfaces/interface';
import { roomTypeModel } from '@/models/model';
import { isEmpty } from '@utils/util';

class RoomTypeService {
  public roomTypes = roomTypeModel;

  public async findAllRoomType(): Promise<RoomType[]> {
    const roomTypes: RoomType[] = await this.roomTypes.find();
    return roomTypes;
  }

  public async findRoomTypeById(roomTypeId: string): Promise<RoomType> {
    if (isEmpty(roomTypeId)) throw new HttpException(400, "You're not roomTypeId");

    const findRoomType: RoomType = await this.roomTypes.findOne({ id: roomTypeId });
    if (!findRoomType) throw new HttpException(409, "You're not roomType");

    return findRoomType;
  }

  public async createRoomType(roomTypeData: CreateRoomTypeDto): Promise<RoomType> {
    if (isEmpty(roomTypeData)) throw new HttpException(400, "You're not roomTypeData");

    const createRoomTypeData: RoomType = await this.roomTypes.create({
      ...roomTypeData,
    });

    return createRoomTypeData;
  }

  public async updateRoomType(
    roomTypeId: string,
    roomTypeData: CreateRoomTypeDto,
  ): Promise<RoomType> {
    if (isEmpty(roomTypeData)) throw new HttpException(400, "You're not roomTypeData");

    const updateRoomTypeById: RoomType = await this.roomTypes.findByIdAndUpdate(
      roomTypeId,
      { roomTypeData },
    );
    if (!updateRoomTypeById) throw new HttpException(409, "You're not roomType");

    return updateRoomTypeById;
  }

  public async deleteRoomType(roomTypeId: string): Promise<RoomType> {
    const deleteRoomTypeById: RoomType = await this.roomTypes.findByIdAndDelete(
      roomTypeId,
    );
    if (!deleteRoomTypeById) throw new HttpException(409, "You're not roomType");

    return deleteRoomTypeById;
  }
}

export default RoomTypeService;
