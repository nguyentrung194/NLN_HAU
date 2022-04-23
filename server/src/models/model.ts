import { model, Schema, Document } from 'mongoose';
import { v4 } from 'uuid';
import {
  Booking,
  Room,
  RoomType,
  Stock,
  User,
  Expens,
  ReportBooking,
  Invoices,
  Item,
} from '@/interfaces/interface';

const userSchema: Schema<User> = new Schema({
  id: {
    type: String,
    unique: true,
    default: v4(),
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
    default: ['User'],
  },
  lastPackage: {
    type: Array<String>(),
    default: [],
  },
  lastCheckOut: {
    type: Array<String>(),
    default: [],
  },
});

export const userModel = model<User & Document>('User', userSchema);

const bookingSchema: Schema<Booking> = new Schema({
  id: {
    type: String,
    unique: true,
    default: v4(),
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
    unique: true,
    default: v4(),
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
    unique: true,
    default: v4(),
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
    unique: true,
    default: v4(),
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

const expensSchema: Schema<Expens> = new Schema({
  id: {
    type: String,
    unique: true,
    default: v4(),
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

export const expensModel = model<Expens & Document>('Expens', expensSchema);

const reportBookingSchema: Schema<ReportBooking> = new Schema({
  id: {
    type: String,
    unique: true,
    default: v4(),
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

export const reportBookingModel = model<ReportBooking & Document>(
  'ReportBooking',
  reportBookingSchema,
);

const invoicesSchema: Schema<Invoices> = new Schema({
  id: {
    type: String,
    unique: true,
    default: v4(),
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
