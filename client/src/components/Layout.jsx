import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Sidebar from "./common/Sidebar";

export default function Layout() {
  const [activeSidebar, setActiveSidebar] = useState(true);

  const handleToggle = () => {
    setActiveSidebar(!activeSidebar);
  };

  return (
    <div>
      <div
        className={`drawer ${
          activeSidebar === true ? "drawer-open" : "drawer-close"
        }`}
      >
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header handleToggle={handleToggle} />
          <div>
            <Outlet />
            {/* <Footer /> */}
          </div>
        </div>
        <div className="drawer-side">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
