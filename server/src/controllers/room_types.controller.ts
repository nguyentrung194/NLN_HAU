import { NextFunction, Request, Response } from 'express';
import { CreateRoomTypeDto } from '@dtos/room_types.dto';
import { RoomType } from '@/interfaces/interface';
import room_typesService from '@/services/room_types.service';

class RoomTypesController {
  public room_typesService = new room_typesService();

  public getRoomTypes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllRoomTypesData: RoomType[] =
        await this.room_typesService.findAllRoomType();

      res.status(200).json({ data: findAllRoomTypesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getRoomTypeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const room_typeId: string = req.params.id;
      const findOneRoomTypeData: RoomType = await this.room_typesService.findRoomTypeById(
        room_typeId,
      );

      res.status(200).json({ data: findOneRoomTypeData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const room_typeData: CreateRoomTypeDto = req.body;
      const createRoomTypeData: RoomType = await this.room_typesService.createRoomType(
        room_typeData,
      );

      res.status(201).json({ data: createRoomTypeData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const room_typeId: string = req.params.id;
      const room_typeData: CreateRoomTypeDto = req.body;
      const updateRoomTypeData: RoomType = await this.room_typesService.updateRoomType(
        room_typeId,
        room_typeData,
      );

      res.status(200).json({ data: updateRoomTypeData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const room_typeId: string = req.params.id;
      const deleteRoomTypeData: RoomType = await this.room_typesService.deleteRoomType(
        room_typeId,
      );

      res.status(200).json({ data: deleteRoomTypeData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default RoomTypesController;
