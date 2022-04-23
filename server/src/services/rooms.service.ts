import { CreateRoomDto } from '@dtos/rooms.dto';
import { HttpException } from '@exceptions/HttpException';
import { Room } from '@/interfaces/interface';
import { roomModel } from '@/models/model';
import { isEmpty } from '@utils/util';

class RoomService {
  public rooms = roomModel;

  public async findAllRoom(): Promise<Room[]> {
    const rooms: Room[] = await this.rooms.find();
    return rooms;
  }

  public async findRoomById(roomId: string): Promise<Room> {
    if (isEmpty(roomId)) throw new HttpException(400, "You're not roomId");

    const findRoom: Room = await this.rooms.findOne({ id: roomId });
    if (!findRoom) throw new HttpException(409, "You're not room");

    return findRoom;
  }

  public async createRoom(roomData: CreateRoomDto): Promise<Room> {
    if (isEmpty(roomData)) throw new HttpException(400, "You're not roomData");

    const createRoomData: Room = await this.rooms.create({
      ...roomData,
    });

    return createRoomData;
  }

  public async updateRoom(roomId: string, roomData: CreateRoomDto): Promise<Room> {
    if (isEmpty(roomData)) throw new HttpException(400, "You're not roomData");

    const updateRoomById: Room = await this.rooms.findByIdAndUpdate(roomId, { roomData });
    if (!updateRoomById) throw new HttpException(409, "You're not room");

    return updateRoomById;
  }

  public async deleteRoom(roomId: string): Promise<Room> {
    const deleteRoomById: Room = await this.rooms.findByIdAndDelete(roomId);
    if (!deleteRoomById) throw new HttpException(409, "You're not room");

    return deleteRoomById;
  }
}

export default RoomService;
