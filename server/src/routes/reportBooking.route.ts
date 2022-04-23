import { Router } from 'express';
import ReportBookingsController from '@controllers/reportBookings.controller';
import { CreateReportBookingDto } from '@dtos/reportBookings.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddlewareAdmin from '@/middlewares/auth.middleware.admin';

class ReportBookingsRoute implements Routes {
  public path = '/reportBookings';
  public router = Router();
  public reportBookingsController = new ReportBookingsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      authMiddlewareAdmin,
      this.reportBookingsController.getReportBookings,
    );
    this.router.get(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.reportBookingsController.getReportBookingById,
    );
    this.router.post(
      `${this.path}`,
      authMiddlewareAdmin,
      validationMiddleware(CreateReportBookingDto, 'body'),
      this.reportBookingsController.createReportBooking,
    );
    this.router.put(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      validationMiddleware(CreateReportBookingDto, 'body', true),
      this.reportBookingsController.updateReportBooking,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.reportBookingsController.deleteReportBooking,
    );
  }
}

export default ReportBookingsRoute;
