import { useSelector } from "react-redux";
import "./index.scss";
import { Progress, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { avatar1_SideBar } from "../../assets";
import { UilStar } from "@iconscout/react-unicons";

function ReviewsPageStudent() {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <div className={`ReviewsPageStudent ${isShowAll ? "active" : ""}`}>
      <div className="ReviewsPageStudent_Title_Left">
        <UilStar />
        <h2>All Reviews</h2>
      </div>
      <div className="course_detail_reviews_inner">
        <div className="course_detail_reviews-feedback">
          <h3 className="course_detail_reviews-feedback-title">
            My All Feedback
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
            <h3>My All Reviews</h3>
            <form action="" className="search">
              <input type="text" name="" id="" placeholder="Search review..." />
              <button>
                <SearchOutlined className="search-icon" />
              </button>
            </form>
          </div>
          <div className="course_detail_reviews-comments-box">
            <div className="course_detail_reviews-comments-item">
              <div className="comment_item-info">
                <img src={avatar1_SideBar} alt="" className="comment_avt" />
                <div className="comment_info">
                  <div className="comment_name">John Doe</div>
                  <div className="comment_time">2 hour ago</div>
                </div>
              </div>
              <Rate defaultValue={4.5} className="icon_star" />
              <div className="comment_content">
                Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Fusce lacinia, nunc sit amet tincidunt venenatis.
              </div>
            </div>
            <div className="course_detail_reviews-comments-item">
              <div className="comment_item-info">
                <img src={avatar1_SideBar} alt="" className="comment_avt" />
                <div className="comment_info">
                  <div className="comment_name">John Doe</div>
                  <div className="comment_time">2 hour ago</div>
                </div>
              </div>
              <Rate defaultValue={4.5} className="icon_star" />
              <div className="comment_content">
                Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Fusce lacinia, nunc sit amet tincidunt venenatis.
              </div>
            </div>
            <div className="course_detail_reviews-comments-item">
              <div className="comment_item-info">
                <img src={avatar1_SideBar} alt="" className="comment_avt" />
                <div className="comment_info">
                  <div className="comment_name">John Doe</div>
                  <div className="comment_time">2 hour ago</div>
                </div>
              </div>
              <Rate defaultValue={4.5} className="icon_star" />
              <div className="comment_content">
                Nam gravida elit a velit rutrum, eget dapibus ex elementum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Fusce lacinia, nunc sit amet tincidunt venenatis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsPageStudent;
