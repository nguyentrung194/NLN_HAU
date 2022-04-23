import { Router } from 'express';
import RoomTypesController from '@controllers/roomTypes.controller';
import { CreateRoomTypeDto } from '@dtos/roomTypes.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddlewareAdmin from '@/middlewares/auth.middleware.admin';

class RoomTypesRoute implements Routes {
  public path = '/roomTypes';
  public router = Router();
  public roomTypesController = new RoomTypesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.roomTypesController.getRoomTypes);
    this.router.get(`${this.path}/:id`, this.roomTypesController.getRoomTypeById);
    this.router.post(
      `${this.path}`,
      authMiddlewareAdmin,
      validationMiddleware(CreateRoomTypeDto, 'body'),
      this.roomTypesController.createRoomType,
    );
    this.router.put(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      validationMiddleware(CreateRoomTypeDto, 'body', true),
      this.roomTypesController.updateRoomType,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.roomTypesController.deleteRoomType,
    );
  }
}

export default RoomTypesRoute;
