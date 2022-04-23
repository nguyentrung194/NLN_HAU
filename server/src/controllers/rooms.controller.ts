import { NextFunction, Request, Response } from 'express';
import { CreateRoomDto } from '@dtos/rooms.dto';
import { Room } from '@/interfaces/interface';
import roomsService from '@services/rooms.service';

class RoomsController {
  public roomsService = new roomsService();

  public getRooms = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllRoomsData: Room[] = await this.roomsService.findAllRoom();

      res.status(200).json({ data: findAllRoomsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getRoomById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomId: string = req.params.id;
      const findOneRoomData: Room = await this.roomsService.findRoomById(roomId);

      res.status(200).json({ data: findOneRoomData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomData: CreateRoomDto = req.body;
      const createRoomData: Room = await this.roomsService.createRoom(roomData);

      res.status(201).json({ data: createRoomData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomId: string = req.params.id;
      const roomData: CreateRoomDto = req.body;
      const updateRoomData: Room = await this.roomsService.updateRoom(roomId, roomData);

      res.status(200).json({ data: updateRoomData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomId: string = req.params.id;
      const deleteRoomData: Room = await this.roomsService.deleteRoom(roomId);

      res.status(200).json({ data: deleteRoomData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default RoomsController;
