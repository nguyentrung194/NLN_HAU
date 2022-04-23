import { Router } from 'express';
import BookingsController from '@controllers/bookings.controller';
import { CreateBookingDto } from '@dtos/bookings.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddlewareAdmin from '@/middlewares/auth.middleware.admin';

class BookingsRoute implements Routes {
  public path = '/bookings';
  public router = Router();
  public bookingsController = new BookingsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      authMiddlewareAdmin,
      this.bookingsController.getBookings,
    );
    this.router.get(`${this.path}/:id`, this.bookingsController.getBookingById);
    this.router.post(
      `${this.path}`,
      authMiddlewareAdmin,
      validationMiddleware(CreateBookingDto, 'body'),
      this.bookingsController.createBooking,
    );
    this.router.put(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      validationMiddleware(CreateBookingDto, 'body', true),
      this.bookingsController.updateBooking,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.bookingsController.deleteBooking,
    );
  }
}

export default BookingsRoute;
