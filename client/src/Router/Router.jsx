import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Profile from "../pages/auth/Profile";
import LayoutMain from "../components/Main/LayoutMain";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/auth/Login";
import Changepassword from "../pages/auth/Changepassword";

const routerAdmin = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />}></Route>
      <Route element={<LayoutMain />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/Changepassword" element={<Changepassword />}></Route>
      </Route>
    </>
  )
);

const Router = () => {
  return (
    <div>
      <RouterProvider router={routerAdmin} />
    </div>
  );
};

export default Router;
