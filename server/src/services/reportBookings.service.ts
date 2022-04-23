import { CreateReportBookingDto } from '@dtos/reportBookings.dto';
import { HttpException } from '@exceptions/HttpException';
import { ReportBooking } from '@/interfaces/interface';
import { reportBookingModel } from '@/models/model';
import { isEmpty } from '@utils/util';

class ReportBookingService {
  public reportBookings = reportBookingModel;

  public async findAllReportBooking(): Promise<ReportBooking[]> {
    const reportBookings: ReportBooking[] = await this.reportBookings.find();
    return reportBookings;
  }

  public async findReportBookingById(reportBookingId: string): Promise<ReportBooking> {
    if (isEmpty(reportBookingId))
      throw new HttpException(400, "You're not reportBookingId");

    const findReportBooking: ReportBooking = await this.reportBookings.findOne({
      id: reportBookingId,
    });
    if (!findReportBooking) throw new HttpException(409, "You're not reportBooking");

    return findReportBooking;
  }

  public async createReportBooking(
    reportBookingData: CreateReportBookingDto,
  ): Promise<ReportBooking> {
    if (isEmpty(reportBookingData))
      throw new HttpException(400, "You're not reportBookingData");

    const createReportBookingData: ReportBooking = await this.reportBookings.create({
      ...reportBookingData,
    });

    return createReportBookingData;
  }

  public async updateReportBooking(
    reportBookingId: string,
    reportBookingData: CreateReportBookingDto,
  ): Promise<ReportBooking> {
    if (isEmpty(reportBookingData))
      throw new HttpException(400, "You're not reportBookingData");

    const updateReportBookingById: ReportBooking =
      await this.reportBookings.findByIdAndUpdate(reportBookingId, {
        reportBookingData,
      });
    if (!updateReportBookingById)
      throw new HttpException(409, "You're not reportBooking");

    return updateReportBookingById;
  }

  public async deleteReportBooking(reportBookingId: string): Promise<ReportBooking> {
    const deleteReportBookingById: ReportBooking =
      await this.reportBookings.findByIdAndDelete(reportBookingId);
    if (!deleteReportBookingById)
      throw new HttpException(409, "You're not reportBooking");

    return deleteReportBookingById;
  }
}

export default ReportBookingService;
