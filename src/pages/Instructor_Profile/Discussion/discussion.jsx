// Discussion.js
import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Like from "../../../assets/img/like.png";
import Dislike from "../../../assets/img/dont-like.png";
import Edit from "../../../assets/img/edit.png";
import Delete from "../../../assets/img/delete.png";
const Discussion = ({ userReviews, userInfo, activeTab }) => {
  return (
    <div
      className={`tab-pane fade ${
        activeTab === "nav-reviews" ? "active show" : ""
      }`}
      id="nav-reviews"
      role="tabpanel"
      aria-labelledby="nav-reviews-tab"
    >
      <div className="discussion_reviews_content">
        <h3 className="about-title-text">Discussion</h3>
        <div className="discussion_comment_section">
          <div className="discussion_comment_group">
            <div className="discussion_user_image">
              <img src={userInfo.avatar} alt="" />
            </div>
            <textarea
              className="discussion_comment_input"
              placeholder="Add a public comment"
            ></textarea>
          </div>
          <button className="discussion_comment_button" type="submit">
            Comment
          </button>
        </div>
        <div className="discussion_reviews_list">
          {userReviews.map((review) => (
            <div key={review.id} className="discussion_review_item">
              <div className="discussion_review_user_details">
                <img src={review.userImage} alt="" className="user_avatar" />
                <div className="discussion_review_user_info">
                  <h4 className="discussion_user_name">{review.user}</h4>
                  <span className="discussion_review_time">{review.time}</span>
                </div>
                <div className="discussion_options_dropdown">
                  <a href="#">
                    <div className="fa_EllipsisVertical">
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        style={{ color: "#686f7a" }}
                        className="purchased_fa_ellipsis_vertical"
                      />
                    </div>
                  </a>
                  <div className="discussion_dropdown_content">
                    <span>
                      <i className="comment-alt-edit">
                        {" "}
                        <img src={Edit} alt="" className="icon_edit" />
                      </i>
                      Edit
                    </span>
                    <span>
                      <i className="comment-alt-delete">
                        {" "}
                        <img src={Delete} alt="" className="icon_delete" />
                      </i>
                      Delete
                    </span>
                  </div>
                </div>
              </div>
              <p className="discussion_review_text">{review.content}</p>
              <div className="discussion_review_actions">
                <a href="#" className="discussion_action_link">
                  <img src={Like} className="discussion_review_like" />
                  {review.likes}
                </a>
                <a href="#" className="discussion_action_link">
                  <img src={Dislike} className="discussion_review_dislike" />
                  {review.dislikes}
                </a>
                <a href="#" className="discussion_action_link">
                  <FontAwesomeIcon icon={faHeart} />
                </a>
                <a href="#" className="discussion_action_link ">
                  Reply
                </a>
              </div>
              <hr />
              {review.replies &&
                review.replies.map((reply) => (
                  <div key={reply.id} className="discussion_reply_item">
                    <div className="discussion_review_item">
                      <div className="discussion_review_user_details">
                        <img src={reply.userImage} alt="" className="user_avatar"/>
                        <div className="discussion_review_user_info">
                          <h4 className="discussion_user_name">{reply.user}</h4>
                          <span className="discussion_review_time">
                            {reply.time}
                          </span>
                        </div>
                        <div className="discussion_options_dropdown">
                          <div className="fa_EllipsisVertical">
                            <FontAwesomeIcon
                              icon={faEllipsisVertical}
                              style={{ color: "#686f7a" }}
                              className="purchased_fa_ellipsis_vertical"
                            />
                          </div>
                          <div className="discussion_dropdown_content">
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
                      <p className="discussion_review_text">{reply.content}</p>
                      <div className="discussion_review_actions">
                        <a href="#" className="discussion_action_link">
                          <img src={Like} className="discussion_review_like" />
                          {review.likes}
                        </a>
                        <a href="#" className="discussion_action_link">
                          <img
                            src={Dislike}
                            className="discussion_review_dislike"
                          />
                          {review.dislikes}
                        </a>
                        <a href="#" className="discussion_action_link">
                          <FontAwesomeIcon icon={faHeart} />
                        </a>
                        <a
                          href="#"
                          className="discussion_action_link"
                        >
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discussion;
