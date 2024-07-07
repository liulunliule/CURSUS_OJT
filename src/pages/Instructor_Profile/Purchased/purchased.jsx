import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Play from "../../../assets/img/play-button.png";
import Cart from "../../../assets/img/cart.png";
import Down from "../../../assets/img/download.png";
import Delete from "../../../assets/img/delete.png";
const Purchased = ({ posts }) => {
  return (
    <div className="purchased_content">
      <div className="purchased_course_list">
        <h3 className="about_title_text">Purchased Courses</h3>
        {posts.map((item) => (
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
                    ></img>
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
                            <i className="comment-alt-edit">
                              {" "}
                              <img src={Down} alt="" className="icon_edit" />
                            </i>
                            Download
                          </span>
                          <span>
                            <i className="comment-alt-delete">
                              {" "}
                              <img
                                src={Delete}
                                alt=""
                                className="icon_delete"
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
                  <a href="#" class="author">
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
        ))}
      </div>
    </div>
  );
};

export default Purchased;
