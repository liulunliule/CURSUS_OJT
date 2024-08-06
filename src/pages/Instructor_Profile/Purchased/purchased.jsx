import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserPosts,
  fetchUpdateCourse,
} from "../../../redux/features/myProfileSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Play from "../../../assets/img/play-button.png";
import Cart from "../../../assets/img/cart.png";
import Delete from "../../../assets/img/delete.png";
import "./index.scss";
import { toast } from "react-toastify";

const Purchased = () => {
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.myProfile.userPosts);
  const account = useSelector((state) => state.user.account);
  const userId = account.id || "";

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserPosts(userId));
    }
  }, [dispatch, userId]);

  const filteredUserPur = userPosts.filter(
    (post) => post.userId === userId && post.purchased === true
  );

  const handleUpdate = (id) => {
    const updatedData = { purchased: false };
    dispatch(fetchUpdateCourse({ id, updatedData }))
      .then((response) => {
        console.log("Update response:", response);
        toast.success("Course removed successfully!");
      })
      .catch((error) => {
        console.error("Update error:", error);
        toast.error("Failed to remove course. Please try again.");
      });
  };

  return (
    <div className="purchased_content">
      <div className="purchased_course_list">
        <h3 className="about_title_text">Purchased Courses</h3>
          {filteredUserPur.length > 0 ? (
            filteredUserPur.map((item) => (
              <div key={item.id} className="purchased_item">
                <div className="purchased_course_card">
                  <div className="purchased_course_image">
                    <img
                      src={item.video}
                      alt="Course Image"
                      className="purchased_course_card_left"
                    />
                    <div className="purchased_course_overlay">
                      <div className="purchased_badge_tag">Bestseller</div>
                      <div className="purchased_course_reviews">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#ffffff" }}
                          className="fa_star"
                        />
                        {item.ratting}
                      </div>
                      <span className="purchased_play_btn">
                        <img
                          src={Play}
                          className="purchased_play"
                          alt="purchased_play"
                        />
                      </span>
                      <div className="purchased_course_timer">
                        {item.time} hours
                      </div>
                    </div>
                  </div>
                  <div className="purchased-course-content">
                    <div className="purchased_more_dropdown"></div>
                    <div className="purchased_view_date">
                      <div className="purchased_view_date_ago">
                        <span className="view">{item.views}</span>
                        <span className="date">{item.date} days ago</span>
                      </div>
                      <div className="purchased_fa_EllipsisVertical">
                        <div className="fa_EllipsisVertical">
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            style={{ color: "#ccc" }}
                            className="fa_ellipsis_vertical"
                          />
                          <div className="discussion_dropdown_content">
                            <div className="courser_drop">
                              <span>
                                <i className="comment-alt-delete">
                                  <img
                                    src={Delete}
                                    alt=""
                                    className="icon_delete"
                                    onClick={() => handleUpdate(item.id)}
                                  />
                                </i>
                                Delete
                              </span>
                            </div>
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
                    <div className="purchased_badge">Purchased</div>
                    <div className="author_price">
                      By{" "}
                      <a href="#" className="author">
                        {item.author}
                      </a>
                      <button
                        className="purchased_add_to_cart_btn"
                        title="Add to Cart"
                      >
                        <img
                          src={Cart}
                          alt="Cart"
                          className="purchased_cart_image"
                        />
                      </button>
                      <div className="price">${item.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No purchased courses available</p>
          )}
      </div>
    </div>
  );
};

export default Purchased;
