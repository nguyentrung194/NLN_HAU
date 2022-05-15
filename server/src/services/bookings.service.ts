import { CreateBookingDto } from '@/dtos/bookings.dto';
import { HttpException } from '@exceptions/HttpException';
import { Booking } from '@/interfaces/interface';
import { bookingModel } from '@/models/model';
import { isEmpty } from '@utils/util';
import { v4 } from 'uuid';

class BookingService {
  public bookings = bookingModel;

  public async findAllBooking(): Promise<Booking[]> {
    const bookings: Booking[] = await this.bookings.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'user.id',
          foreignField: 'id',
          as: 'user',
        },
      },
      {
        $lookup: {
          from: 'rooms',
          localField: 'room.id',
          foreignField: 'id',
          as: 'room',
        },
      },
      {
        $project: {
          'user.password': false,
          'user._id': false,
          'user.__v': false,
        },
      },
    ]);
    return bookings;
  }

  public async findBookingById(bookingId: string): Promise<Booking> {
    if (isEmpty(bookingId)) throw new HttpException(400, "You're not bookingId");

    const findBooking: Booking = await this.bookings.findOne({ id: bookingId });
    if (!findBooking) throw new HttpException(409, "You're not booking");

    return findBooking;
  }

  public async createBooking(bookingData: CreateBookingDto): Promise<Booking> {
    if (isEmpty(bookingData)) throw new HttpException(400, "You're not bookingData");

    const createBookingData: Booking = await this.bookings.create({
      ...bookingData,
      id: v4(),
    });

    return createBookingData;
  }

  public async updateBooking(
    bookingId: string,
    bookingData: CreateBookingDto,
  ): Promise<Booking> {
    if (isEmpty(bookingData)) throw new HttpException(400, "You're not bookingData");

    const updateBookingById: Booking = await this.bookings.findOneAndUpdate(
      { id: bookingId },
      bookingData,
    );
    if (!updateBookingById) throw new HttpException(409, "You're not booking");

    return updateBookingById;
  }

  public async deleteBooking(bookingId: string): Promise<Booking> {
    const deleteBookingById: Booking = await this.bookings.findOneAndDelete({
      id: bookingId,
    });
    if (!deleteBookingById) throw new HttpException(409, "You're not booking");

    return deleteBookingById;
  }
}

export default BookingService;
