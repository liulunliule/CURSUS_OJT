import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../../redux/features/myProfileSlice"; // Điều chỉnh đường dẫn nếu cần
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Play from "../../../assets/img/play-button.png";
import Cart from "../../../assets/img/cart.png";
import Edit from "../../../assets/img/edit-text.png";
import Share from "../../../assets/img/share.png";
import "./index.scss";
const Course = () => {
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.myProfile.userPosts);

  useEffect(() => {
    dispatch(fetchUserPosts());
  }, [dispatch]);
  if (!Array.isArray(userPosts)) {
    return <div>No courses available.</div>;
  }
  return (
    <>
      {userPosts.map((item) => (
        <div key={item.id} className="course_tab col-lg-3 col-md-4">
          <div className="course_card">
            <a href="course_detail_view.html" className="course_img">
              <img
                src={item.video}
                alt="Course Image"
                className="course_video"
              ></img>
              <div className="course_overlay">
                <div className="badge">Bestseller</div>
                <div className="course_reviews">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#ffffff" }}
                    className="fa_star"
                  />
                  4.5
                </div>
                <span className="play_btn">
                  <img src={Play} className="play" alt="icon-play"></img>
                </span>
                <div className="course_timer">{item.time} hours</div>
              </div>
            </a>

            <div className="course_content">
              <div className="view_date">
                <div className="course_view_date_ago">
                  <span className="view">{item.views}</span>
                  <span className="date">{item.date} days ago</span>
                </div>
                <div className="fa_EllipsisVertical">
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    style={{ color: "#ccc" }}
                    className="fa_ellipsis_vertical"
                  />
                  <div className="discussion_dropdown_content">
                    <div className="courser_drop">
                      <span>
                        <i className="comment-alt-edit">
                          {" "}
                          <img src={Share} alt="" className="icon_edit" />
                        </i>
                        Share
                      </span>
                      <span>
                        <i className="comment-alt-delete">
                          {" "}
                          <img src={Edit} alt="" className="icon_delete" />
                        </i>
                        Edit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="course_detail_view.html" className="course_title">
                <strong>{item.titilecourse}</strong>
              </a>
              <a href="#" className="course_category">
                {item.typecourse}
              </a>
              <div className="author_price">
                By{" "}
                <a href="#" className="author">
                  {item.author}
                </a>
                <div className="course_add_to_cart_btn" title="Add to Cart">
                  <img src={Cart} alt="Cart" className="cart_image" />
                </div>
                <div className="price">${item.price}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Course;
