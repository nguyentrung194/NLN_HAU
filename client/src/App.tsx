import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterRoute } from "./route/register.route";
import { LoginRoute } from "./route/login.route";
import { NavLayout } from "./layouts/nav";
import { PhongContext, PhongContextProvider } from "./contexts/reducer";
import "./styles/index.css";
import { HomeRoute } from "./route/home.route";
// import { DetailsHotelRoute } from "./route/details-hotel.route";
import { AdminLayout } from "./layouts/nav-admin";
import { AdminRoute } from "./route/admin.route";

function App() {
  const {} = useContext(PhongContext);
  if (false) {
    return (
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/register" element={<RegisterRoute />} />
          <Route path="/*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <PhongContextProvider>
        <Routes>
          <Route element={<NavLayout />}>
            <Route path="/*" element={<HomeRoute />} />
            <Route element={<AdminLayout />}>
              <Route path="/admin/*" element={<AdminRoute />} />
            </Route>
          </Route>
        </Routes>
      </PhongContextProvider>
    );
  }
}

export default App;
