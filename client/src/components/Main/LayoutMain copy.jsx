import { Outlet } from "react-router-dom";
import Header from '../common/Header';
import Sidebar from "../common/Sidebar";
import React from "react";
import Footer from "../common/Footer";

const LayoutMain = () => {

  return (
      <div data-theme="light">
      <div className='size-full'>
        <div className='flex overflow-hidden'>
          <Sidebar />
          <div className='main-wrapper overflow-auto'>
            <div className='flex h-full flex-col'>
            <Header />
            <Outlet />
            <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default LayoutMain;