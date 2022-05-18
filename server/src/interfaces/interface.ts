export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  image: string;
  verified: string;
  group: string;
  roles: Array<string>;
  created_at: Date;
  updated_at: Date;
}

export interface Review {
  id: string;
  content: string;
  star: number;
}

export interface Room {
  id: string;
  room_no: string;
  room_type: string;
  description: string;
  rent: number;
  images: Array<string>;
  reviews: Array<Review>;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface RoomType {
  id: string;
  name: string;
  image: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface Client {
  id: string;
}

export interface Item {
  id: string;
}

export interface Booking {
  id: string;
  user: Client;
  room: Item;
  note: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
