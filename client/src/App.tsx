import React, { useContext, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { NavLayout } from "./layouts/nav";
import { Context } from "./contexts/context";
import "./styles/index.css";
import { HomeRoute } from "./route/home.route";
// import { DetailsHotelRoute } from "./route/details-hotel.route";
import { AdminLayout } from "./layouts/nav-admin";
import { AdminRoute } from "./route/admin.route";
import axios from "axios";
import environment from "./config";

function App() {
  const { isLogin, login, isAdmin } = useContext(Context);
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchData() {
      // You can await here
      await axios({
        url: `${environment.api}users/me`,
        method: "GET",
        withCredentials: true,
      })
        .then(({ data: { data } }: { data: { data: any } }) => {
          // Handle success
          console.log(data);
          if (data.roles.includes("Admin")) {
            login({ isLogin: true, isAdmin: true, user: data });
            navigate("/admin");
          } else {
            login({ isLogin: true, isAdmin: false, user: data });
            navigate("/");
          }
        })
        .catch((err) => {
          // Handle error
          login({ isLogin: false });
          console.log(err);
        });
    }
    fetchData();
  }, []);

  console.log(isLogin);
  if (!isAdmin) {
    return (
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home/*" element={<HomeRoute />} />
          {/* <Route path="/*" element={<Navigate to="/" replace={true} />} /> */}
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route element={<NavLayout />}>
          {/* <Route path="/" element={<Navigate to="/home" replace={true} />} /> */}
          {/* <Route path="/home/*" element={<HomeRoute />} /> */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/*" element={<AdminRoute />} />
          </Route>
          <Route path="/*" element={<Navigate to="/admin" replace={true} />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
