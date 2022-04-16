export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  lastPackage: string;
  verified: 'Active' | 'Deactive';
  lastCheckOut: string;
  group: 'Basic' | 'Silver' | 'Gold' | 'Platinum' | 'Dimond';
  roles: Array<String>;
}

export interface Booking {
  id: string;
  customerId: string;
  booking: 'Pending' | 'Active';
  package_p: string;
  roomType: string;
  arrive: Date;
  payment: 'Paid' | 'Due';
}

export interface Room {
  id: string;
  no: string;
  roomType: string;
  AC: 'AC' | 'none';
  meal: Array<string>;
  bedCapacity: number;
  rent: number;
  status: 'Booked' | 'Pending' | 'Open';
}

export interface RoomType {
  id: string;
  name: string;
  rent: number;
  shortCode: string;
  noOfRoom: number;
  type: string;
  status: 'Active' | 'Inactive';
}

export interface Stock {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  unit: string;
  status: 'Available' | 'Low' | 'Out of Stock';
}

export interface Expenses {
  id: string;
  supplierName: string;
  description: string;
  date: Date;
  amount: number;
}

export interface BookingReport {
  id: string;
  roomType: string;
  from: Date;
  to: Date;
  totalAmount: number;
}

export interface Item {
  id: string;
  description: string;
  price: number;
  QTY: number;
  amount: number;
}

export interface Invoices {
  id: string;
  date: Date;
  amount: number;
  status: 'Complete' | 'Pending';
  items: Array<Item>;
  total: number;
}
