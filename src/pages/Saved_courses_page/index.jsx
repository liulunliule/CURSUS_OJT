import React, { useEffect, useState } from "react";
import "./index.scss";
import "./active.scss";
import {
    CloseOutlined,
    DeleteOutlined,
    PlayCircleOutlined,
    ShoppingCartOutlined,
    StarOutlined,
} from "@ant-design/icons";
import { thumbnail } from "../../assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowAll } from "../../redux/features/savedCourseSlice";
import { fetchCourse } from "../../redux/features/courseSlice";

function Saved_courses_page() {
    const dispatch = useDispatch();
    const savedCourses = useSelector((state) => state.course.courses);
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

    useEffect(() => {
        dispatch(fetchCourse());
    }, []);

    return (
        <div className={`saved_courses ${isShowAll ? "active" : ""}`}>
            <div className="saved_courses_inner">
                <div className="saved_courses_cta">
                    <div className="saved_courses_cta-title">
                        <p className="saved_courses_cta-title-left">
                            Saved Courses
                        </p>
                        <p className="saved_courses_cta-title-right">
                            Remove All
                        </p>
                    </div>
                    <div className="saved_courses_line"></div>
                    <div className="saved_courses_cta-desc">
                        <div className="saved_courses_quantity">4 Courses</div>
                        <button className="saved_courses_cta-desc-btn">
                            <div className="saved_courses_cta-icon">
                                <DeleteOutlined />
                            </div>
                            Remove Saved Courses
                        </button>
                    </div>
                </div>
                <div className="saved_courses_media">
                    <p className="saved_courses_media-title">Saved Courses</p>
                    <div className="saved_courses_media-list">
                        {savedCourses.map((savedCourse) => (
                            <Link to="/course_detail/course_detail_about">
                                <div className="saved_courses_media-item">
                                    <div className="saved_courses_media-thumbnail">
                                        <img
                                            src={thumbnail}
                                            alt=""
                                            className="thumbnail"
                                        />
                                        <div className="saved_courses_media-overlay"></div>
                                        <div className="saved_courses_media-star">
                                            <div className="star">
                                                <StarOutlined />
                                            </div>
                                            4.5
                                        </div>
                                        <div className="saved_courses_media-play"></div>
                                        <div className="saved_courses_media-seller">
                                            BESTSELLER
                                        </div>
                                        <div className="saved_courses_media-timer">
                                            25 hours
                                        </div>
                                    </div>
                                    <div className="saved_courses_media-content">
                                        <div className="saved_courses_media-content-views">
                                            <div className="view-left">
                                                109k views
                                            </div>
                                            <div className="view-right">
                                                15 days ago
                                            </div>
                                            <div class="dots">
                                                ⋮
                                                <div className="dots_popup">
                                                    {" "}
                                                    <CloseOutlined className="closeIcon" />
                                                    Remove
                                                </div>
                                            </div>
                                        </div>
                                        <div className="saved_courses_media-content-title">
                                            {savedCourse.name}
                                        </div>
                                        <div className="saved_courses_media-content-desc">
                                            {savedCourse.category}
                                        </div>

                                        <div className="saved_courses_media-content-buy">
                                            <p className="author">
                                                By{" "}
                                                <Link>
                                                    {savedCourse.instructorName}
                                                </Link>{" "}
                                            </p>
                                            <div className="deal">
                                                <button className="cart">
                                                    <ShoppingCartOutlined />
                                                </button>
                                                <div className="cost">
                                                    {savedCourse.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saved_courses_page;
