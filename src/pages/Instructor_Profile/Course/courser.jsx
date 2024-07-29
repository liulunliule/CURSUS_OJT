import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../../redux/features/myProfileSlice"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Play from "../../../assets/img/play-button.png";
import Cart from "../../../assets/img/cart.png";
import "./index.scss";

const Course = () => {
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.myProfile.userPosts);
  const account = useSelector((state) => state.user.account);
  const userId = account.id || "";

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserPosts(userId));
    }
  }, [dispatch, userId]);

  const filteredUserPosts = userPosts.filter((post) => post.userId === userId);

  return (
    <>
      {filteredUserPosts.map((item) => (
        <div key={item.id} className="course_tab col-lg-3 col-md-4">
          <div className="course_card">
            <a href="course_detail_view.html" className="course_img">
              <img
                src={item.video}
                alt="Course Image"
                className="course_video"
              />
              <div className="course_overlay">
                <div className="badge">{item.level}</div>
                <div className="course_reviews">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#ffffff" }}
                    className="fa_star"
                  />
                  {item.ratting}
                </div>
                <span className="play_btn">
                  <img src={Play} className="play" alt="icon-play" />
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
