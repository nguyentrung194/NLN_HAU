import { Router } from 'express';
import BookingsController from '@controllers/bookings.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class BookingsRoute implements Routes {
  public path = '/bookings';
  public router = Router();
  public bookingsController = new BookingsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.bookingsController.getUsers);
    this.router.get(`${this.path}/:id`, this.bookingsController.getUserById);
    this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.bookingsController.createUser);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.bookingsController.updateUser);
    this.router.delete(`${this.path}/:id`, this.bookingsController.deleteUser);
  }
}

export default BookingsRoute;
