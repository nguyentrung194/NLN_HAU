import { NextFunction, Request, Response } from 'express';
import { CreateReportBookingDto } from '@dtos/reportBookings.dto';
import { ReportBooking } from '@/interfaces/interface';
import reportBookingsService from '@services/reportBookings.service';

class ReportBookingsController {
  public reportBookingsService = new reportBookingsService();

  public getReportBookings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllReportBookingsData: ReportBooking[] =
        await this.reportBookingsService.findAllReportBooking();

      res.status(200).json({ data: findAllReportBookingsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getReportBookingById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const roomId: string = req.params.id;
      const findOneReportBookingData: ReportBooking =
        await this.reportBookingsService.findReportBookingById(roomId);

      res.status(200).json({ data: findOneReportBookingData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createReportBooking = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const roomData: CreateReportBookingDto = req.body;
      const createReportBookingData: ReportBooking =
        await this.reportBookingsService.createReportBooking(roomData);

      res.status(201).json({ data: createReportBookingData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateReportBooking = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const roomId: string = req.params.id;
      const roomData: CreateReportBookingDto = req.body;
      const updateReportBookingData: ReportBooking =
        await this.reportBookingsService.updateReportBooking(roomId, roomData);

      res.status(200).json({ data: updateReportBookingData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteReportBooking = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const roomId: string = req.params.id;
      const deleteReportBookingData: ReportBooking =
        await this.reportBookingsService.deleteReportBooking(roomId);

      res.status(200).json({ data: deleteReportBookingData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ReportBookingsController;
