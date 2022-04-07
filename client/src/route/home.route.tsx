import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../components/home";
import { DetailsHotel } from "../components/home/details-hotel";

export const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:id" element={<DetailsHotel />} />
      <Route path="/*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
