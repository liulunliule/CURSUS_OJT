import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { avatar1_SideBar, thumbnail } from "../../assets";
import {
    DislikeOutlined,
    EyeOutlined,
    FlagOutlined,
    HeartOutlined,
    LikeOutlined,
    ShareAltOutlined,
    SmileOutlined,
    StarOutlined,
    WechatWorkOutlined,
} from "@ant-design/icons";
import VideoModal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetail } from "../../redux/features/courseSlice";
function Course_detail() {
    const params = useParams();
    const courseDetailId = params.id;

    const dispatch = useDispatch();
    const courseDetail = useSelector((state) => state.course.courseDetail);

    useEffect(() => {
        dispatch(fetchCourseDetail(courseDetailId));
    }, [courseDetailId, dispatch]);

    const [openModal, setOpenModal] = useState(false);

    const handelOpenModal = () => {
        setOpenModal(true);
    };

    const handelCloseModal = () => {
        setOpenModal(false);
    };

    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

    return (
        <div className={`course_detail ${isShowAll ? "active" : ""}`}>
            <div className="course_detail_inner">
                <div className="course_detail-hero">
                    <div className="course_detail-hero-media">
                        <div
                            className="course_detail-video"
                            onClick={handelOpenModal}
                        >
                            <Link className="course_detail-video-link">
                                <img
                                    src={courseDetail.video}
                                    alt=""
                                    className="video"
                                />
                            </Link>
                            <div className="course_detail-video-overlay"></div>
                            <div className="course_detail-video-seller">
                                Bestseller
                            </div>
                            <div className="course_detail-video-play"></div>
                            <div className="course_detail-video-preview">
                                Preview this course
                            </div>
                        </div>

                        <VideoModal
                            isOpen={openModal}
                            onCancel={handelCloseModal}
                        >
                            <iframe
                                width="798"
                                height="375"
                                src="https://www.youtube.com/embed/Ohe_JzKksvA"
                                title='What is a "Good Font"?'
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </VideoModal>

                        <div className="course_detail-emotion">
                            <div className="course_detail-emotion-like">
                                <HeartOutlined className="heart" /> Save
                            </div>
                            <div className="course_detail-emotion-report">
                                <FlagOutlined className="flag" /> Report abuse
                            </div>
                        </div>
                    </div>

                    <div className="course_detail-hero-content">
                        <h2 className="course_detail-hero-content-title">
                            {courseDetail.titilecourse}
                        </h2>
                        <p className="course_detail-hero-content-desc">
                            {courseDetail.typecourse}
                        </p>
                        <div className="course_detail-hero-content-rating">
                            <div className="star">
                                <StarOutlined className="starOutlined" />{" "}
                                {courseDetail.ratting}
                            </div>
                            <div className="ratings">(81,665 ratings)</div>
                        </div>
                        <div className="student_quantity">
                            {courseDetail.views}
                        </div>
                        <div className="subject">
                            <div className="english">
                                <WechatWorkOutlined className="english_icon" />{" "}
                                English
                            </div>
                            <div className="more">
                                <SmileOutlined className="more_icon" />
                                {courseDetail.author}
                            </div>
                        </div>
                        <div className="date">
                            Last updated : {courseDetail.date} day ago{" "}
                        </div>

                        <div className="course_detail-hero-content-cta">
                            <button className="addToCart">Add to Cart</button>
                            <Link to="/secondLayout/checkout_page">
                                <button className="buyNow">Buy Now</button>
                            </Link>
                        </div>
                        <div className="course_detail-hero-content-end">
                            30-Day Money-Back Guarantee
                        </div>
                    </div>
                </div>

                <div className="course_detail-toolbar">
                    <div className="course_detail-info">
                        <img src={avatar1_SideBar} alt="" className="avatar" />
                        <div className="info_content">
                            <div className="info_name">
                                {courseDetail.author}
                            </div>
                            <button className="info_btn">Subscribe</button>
                        </div>
                    </div>

                    <div className="course_detail-follow">
                        <div className="course_detail-followers">
                            <EyeOutlined className="followers_icon" /> 1452
                        </div>
                        <div className="course_detail-followers">
                            <LikeOutlined className="followers_icon" /> 100
                        </div>
                        <div className="course_detail-followers">
                            <DislikeOutlined className="followers_icon" /> 20
                        </div>
                        <div className="course_detail-followers">
                            <ShareAltOutlined className="followers_icon" /> 9
                        </div>
                    </div>
                </div>

                <div className="course_detail-main">
                    <div className="course_detail-main-link">
                        <NavLink
                            to={`/course_detail/${courseDetailId}/course_detail_about`}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to={`/course_detail/${courseDetailId}/course_detail_course-content`}
                        >
                            Course Content
                        </NavLink>
                        <NavLink
                            to={`/course_detail/${courseDetailId}/course_detail_reviews`}
                        >
                            Reviews
                        </NavLink>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Course_detail;
