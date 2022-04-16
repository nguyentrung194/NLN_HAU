import { Router } from 'express';
import RoomsController from '@controllers/rooms.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class RoomsRoute implements Routes {
  public path = '/rooms';
  public router = Router();
  public roomsController = new RoomsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.roomsController.getUsers);
    this.router.get(`${this.path}/:id`, this.roomsController.getUserById);
    this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.roomsController.createUser);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.roomsController.updateUser);
    this.router.delete(`${this.path}/:id`, this.roomsController.deleteUser);
  }
}

export default RoomsRoute;
