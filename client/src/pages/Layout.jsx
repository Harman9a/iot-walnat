import React, { useState } from "react";

function Layout() {
  const [activeSidebar, setActiveSidebar] = useState(true);
  return (
    <div>
      <div
        className={`drawer ${
          activeSidebar === true ? "drawer-open" : "drawer-close"
        }`}
      >
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="navbar bg-base-100">
            <a
              className="btn btn-ghost text-xl"
              onClick={() => setActiveSidebar(!activeSidebar)}
            >
              daisyUI
            </a>
          </div>
          <div className="p-4">Outlet</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Layout;
