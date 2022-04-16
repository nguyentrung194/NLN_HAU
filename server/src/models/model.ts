import { model, Schema, Document } from 'mongoose';
import {
  Booking,
  Room,
  RoomType,
  Stock,
  User,
  Expenses,
  BookingReport,
  Invoices,
  Item,
} from '@/interfaces/interface';

const userSchema: Schema<User> = new Schema({
  id: {
    type: String,
    require,
    unique: true,
  },
  email: {
    type: String,
    require,
    unique: true,
  },
  name: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
  phone: {
    type: String,
    require,
  },
  verified: {
    type: String,
    default: 'Active',
  },
  group: {
    type: String,
    default: 'Basic',
  },
  roles: {
    type: Array<String>(),
    require,
    default: ['User'],
  },
});

export const userModel = model<User & Document>('User', userSchema);

const bookingSchema: Schema<Booking> = new Schema({
  id: {
    type: String,
    require,
    unique: true,
  },
  customerId: {
    type: String,
    require,
  },
  booking: {
    type: String,
    require,
  },
  package_p: {
    type: String,
    require,
  },
  roomType: {
    type: String,
    require,
  },
  arrive: {
    type: Date,
    require,
    default: new Date(),
  },
  payment: {
    type: String,
    require,
    default: 'Due',
  },
});

export const bookingModel = model<Booking & Document>('Booking', bookingSchema);

const roomSchema: Schema<Room> = new Schema({
  id: {
    type: String,
    require,
    unique: true,
  },
  no: {
    type: String,
    require,
  },
  roomType: {
    type: String,
    require,
  },
  AC: {
    type: String,
    require,
  },
  meal: {
    type: Array<String>(),
    require,
  },
  bedCapacity: {
    type: Number,
    require,
  },
  rent: {
    type: Number,
    require,
  },
  status: {
    type: String,
    require,
  },
});

export const roomModel = model<Room & Document>('Room', roomSchema);

const roomTypeSchema: Schema<RoomType> = new Schema({
  id: {
    type: String,
    require,
    unique: true,
  },
  name: {
    type: String,
    require,
    unique: true,
  },
  rent: {
    type: Number,
    require,
  },
  shortCode: {
    type: String,
    require,
  },
  noOfRoom: {
    type: Number,
    require,
  },
  type: {
    type: String,
    require,
  },
  status: {
    type: String,
    require,
  },
});

export const roomTypeModel = model<RoomType & Document>('RoomType', roomTypeSchema);

const stockSchema: Schema<Stock> = new Schema({
  id: {
    type: String,
    require,
    unique: true,
  },
  productName: {
    type: String,
    require,
  },
  quantity: {
    type: Number,
    require,
  },
  price: {
    type: Number,
    require,
  },
  unit: {
    type: String,
    require,
  },
  status: {
    type: String,
    require,
  },
});

export const stockModel = model<Stock & Document>('Stock', stockSchema);

const expensesSchema: Schema<Expenses> = new Schema({
  id: {
    type: String,
    require,
    unique: true,
  },
  supplierName: {
    type: String,
    require,
  },
  description: {
    type: String,
    require,
  },
  date: {
    type: Date,
    require,
    default: new Date(),
  },
  amount: {
    type: Number,
    require,
  },
});

export const expensesModel = model<Expenses & Document>('Expenses', expensesSchema);

const bookingReportSchema: Schema<BookingReport> = new Schema({
  id: {
    type: String,
    require,
    unique: true,
  },
  roomType: {
    type: String,
    require,
  },
  from: {
    type: Date,
    require,
    default: new Date(),
  },
  to: {
    type: Date,
    require,
    default: new Date(),
  },
  totalAmount: {
    type: Number,
    require,
  },
});

export const bookingReportModel = model<BookingReport & Document>(
  'BookingReport',
  bookingReportSchema,
);

const invoicesSchema: Schema<Invoices> = new Schema({
  id: {
    type: String,
    require,
    unique: true,
  },
  date: {
    type: Date,
    require,
    default: new Date(),
  },
  amount: {
    type: Number,
    require,
  },
  status: {
    type: String,
    require,
  },
  items: {
    type: Array<Item>(),
    require,
  },
  total: {
    type: Number,
    require,
  },
});

export const invoicesModel = model<Invoices & Document>('Invoices', invoicesSchema);
