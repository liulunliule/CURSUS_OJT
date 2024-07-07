import React from "react";
import "./index.scss";
import { BookOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faBullhorn,
    faDownload,
    faTag,
    faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Course_page() {
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
    return (
        <div className={`course_page ${isShowAll ? "active" : ""}`}>
            <div className="course_page_hero">
                <h2 className="course_page_hero-title">
                    <FontAwesomeIcon icon={faBook} /> Courses
                </h2>
                <div className="course_page_hero-content">
                    <h1>
                        <FontAwesomeIcon icon={faBook} size="lg" />
                        Jump Into Course Creation
                    </h1>
                    <Link to="/thirdlayout/create_new_course">
                    <button className="course_page_hero-btn">
                        Create Your Course
                    </button>
                    </Link>
                </div>
            </div>

            <div className="course_page_cta">
                <div className="course_page_cta-list">
                    <NavLink
                        to="/thirdlayout/course_page/my_courses"
                        className="course_page_cta-item"
                    >
                        <FontAwesomeIcon
                            icon={faBook}
                            className="course-page_icon"
                        />{" "}
                        My Courses
                    </NavLink>

                    <NavLink
                        to="/thirdlayout/course_page/my_purchases"
                        className="course_page_cta-item"
                    >
                        <FontAwesomeIcon
                            icon={faDownload}
                            className="course-page_icon"
                        />
                        My Purchases
                    </NavLink>

                    <NavLink
                        to="/thirdlayout/course_page/upcoming_course"
                        className="course_page_cta-item"
                    >
                        <FontAwesomeIcon
                            icon={faUpload}
                            className="course-page_icon"
                        />
                        Upcoming Courses
                    </NavLink>

                    <NavLink
                        to="/thirdlayout/course_page/discounts"
                        className="course_page_cta-item"
                    >
                        <FontAwesomeIcon
                            icon={faTag}
                            className="course-page_icon"
                        />
                        Discounts
                    </NavLink>

                    <NavLink
                        to="/thirdlayout/course_page/promotion"
                        className="course_page_cta-item"
                    >
                        <FontAwesomeIcon
                            icon={faBullhorn}
                            className="course-page_icon"
                        />
                        Promotion
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Course_page;
