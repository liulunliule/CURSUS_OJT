import React from "react";
import Header_policy from "../Header_privacy";
import { Outlet } from "react-router-dom";
import FooterHomePage from "../Footer";
import {SideBarInstructorDashboardDemo} from "../Sidebar";
function SecondaryLayout() {
    return (
        <div>
            <Header_policy />
            <Outlet />
            <FooterHomePage />
        </div>
    );
}

export default SecondaryLayout;
