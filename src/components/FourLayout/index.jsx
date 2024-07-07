import React from "react";
import Header from "../Header";
import Footer from "../Footer2";
import { Outlet } from "react-router-dom";
import { SideBarStudentDashboardDemo } from "../Sidebar";

function Layouts() {
  return (
    <div>
      <Header />
      <SideBarStudentDashboardDemo />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layouts;
