import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { Progress, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { avatar1_SideBar } from "../../assets";
import { UilStar } from "@iconscout/react-unicons";
import { useEffect } from "react";
import { fetchReviewFeedbackData } from "../../redux/features/reviewfeedbackSlice";

function ReviewsPageInstructor() {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const dispatch = useDispatch();
  const userReviewFeedback = useSelector((state) => state.reviewFeedback.data);
  useEffect(() => {
    dispatch(fetchReviewFeedbackData());
  }, [dispatch]);
  return (
    <div className={`ReviewsPageInstructor ${isShowAll ? "active" : ""}`}>
      <div className="ReviewsPageInstructor_Title_Left">
        <UilStar />
        <h2>All Review</h2>
      </div>
      <div className="course_detail_reviews_inner">
        <div className="course_detail_reviews-feedback">
          <h3 className="course_detail_reviews-feedback-title">
            All Student Feedback
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
            <h3>All Reviews</h3>
            <form action="" className="search">
              <input type="text" name="" id="" placeholder="Search review..." />
              <button>
                <SearchOutlined className="search-icon" />
              </button>
            </form>
          </div>
          <div className="course_detail_reviews-comments-box">
            {userReviewFeedback &&
              userReviewFeedback.map((review) => (
                <div className="course_detail_reviews-comments-item">
                  <div className="comment_item-info">
                    <img src={review.Avartar} alt="" className="comment_avt" />
                    <div className="comment_info">
                      <div className="comment_name">{review.Name_User}</div>
                      <div className="comment_time">{review.Create_At}</div>
                    </div>
                  </div>
                  <Rate defaultValue={review.Rating} className="icon_star" />
                  <div className="comment_content">{review.Description}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsPageInstructor;
