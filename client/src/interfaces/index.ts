export interface DataCustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  password: string;
  verified: string;
  group: string;
  roles: string;
  created_at: string;
  updated_at: string;
  room_id: string;
}

export interface DataRoom {
  id: string;
  room_no: string;
  room_type: string;
  description: string;
  rent: string;
  images: string;
  reviews: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface DataRoomType {
  id: string;
  name: string;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface DataBooking {
  id: string;
  package_p: string;
  note: string;
  user: string;
  room: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
}

export interface Item {
  id: string;
  quantity: number;
}

export interface DataOrder {
  id: string;
  user: string;
  products: string;
  status: string;
  created_at: string;
  updated_at: string;
}
