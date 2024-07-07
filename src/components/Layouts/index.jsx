import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import SidebarFrontend from "../Sidebar";

function Layouts() {
    return (
        <div>
            <Header />
            <SidebarFrontend />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layouts;
