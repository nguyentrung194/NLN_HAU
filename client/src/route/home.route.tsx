import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../components/home";
import { DetailsHotel } from "../components/home/details-hotel";
import { LoginRoute } from "./login.route";
import { RegisterRoute } from "./register.route";
import { ProfileRoute } from "./profile.route";

export const HomeRoute = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="details/:id" element={<DetailsHotel />} />
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/register" element={<RegisterRoute />} />
      <Route path="/profile" element={<ProfileRoute />} />
      <Route path="/*" element={<Navigate to="login" replace={true} />} />
    </Routes>
  );
};
