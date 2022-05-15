import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Admin } from "../components/admin";
import { AddBooking } from "../components/admin/booking/add-booking";
import { AddCustomer } from "../components/admin/customers/add-customer";
import { AddRoom } from "../components/admin/room/add-room";
import { AddRoomType } from "../components/admin/room-type/add-room-type";
import { Bookings } from "../components/admin/booking/bookings";
import { Customer } from "../components/admin/customers/customer";
import { EditBooking } from "../components/admin/booking/edit-booking";
import { EditCustomer } from "../components/admin/customers/edit-customer";
import { EditRoom } from "../components/admin/room/edit-room";
import { EditRoomType } from "../components/admin/room-type/edit-room-type";
import { Rooms } from "../components/admin/room/rooms";
import { RoomsType } from "../components/admin/room-type/rooms-type";

export const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />

      {/* bookings */}
      <Route path="bookings" element={<Bookings />} />
      <Route path="bookings/add-booking" element={<AddBooking />} />
      <Route path="bookings/edit-booking/:id" element={<EditBooking />} />

      {/* rooms/all */}
      <Route path="rooms/all" element={<Rooms />} />
      <Route path="rooms/add-room" element={<AddRoom />} />
      <Route path="rooms/edit-room/:id" element={<EditRoom />} />

      {/* rooms/rooms-type */}
      <Route path="rooms/rooms-type" element={<RoomsType />} />
      <Route path="rooms/add-room-type" element={<AddRoomType />} />
      <Route path="rooms/edit-room-type/:id" element={<EditRoomType />} />

      {/* customers */}
      <Route path="customers" element={<Customer />} />
      <Route path="customers/add-customer" element={<AddCustomer />} />
      <Route path="customers/edit-customer/:id" element={<EditCustomer />} />

      {/* <Route path="/*" element={<Navigate to="/admin" replace={true} />} /> */}
    </Routes>
  );
};
