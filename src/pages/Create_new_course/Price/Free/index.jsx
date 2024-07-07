import React from "react";
import "./index.scss";
import { Switch } from "antd";
function Free_page() {
    return (
        <div className="free_page">
            <div className="free_page_switch-btn">
                <Switch style={{ marginRight: "10px" }} />
                Require Log in
            </div>

            <div className="free_page_switch-btn">
                <Switch style={{ marginRight: "10px" }} />
                Require Enroll
            </div>

            <p className="free_page-content">
                If the course is free, if student require to enroll your course,
                if not required enroll, if students required sign in to your
                website to take this course.
            </p>
        </div>
    );
}

export default Free_page;
