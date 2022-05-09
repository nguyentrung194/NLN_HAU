import { Router } from 'express';
import RoomTypesController from '@/controllers/room_types.controller';
import { CreateRoomTypeDto } from '@/dtos/room_types.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddlewareAdmin from '@/middlewares/auth.middleware.admin';

class RoomTypesRoute implements Routes {
  public path = '/room_types';
  public router = Router();
  public room_typesController = new RoomTypesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.room_typesController.getRoomTypes);
    this.router.get(`${this.path}/:id`, this.room_typesController.getRoomTypeById);
    this.router.post(
      `${this.path}`,
      // authMiddlewareAdmin,
      validationMiddleware(CreateRoomTypeDto, 'body'),
      this.room_typesController.createRoomType,
    );
    this.router.put(
      `${this.path}/:id`,
      // authMiddlewareAdmin,
      validationMiddleware(CreateRoomTypeDto, 'body', true),
      this.room_typesController.updateRoomType,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.room_typesController.deleteRoomType,
    );
  }
}

export default RoomTypesRoute;
