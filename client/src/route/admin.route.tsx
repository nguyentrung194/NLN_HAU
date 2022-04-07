import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Admin } from "../components/admin";
import { AddBooking } from "../components/admin/add-booking";
import { AddRoom } from "../components/admin/add-room";
import { Bookings } from "../components/admin/bookings";
import { EditBooking } from "../components/admin/edit-booking";
import { EditRoom } from "../components/admin/edit-rooms";
import { Rooms } from "../components/admin/rooms";

export const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="bookings/add-booking" element={<AddBooking />} />
      <Route path="bookings/edit-booking/:id" element={<EditBooking />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="rooms/add-room" element={<AddRoom />} />
      <Route path="rooms/edit-room/:id" element={<EditRoom />} />
      {/* <Route path="/*" element={<Navigate to="/admin" replace={true} />} /> */}
    </Routes>
  );
};
