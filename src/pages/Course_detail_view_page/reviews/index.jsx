import React, { useEffect, useState } from "react";
import "./index.scss";
import { Progress, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { avatar1_SideBar } from "../../../assets";
import axios from "axios";
function Course_detail_reviews() {
    const [reviews, setReviews] = useState([]);
    const fetchReview = async () => {
        const response = await axios.get(
            "https://6696231a0312447373c1386e.mockapi.io/reviews"
        );

        setReviews(response.data);
    };

    useEffect(() => {
        fetchReview();
    }, []);
    return (
        <div className="course_detail_reviews">
            <div className="course_detail_reviews_inner">
                <div className="course_detail_reviews-feedback">
                    <h3 className="course_detail_reviews-feedback-title">
                        Student Feedback
                    </h3>
                    <div className="total_rating">
                        <div className="total_rate">4.6</div>
                        <div className="total_stars">
                            <Rate defaultValue={4.5} className="icon_star" />
                        </div>
                        <div className="total_label">Course Rating</div>
                    </div>

                    <div className="total_progress">
                        <div className="progress_item">
                            <Progress percent={70} size={[300, 20]} />
                            <Rate defaultValue={4.5} className="icon_star" />
                        </div>
                        <div className="progress_item">
                            <Progress percent={50} size={[300, 20]} />
                            <Rate defaultValue={3.5} className="icon_star" />
                        </div>
                        <div className="progress_item">
                            <Progress percent={30} size={[300, 20]} />
                            <Rate defaultValue={2.5} className="icon_star" />
                        </div>
                        <div className="progress_item">
                            <Progress percent={20} size={[300, 20]} />
                            <Rate defaultValue={1.5} className="icon_star" />
                        </div>
                        <div className="progress_item">
                            <Progress percent={10} size={[300, 20]} />
                            <Rate defaultValue={1} className="icon_star" />
                        </div>
                    </div>
                </div>
                <div className="course_detail_reviews-comments">
                    <div className="course_detail_reviews-comments-search">
                        <h3>Review</h3>
                        <form action="" className="search">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Search review..."
                            />
                            <button>
                                <SearchOutlined className="search-icon" />
                            </button>
                        </form>
                    </div>
                    <div className="course_detail_reviews-comments-box">
                        {reviews.map((review) => (
                            <div className="course_detail_reviews-comments-item">
                                <div className="comment_item-info">
                                    <img
                                        src={review.userImage}
                                        alt=""
                                        className="comment_avt"
                                    />
                                    <div className="comment_info">
                                        <div className="comment_name">
                                            {review.user}
                                        </div>
                                        <div className="comment_time">
                                            {review.time}
                                        </div>
                                    </div>
                                </div>
                                <Rate
                                    defaultValue={4.5}
                                    className="icon_star"
                                />
                                <div className="comment_content">
                                    {review.content}
                                </div>
                                <div className="comment_report">
                                    <p>Was this review helpful?</p>
                                    <input
                                        type="radio"
                                        name="comment_report"
                                        id="yes"
                                    />
                                    <label htmlFor="yes">Yes</label>
                                    <input
                                        type="radio"
                                        name="comment_report"
                                        id="no"
                                    />
                                    <label htmlFor="no">No</label>
                                    <span>Report</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course_detail_reviews;
