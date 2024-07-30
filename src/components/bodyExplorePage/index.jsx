import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import thumbnailCourse from "../../assets/img/thumbnail_live.jpg";
import thumbnailCourse2 from "../../assets/img/thumbnail_live2.jpg";
import thumbnailCourse3 from "../../assets/img/thumbnail_live3.jpg";
import thumbnailCourse4 from "../../assets/img/thumbnail_live4.jpg";
import menu_course from "../../assets/img/menu_course.png";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../../redux/features/courseSlice";
import { fetchUserPosts } from "../../redux/features/myProfileSlice";
import {
  addCartData,
  fetchShoppingCart,
} from "../../redux/features/shoppingCartSlice";
import { message } from "antd";

function BodyExplorePage() {
  const [isClickable, setIsClickable] = useState(true);
  const navigate = useNavigate();
  const account = useSelector((state) => state.user.account);
  const userId = account.id || "";
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.myProfile.userPosts);
  useEffect(() => {
    dispatch(fetchUserPosts());
  }, [dispatch]);
  const handleAddCart = async (course) => {
    if (!isClickable) return;
    const { video, titilecourse, typecourse, author, price } = course;
    try {
      await dispatch(
        addCartData({ video, titilecourse, typecourse, author, price, userId })
      ).unwrap();
      dispatch(fetchShoppingCart(userId));
      message.success("Add Cart successfully");
      setIsClickable(false);
      navigate("/secondLayout/Shopping_cart");
    } catch (error) {
      message.error("Failed to Add Cart");
    }
  };

  return (
    <div className="bodyExplore">
      {userPosts &&
        userPosts.map((savedCourse) => (
          <div className="explore_page__wrapper_courseAll">
            <div className="showInformationOfCourse">
              <div></div>
              <div className="thumbnail_course_information">
                <Link>
                  <img
                    className="thumbnailCourse"
                    src={savedCourse.video}
                    alt=""
                  />
                </Link>
                <div className="membrane_thumbnail"></div>
                <div className="other_thumbnail">
                  <div className="voteOfThumbnail">
                    <StarOutlined className="voteOfThumbnail_star" />
                    <span className="voteOfThumbnail_number">
                      {savedCourse.ratting}
                    </span>
                  </div>
                  <div className="other_thumbnail_badge_seller_sqr"></div>
                  <div className="other_thumbnail_badge_seller">
                    <span className="other_thumbnail_badge_seller_title">
                      BESTSELLER
                    </span>
                  </div>
                  <span className="other_thumbnail_crse_timer">
                    {savedCourse.time} hour
                  </span>
                </div>
              </div>
              <div className="viewsAndPostDate">
                <div className="viewsAndPostDate_real">
                  <span>{savedCourse.views}</span>
                  <span>•</span>
                  <span> 15 days ago</span>
                </div>
                <div className="viewsAndPostDate_menu">
                  <img className="menu_course" src={menu_course} alt="" />
                </div>
              </div>
              <div className="title_course">
                <Link
                  to="/course_detail/course_detail_about"
                  className="titleOfCourse"
                >
                  {savedCourse.titilecourse}
                </Link>
              </div>
              <div className="fieldOfCourse">
                <Link className="field_course">{savedCourse.typecourse}</Link>
              </div>
              <div className="other_course">
                <p className="other_By">
                  By
                  <Link className="other_courseName">
                    {" "}
                    {savedCourse.author}
                  </Link>
                </p>
                <div className="price_course">
                  <Link>
                    <ShoppingCartOutlined
                      className="cart_course"
                      onClick={() => handleAddCart(savedCourse)}
                    />
                  </Link>
                  <div>${savedCourse.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BodyExplorePage;
