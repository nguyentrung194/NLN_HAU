import { NextFunction, Request, Response } from 'express';
import { CreateBookingDto } from '@dtos/bookings.dto';
import { Booking } from '@/interfaces/interface';
import bookingService from '@services/bookings.service';

class BookingsController {
  public bookingService = new bookingService();

  public getBookings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllBookingsData: Booking[] = await this.bookingService.findAllBooking();

      res.status(200).json({ data: findAllBookingsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getBookingById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookingId: string = req.params.id;
      const findOneBookingData: Booking = await this.bookingService.findBookingById(
        bookingId,
      );

      res.status(200).json({ data: findOneBookingData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookingData: CreateBookingDto = req.body;
      const createBookingData: Booking = await this.bookingService.createBooking(
        bookingData,
      );

      res.status(201).json({ data: createBookingData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookingId: string = req.params.id;
      const bookingData: CreateBookingDto = req.body;
      const updateBookingData: Booking = await this.bookingService.updateBooking(
        bookingId,
        bookingData,
      );

      res.status(200).json({ data: updateBookingData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookingId: string = req.params.id;
      const deleteBookingData: Booking = await this.bookingService.deleteBooking(
        bookingId,
      );

      res.status(200).json({ data: deleteBookingData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default BookingsController;
