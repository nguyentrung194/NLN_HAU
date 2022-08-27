import { model, Schema, Document } from 'mongoose';
import { Room, Booking, User } from '@/interfaces/interface';

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
  room_id: {
    type: String,
    default: 1,
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
    id: {
      type: String,
    },
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
