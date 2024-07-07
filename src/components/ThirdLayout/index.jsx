import React from "react";
import Header from "../Header2";
import Footer from "../Footer2";
import { Outlet } from "react-router-dom";
import { SideBarInstructorDashboardDemo } from "../Sidebar";

function Layouts() {
  return (
    <div>
      <Header />
      <SideBarInstructorDashboardDemo />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layouts;
