import { model, Schema, Document } from 'mongoose';
import { Room, RoomType, Booking, User, Review } from '@/interfaces/interface';

const userSchema: Schema<User> = new Schema({
  id: {
    type: String,
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
  image: {
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
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});

export const userModel = model<User & Document>('User', userSchema);

const roomSchema: Schema<Room> = new Schema({
  id: {
    type: String,
    unique: true,
  },
  room_no: {
    type: String,
    require,
  },
  room_type: {
    type: String,
    require,
  },
  description: {
    type: String,
    default: '',
  },
  rent: {
    type: Number,
    require,
  },
  images: {
    type: Array<String>(),
    default: [],
  },
  reviews: {
    type: Array<Review>(),
    default: [],
  },
  status: {
    type: String,
    default: 'Active',
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});

roomSchema.index({
  name: 'text',
  room_types: 'text',
  description: 'text',
  status: 'text',
});
export const roomModel = model<Room & Document>('Room', roomSchema);

const room_typeSchema: Schema<RoomType> = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    require,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
    default: 'Active',
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});

export const room_typeModel = model<RoomType & Document>('RoomType', room_typeSchema);

const bookingSchema: Schema<Booking> = new Schema({
  id: {
    type: String,
    unique: true,
  },
  user: {
    id: {
      type: String,
    },
  },
  room: {
    type: Object(),
    default: {},
  },
  note: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: 'Paid',
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});

export const bookingModel = model<Booking & Document>('Booking', bookingSchema);
