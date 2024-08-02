import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/scss/bootstrap.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Setting from "../../assets/img/settings.png";
import Course from "./Course/courser";
import About from "./About/about";
import Discussion from "./Discussion/discussion";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";
import {
    fetchUserReviews,
    fetchInstructor,
    fetchUsers,
} from "../../redux/features/myProfileSlice";
import { useParams } from "react-router-dom";
import { instructor } from "../../assets";

const Instructor_Profile = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("nav-about");
    const userReviews = useSelector((state) => state.myProfile.userReviews);
    const isShowAll = useSelector((state) => state.savedCourse?.isShowAll);
    const account = useSelector((state) => state.user.account);
    const userPosts = useSelector((state) => state.myProfile.userPosts);
    const Instructor = useSelector((state) => state.myProfile.all_instructor);
    const subscriptions = useSelector((state) => state.myProfile.subscriptions);
    const location = useLocation();
    console.log("hha", location.state);
    const userId = account.id || "";
    const { id } = useParams();
    const instrucInfor = Instructor.filter((post) => post.id === id);
    const channel = subscriptions.filter(
        (post) => post.userId === userId && post.subscriptionsed === true
    );
    console.log("listSubscription: ", channel);
    console.log("Check out: ", account);

    useEffect(() => {
        dispatch(fetchUserReviews())
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching instructors:", error);
                setLoading(false);
            });
    }, [dispatch, id]);

    console.log("ìndfgbjbh", Instructor);

    if (loading) {
        return (
            <div
                className="col-md-12 d-flex justify-content-center align-items-center"
                style={{
                    width: "100%",
                    height: "100vh",
                    backdropFilter: "blur(3px)",
                    position: "absolute",
                    zIndex: "3000",
                }}
            >
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const countCourse = userPosts.filter((post) => post.userId === userId);
    const countSubscription = subscriptions.filter(
        (post) => post.userId === userId && post.subscriptionsed === true
    );
    const courseCount = countCourse.length;
    const SubscriptionCount = countSubscription.length;

    return (
        <div className={`instructor-container ${isShowAll ? "active" : ""}`}>
            <div className="container-fluid">
                <div className="row instructor_container_row">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <div className="profile">
                            <div className="row instructor_container_row">
                                {instrucInfor.map((subscription) => (
                                    <div
                                        className="profile-left col-lg-6"
                                        key={subscription.id}
                                    >
                                        <div className="user_infor">
                                            <img
                                                src={subscription.avatar}
                                                alt=""
                                                className="userInfo_avatar"
                                            />
                                            <div className="userInfor">
                                                <div className="userInfor_instructor">
                                                    <h2>
                                                        {subscription.userName}
                                                    </h2>
                                                    <span>
                                                        {subscription.major}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="userInfor_join">
                                            <ul>
                                                <li>
                                                    <div className="userInfor_join_group">
                                                        <div className="userInfor_join_title">
                                                            Enroll Students
                                                        </div>
                                                        <div className="userInfor_join_parameter">
                                                            {
                                                                subscription.enrollStudents
                                                            }
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="userInfor_join_group">
                                                        <div className="userInfor_join_title">
                                                            Courses
                                                        </div>
                                                        <div className="userInfor_join_parameter">
                                                            {
                                                                subscription.enrolledCourses
                                                            }
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="userInfor_join_group">
                                                        <div className="userInfor_join_title">
                                                            Reviews
                                                        </div>
                                                        <div className="userInfor_join_parameter">
                                                            {userReviews.length}
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="userInfor_join_group">
                                                        <div className="userInfor_join_title">
                                                            Subscriptions
                                                        </div>
                                                        <div className="userInfor_join_parameter">
                                                            {SubscriptionCount}
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                                
                                <div className="profile_right col-lg-6">
                                    <Link
                                        className="profile_setting"
                                        to="/setting_page"
                                    >
                                        <span>
                                            <img
                                                src={Setting}
                                                alt="Setting"
                                                className="setting_icon"
                                            />
                                        </span>
                                        Setting
                                    </Link>
                                    <div className="profile_connect">
                                        <ul className="tutor_social_links">
                                            <li>
                                                <a href="#" className="fb">
                                                    <FontAwesomeIcon
                                                        icon={faFacebookF}
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="tw">
                                                    <FontAwesomeIcon
                                                        icon={faTwitter}
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="ln">
                                                    <FontAwesomeIcon
                                                        icon={faLinkedinIn}
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="yu">
                                                    <FontAwesomeIcon
                                                        icon={faYoutube}
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="profile_button_right">
                                        <li>
                                            <button
                                                className="studio_link_btn btn_500"
                                                onClick={() =>
                                                    (window.location.href =
                                                        "/fourlayout/instructor_studio_dashboard")
                                                }
                                            >
                                                Cursus Studio
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="studio_link_btn-edit btn_500"
                                                onClick={() =>
                                                    (window.location.href =
                                                        "/setting_page/account_tab")
                                                }
                                            >
                                                Edit
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Tab navigation */}
                        <div className="course_tabs_container">
                            <div className="row instructor_container_row">
                                <div className="col-lg-12">
                                    <div className="course_tabs">
                                        <nav>
                                            <div
                                                className="nav nav-tabs tab_crse"
                                                id="nav-tab"
                                                role="tablist"
                                            >
                                                <a
                                                    className={`nav-item nav-link ${
                                                        activeTab ===
                                                        "nav-about"
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    id="nav-about-tab"
                                                    data-bs-toggle="tab"
                                                    href="#nav-about"
                                                    role="tab"
                                                    aria-selected={
                                                        activeTab ===
                                                        "nav-about"
                                                    }
                                                    onClick={() =>
                                                        setActiveTab(
                                                            "nav-about"
                                                        )
                                                    }
                                                >
                                                    About
                                                </a>
                                                <a
                                                    className={`nav-item nav-link ${
                                                        activeTab ===
                                                        "nav-courses"
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    id="nav-courses-tab"
                                                    data-bs-toggle="tab"
                                                    href="#nav-courses"
                                                    role="tab"
                                                    aria-selected={
                                                        activeTab ===
                                                        "nav-courses"
                                                    }
                                                    onClick={() =>
                                                        setActiveTab(
                                                            "nav-courses"
                                                        )
                                                    }
                                                >
                                                    Courses
                                                </a>
                                                <a
                                                    className={`nav-item nav-link ${
                                                        activeTab ===
                                                        "nav-reviews"
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    id="nav-reviews-tab"
                                                    data-bs-toggle="tab"
                                                    href="#nav-reviews"
                                                    role="tab"
                                                    aria-selected={
                                                        activeTab ===
                                                        "nav-reviews"
                                                    }
                                                    onClick={() =>
                                                        setActiveTab(
                                                            "nav-reviews"
                                                        )
                                                    }
                                                >
                                                    Discussion
                                                </a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="instructor_container_tabs row instructor_container_row">
                            <div className="col-lg-12">
                                <div className="course_tab_content">
                                    <div
                                        className="tab-content"
                                        id="nav-tabContent"
                                    >
                                        {/* About tab */}
                                        <div
                                            className={`tab-pane fade ${
                                                activeTab === "nav-about"
                                                    ? "show active"
                                                    : ""
                                            }`}
                                            id="nav-about"
                                            role="tabpanel"
                                            aria-labelledby="nav-about-tab"
                                        >
                                            <About />
                                        </div>
                                        {/* Courses tab */}
                                        <div
                                            id="nav-courses"
                                            className={`tab-pane fade ${
                                                activeTab === "nav-courses"
                                                    ? "show active"
                                                    : ""
                                            }`}
                                        >
                                            <h3 className="about-title-text">
                                                My Course
                                            </h3>
                                            <div className="row instructor_container_row">
                                                <Course />
                                            </div>
                                        </div>

                                        {/* Discussion tab */}
                                        <div
                                            className={`tab-pane fade ${
                                                activeTab === "nav-reviews"
                                                    ? "show active"
                                                    : ""
                                            }`}
                                            id="nav-reviews"
                                            role="tabpanel"
                                            aria-labelledby="nav-reviews-tab"
                                        >
                                            <Discussion />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor_Profile;
