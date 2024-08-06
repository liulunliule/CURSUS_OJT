import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    UilAngleLeft,
    UilAngleRight,
    UilApps,
    UilBookAlt,
} from "@iconscout/react-unicons";
import Achievement from "../../assets/img/achievement.svg";
import GraduationCap from "../../assets/img/graduation-cap.svg";
import OnlineCourse from "../../assets/img/online-course.svg";
import Knowledge from "../../assets/img/knowledge.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStudio } from "../../redux/features/myStudioSlice";

const Instructor_Studio_Dashboard = () => {
    const sliderRef = useRef(null);
    const newsSliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
    const dispatch = useDispatch();
    const userStudio = useSelector((state) => state.myStudio.userStudio);
    console.log("studio: ", userStudio);
    useEffect(() => {
        dispatch(fetchStudio());
    }, [dispatch]);

    const settings = {
        // dots: f,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current),
    };

    const newsSettings = {
        // dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentNewsSlide(current),
    };

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const nextNewsSlide = () => {
        if (newsSliderRef.current) {
            newsSliderRef.current.slickNext();
        }
    };

    const prevNewsSlide = () => {
        if (newsSliderRef.current) {
            newsSliderRef.current.slickPrev();
        }
    };

    return (
        <div
            className={`studio-dashboard-wrapper ${isShowAll ? "active" : ""}`}
        >
            {userStudio.map((userInfo) => (
                <div key={userInfo.id} className="sa4d25">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="studio-dashboard-title">
                                    <i className="uil uil-apps">
                                        <UilApps size="20" />
                                    </i>
                                    Instructor Dashboard
                                </h2>
                            </div>

                            <React.Fragment>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="studio-dashboard-card-dash">
                                        <div className="studio-dashboard-card-dash-left">
                                            <h5>Total Sales</h5>
                                            <h2>${userInfo.totalSales}</h2>
                                            <span className="studio-dashboard-card-1">
                                                New ${userInfo.newSales}
                                            </span>
                                        </div>
                                        <div className="studio-dashboard-card-dash-right">
                                            <img
                                                src={Achievement}
                                                alt="Achievement"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="studio-dashboard-card-dash">
                                        <div className="studio-dashboard-card-dash-left">
                                            <h5>Total Enroll</h5>
                                            <h2>{userInfo.totalEnroll}</h2>
                                            <span className="studio-dashboard-card-2">
                                                New {userInfo.newEnroll}
                                            </span>
                                        </div>
                                        <div className="studio-dashboard-card-dash-right">
                                            <img
                                                src={GraduationCap}
                                                alt="Graduation Cap"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="studio-dashboard-card-dash">
                                        <div className="studio-dashboard-card-dash-left">
                                            <h5>Total Courses</h5>
                                            <h2>{userInfo.totalCourses}</h2>
                                            <span className="studio-dashboard-card-3">
                                                New {userInfo.newCourses}
                                            </span>
                                        </div>
                                        <div className="studio-dashboard-card-dash-right">
                                            <img
                                                src={OnlineCourse}
                                                alt="Online Course"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="studio-dashboard-card-dash">
                                        <div className="studio-dashboard-card-dash-left">
                                            <h5>Total Students</h5>
                                            <h2>{userInfo.totalStudents}</h2>
                                            <span className="studio-dashboard-card-4">
                                                New {userInfo.newStudents}
                                            </span>
                                        </div>
                                        <div className="studio-dashboard-card-dash-right">
                                            <img
                                                src={Knowledge}
                                                alt="Knowledge"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>

                            <div className="col-md-12">
                                <div className="studio-dashboard-card-dash1">
                                    <div className="studio-dashboard-card-dash-left1">
                                        <i className="uil uil-book-alt">
                                            <UilBookAlt size="32" />
                                        </i>
                                        <h1>Jump Into Course Creation</h1>
                                    </div>
                                    <div className="studio-dashboard-card-dash-right1">
                                        <Link to="/thirdlayout/create_new_course">
                                            <button
                                                className="studio-dashboard-create-btn-dash"
                                                onClick={() => {
                                                    window.location.href =
                                                        "create_new_course";
                                                }}
                                            >
                                                Create Your Course
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="studio-dashboard-section studio-dashboard-mt-50">
                                    <h4 className="studio-dashboard-item-title">
                                        Latest Courses performance
                                    </h4>
                                    <Slider {...settings} ref={sliderRef}>
                                        {userInfo.latestCourses &&
                                            userInfo.latestCourses.map(
                                                (item) => (
                                                    <div
                                                        className="item"
                                                        key={item.id}
                                                    >
                                                        <div className="studio-dashboard-course-1">
                                                            <a
                                                                href="#"
                                                                className="studio-dashboard-course-img"
                                                            >
                                                                <img
                                                                    src={
                                                                        item.imageUrl
                                                                    }
                                                                    alt="Course Image"
                                                                />
                                                                <div className="course-overlay"></div>
                                                            </a>
                                                            <div className="studio-dashboard-course-content">
                                                                <div className="studio-dashboard-course-content-vdtodt">
                                                                    <span className="studio-dashboard-course-content-vdt14">
                                                                        {
                                                                            item.duration
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <a
                                                                    href="#"
                                                                    className="studio-dashboard-course-content-discription"
                                                                >
                                                                    {item.title}
                                                                </a>
                                                                <div className="studio-dashboard-view">
                                                                    <div className="studio-dashboard-course-content-left">
                                                                        View
                                                                    </div>
                                                                    <div className="studio-dashboard-course-content-right">
                                                                        {
                                                                            item.views
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="studio-dashboard-view">
                                                                    <div className="studio-dashboard-course-content-left">
                                                                        Purchased
                                                                    </div>
                                                                    <div className="studio-dashboard-course-content-right">
                                                                        {
                                                                            item.purchased
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="studio-dashboard-view">
                                                                    <div className="studio-dashboard-course-content-left">
                                                                        Total
                                                                        Like
                                                                    </div>
                                                                    <div className="studio-dashboard-course-content-right">
                                                                        {
                                                                            item.likes
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="studio-dashboard-item">
                                                                    <a
                                                                        href="#"
                                                                        className="studio-dashboard-50"
                                                                    >
                                                                        Go to
                                                                        course
                                                                        analytics
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        className="studio-dashboard-50"
                                                                    >
                                                                        See
                                                                        comments
                                                                        (
                                                                        {
                                                                            item.comments
                                                                        }
                                                                        )
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        className="studio-dashboard-50"
                                                                    >
                                                                        See
                                                                        Reviews
                                                                        (
                                                                        {
                                                                            item.reviews
                                                                        }
                                                                        )
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                    </Slider>
                                    <div className="studio-dashboard-owl-nav button_test">
                                        <button
                                            type="button"
                                            className={`studio-dashboard-owl-prev  button_test_prev ${
                                                currentSlide === 0
                                                    ? "disabled"
                                                    : ""
                                            }`}
                                            onClick={prevSlide}
                                        >
                                            <UilAngleLeft />
                                        </button>
                                        <button
                                            type="button"
                                            className={`studio-dashboard-owl-next  button_test_next ${
                                                currentSlide === 2
                                                    ? "disabled"
                                                    : ""
                                            }`}
                                            onClick={nextSlide}
                                        >
                                            <UilAngleRight />
                                        </button>
                                    </div>
                                    <div className="owl-dots disabled"></div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="studio-dashboard-section studio-dashboard-mt-50">
                                    <h4 className="studio-dashboard-item-title">
                                        News
                                    </h4>
                                    <Slider
                                        {...newsSettings}
                                        ref={newsSliderRef}
                                    >
                                        {userInfo.news &&
                                            userInfo.news.map((itemNews) => (
                                                <div
                                                    className="item"
                                                    key={itemNews.id}
                                                >
                                                    <div class="studio-dashboard-detail">
                                                        <div class="studio-dashboard-edututs-news studio-dashboard-owl-theme">
                                                            <div class="studio-dashboard-course-1">
                                                                <a
                                                                    href="#"
                                                                    className="studio-dashboard-course-img"
                                                                >
                                                                    <img
                                                                        src={
                                                                            itemNews.imageUrl
                                                                        }
                                                                        alt="Course Image"
                                                                    />
                                                                    <div className="course-overlay"></div>
                                                                </a>
                                                                <div class="studio-dashboard-course-content">
                                                                    <a
                                                                        href="#"
                                                                        class="studio-dashboard-course-content-discription studio-dashboard-mt-15"
                                                                    >
                                                                        {
                                                                            itemNews.title
                                                                        }
                                                                    </a>
                                                                    <p class="studio-dashboard-news-description">
                                                                        {
                                                                            itemNews.description
                                                                        }
                                                                    </p>
                                                                    <div class="studio-dashboard-item">
                                                                        <a
                                                                            href="#"
                                                                            class="studio-dashboard-50"
                                                                        >
                                                                            Learn
                                                                            More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </Slider>
                                    <div className="button-news">
                                        <button
                                            type="button"
                                            className={`button-prev-news ${
                                                currentNewsSlide === 0
                                                    ? "disabled"
                                                    : ""
                                            }`}
                                            onClick={prevNewsSlide}
                                        >
                                            <UilAngleLeft />
                                        </button>
                                        <button
                                            type="button"
                                            className={`button-next-news ${
                                                currentNewsSlide === 2
                                                    ? "disabled"
                                                    : ""
                                            }`}
                                            onClick={nextNewsSlide}
                                        >
                                            <UilAngleRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6">
                                <div class="studio-dashboard-section studio-dashboard-mt-50">
                                    <h4 class="studio-dashboard-item-title">
                                        Profile Analytics
                                    </h4>
                                    <div class="studio-dashboard-detail">
                                        <div class="studio-dashboard-course-1">
                                            <div class="studio-dashboard-course-content">
                                                {userInfo.profileAnalytics &&                                                  
                                                    userInfo.profileAnalytics.map(
                                                        (
                                                            itemProfileAnalytics,
                                                            index
                                                        ) => (
                                                            <div key={index}>
                                                                <h6 class="studio-dashboard-course-content-name">
                                                                    Current
                                                                    subscribers
                                                                </h6>
                                                                <h3 class="studio-dashboard-subcribe-title">
                                                                    {
                                                                        itemProfileAnalytics.currentSubscribers
                                                                    }
                                                                </h3>
                                                                <div class="studio-dashboard-view">
                                                                    <div class="studio-dashboard-course-content-left">
                                                                        View
                                                                    </div>
                                                                    <div class="studio-dashboard-course-content-right">
                                                                        {
                                                                            itemProfileAnalytics
                                                                                .views
                                                                                .count
                                                                        }
                                                                        <span class="studio-dashboard-course-content-analyics">
                                                                            <i class="uil uil-arrow-to-bottom"></i>
                                                                            {
                                                                                itemProfileAnalytics
                                                                                    .views
                                                                                    .percentageChange
                                                                            }
                                                                            %
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="studio-dashboard-view">
                                                                    <div class="studio-dashboard-course-content-left">
                                                                        Purchased
                                                                        <span class="studio-dashboard-per-text">
                                                                            (per
                                                                            hour)
                                                                        </span>
                                                                    </div>
                                                                    <div class="studio-dashboard-course-content-right">
                                                                        {
                                                                            itemProfileAnalytics
                                                                                .purchased
                                                                                .count
                                                                        }
                                                                        <span class="studio-dashboard-course-content-analyics">
                                                                            <i class="uil uil-top-arrow-from-top"></i>
                                                                            {
                                                                                itemProfileAnalytics
                                                                                    .purchased
                                                                                    .percentageChange
                                                                            }
                                                                            %
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="studio-dashboard-view">
                                                                    <div class="studio-dashboard-course-content-left">
                                                                        Enroll
                                                                        <span class="studio-dashboard-per-text">
                                                                            (per
                                                                            hour)
                                                                        </span>
                                                                    </div>
                                                                    <div class="studio-dashboard-course-content-right">
                                                                        {
                                                                            itemProfileAnalytics
                                                                                .enroll
                                                                                .count
                                                                        }
                                                                        <span class="studio-dashboard-course-content-analyics">
                                                                            <i class="uil uil-top-arrow-from-top"></i>
                                                                            {
                                                                                itemProfileAnalytics
                                                                                    .enroll
                                                                                    .percentageChange
                                                                            }
                                                                            %
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div class="studio-dashboard-item">
                                                                    <a
                                                                        href="#"
                                                                        class="studio-dashboard-50"
                                                                    >
                                                                        Go to
                                                                        profile
                                                                        analytics
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="studio-dashboard-section studio-dashboard-mt-50">
                                    <h4 class="studio-dashboard-item-title">
                                        Submit Courses
                                    </h4>
                                    {userInfo.submittedCourses &&
                                        userInfo.submittedCourses.map(
                                            (itemsubmittedCourses) => (
                                                <div
                                                    class="studio-dashboard-detail"
                                                    key={
                                                        itemsubmittedCourses.id
                                                    }
                                                >
                                                    <div class="studio-dashboard-course-1">
                                                        <div class="studio-dashboard-course-content">
                                                            <div class="studio-dashboard-upcming-card">
                                                                <a
                                                                    href="#"
                                                                    class="studio-dashboard-course-content-discription"
                                                                >
                                                                    {
                                                                        itemsubmittedCourses.title
                                                                    }
                                                                    <span class="studio-dashboard-Pending">
                                                                        {
                                                                            itemsubmittedCourses.status
                                                                        }
                                                                    </span>
                                                                </a>
                                                                <p class="studio-dashboard-submit-course">
                                                                    Submitted
                                                                    <span>
                                                                        {
                                                                            itemsubmittedCourses.submittedDate
                                                                        }
                                                                    </span>
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    class="studio-dashboard-delete-link"
                                                                >
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                </div>
                                <div class="studio-dashboard-section studio-dashboard-mt-50 studio-dashboard-cursus">
                                    <h4 class="studio-dashboard-item-title">
                                        What's new in Cursus
                                    </h4>
                                    {userInfo.newUpdates &&
                                        userInfo.newUpdates.map(
                                            (itemNewUpdates) => (
                                                <div class="studio-dashboard-detail">
                                                    <div class="studio-dashboard-course-1">
                                                        <div class="studio-dashboard-course-content">
                                                            <a
                                                                href="#"
                                                                class="studio-dashboard-new-links"
                                                            >
                                                                {
                                                                    itemNewUpdates.title
                                                                }
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Instructor_Studio_Dashboard;
