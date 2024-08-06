import React, { useEffect } from "react";
import "./index.scss";
import "./active.scss";
import {
    CloseOutlined,
    DeleteOutlined,
    ShoppingCartOutlined,
    StarOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCourse,
    removeSavedCourse,
} from "../../redux/features/courseSlice";
import { toast } from "react-toastify";

function Saved_courses_page() {
    const dispatch = useDispatch();
    const account = useSelector((state) => state.user.account);
    const savedCourses = useSelector((state) => state.course.courses);
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

    useEffect(() => {
        if (account.id) {
            dispatch(fetchCourse(account.id));
        }
    }, [dispatch, account.id]);

    const userId = account.id;
    const handleRemoveSavedCourse = async (courseId) => {
        dispatch(removeSavedCourse({ courseId, userId })).then(() => {
            dispatch(fetchCourse(account.id));
            toast.success("Delete Successfully");
        });
    };

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
                        <div className="saved_courses_quantity">
                            {savedCourses.length} Courses
                        </div>
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
                            <div
                                className="saved_courses_media-item"
                                key={savedCourse.id}
                            >
                                <Link
                                    to={`/course_detail/${savedCourse.id}/course_detail_about`}
                                >
                                    <div className="saved_courses_media-thumbnail">
                                        <img
                                            src={savedCourse.video}
                                            alt=""
                                            className="thumbnail"
                                        />
                                        <div className="saved_courses_media-overlay"></div>
                                        <div className="saved_courses_media-star">
                                            <div className="star">
                                                <StarOutlined />
                                            </div>
                                            {savedCourse.ratting}
                                        </div>
                                        <div className="saved_courses_media-play"></div>
                                        <div className="saved_courses_media-seller">
                                            {savedCourse.level}
                                        </div>
                                        <div className="saved_courses_media-timer">
                                            {savedCourse.time} hours
                                        </div>
                                    </div>
                                </Link>

                                <div className="saved_courses_media-content">
                                    <div className="saved_courses_media-content-views">
                                        <div className="view-left">
                                            {savedCourse.views}
                                        </div>
                                        <div className="view-right">
                                            {savedCourse.date} days ago
                                        </div>
                                        <div className="dots">
                                            ⋮
                                            <div
                                                className="dots_popup"
                                                onClick={() =>
                                                    handleRemoveSavedCourse(
                                                        savedCourse.id
                                                    )
                                                }
                                            >
                                                <CloseOutlined className="closeIcon" />
                                                Remove
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/course_detail/${savedCourse.id}/course_detail_about`}
                                    >
                                        <div className="saved_courses_media-content-title">
                                            {savedCourse.titilecourse}
                                        </div>
                                    </Link>
                                    <div className="saved_courses_media-content-desc">
                                        {savedCourse.typecourse}
                                    </div>

                                    <div className="saved_courses_media-content-buy">
                                        <p className="author">
                                            By <Link>{savedCourse.author}</Link>{" "}
                                        </p>
                                        <div className="deal">
                                            <Link
                                                to={`/course_detail/${savedCourse.id}/course_detail_about`}
                                            >
                                                <button className="cart">
                                                    <ShoppingCartOutlined />
                                                </button>
                                            </Link>
                                            <div className="cost">
                                                ${savedCourse.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saved_courses_page;
