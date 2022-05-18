import { Router } from 'express';
import RoomsController from '@/controllers/rooms.controller';
import { CreateRoomDto } from '@/dtos/rooms.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddlewareAdmin from '@/middlewares/auth.middleware.admin';

class RoomsRoute implements Routes {
  public path = '/rooms';
  public router = Router();
  public roomsController = new RoomsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}`, this.roomsController.getRooms);
    this.router.get(`${this.path}`, this.roomsController.getRoomsByFilter);
    this.router.get(`${this.path}/:id`, this.roomsController.getRoomById);
    this.router.post(
      `${this.path}`,
      authMiddlewareAdmin,
      validationMiddleware(CreateRoomDto, 'body', true),
      this.roomsController.createRoom,
    );
    this.router.put(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      validationMiddleware(CreateRoomDto, 'body', true),
      this.roomsController.updateRoom,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.roomsController.deleteRoom,
    );
  }
}

export default RoomsRoute;
