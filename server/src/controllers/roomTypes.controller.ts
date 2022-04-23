import { NextFunction, Request, Response } from 'express';
import { CreateRoomTypeDto } from '@dtos/roomTypes.dto';
import { RoomType } from '@/interfaces/interface';
import roomTypesService from '@services/roomTypes.service';

class RoomTypesController {
  public roomTypesService = new roomTypesService();

  public getRoomTypes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllRoomTypesData: RoomType[] =
        await this.roomTypesService.findAllRoomType();

      res.status(200).json({ data: findAllRoomTypesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getRoomTypeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomTypeId: string = req.params.id;
      const findOneRoomTypeData: RoomType = await this.roomTypesService.findRoomTypeById(
        roomTypeId,
      );

      res.status(200).json({ data: findOneRoomTypeData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomTypeData: CreateRoomTypeDto = req.body;
      const createRoomTypeData: RoomType = await this.roomTypesService.createRoomType(
        roomTypeData,
      );

      res.status(201).json({ data: createRoomTypeData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomTypeId: string = req.params.id;
      const roomTypeData: CreateRoomTypeDto = req.body;
      const updateRoomTypeData: RoomType = await this.roomTypesService.updateRoomType(
        roomTypeId,
        roomTypeData,
      );

      res.status(200).json({ data: updateRoomTypeData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteRoomType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomTypeId: string = req.params.id;
      const deleteRoomTypeData: RoomType = await this.roomTypesService.deleteRoomType(
        roomTypeId,
      );

      res.status(200).json({ data: deleteRoomTypeData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default RoomTypesController;
