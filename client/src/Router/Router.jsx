import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import ManageAdmin from "../pages/ManageAdmin";
import Layout from "../components/Layout";

const routerAdmin = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />}></Route>
      <Route path="/" element={<Layout />}>
        <Route path="/manage-admin" element={<ManageAdmin />}></Route>
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
