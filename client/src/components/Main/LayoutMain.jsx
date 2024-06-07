import React, { useState } from "react";
// import Header from "../common/Header";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
// import Sidebar from "../common/Sidebar";

function LayoutMain() {
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
          </div>
        </div>
        <div className="drawer-side">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default LayoutMain;
