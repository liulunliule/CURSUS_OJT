import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserReviews,
  fetchPostComment,
  fetchDeleteReview,
} from "../../../redux/features/myProfileSlice";
import { HeartOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Like from "../../../assets/img/like.png";
import Dislike from "../../../assets/img/dont-like.png";
import Delete from "../../../assets/img/delete.png";
import "./index.scss";
import { toast } from "react-toastify";

const Discussion = () => {
  const dispatch = useDispatch();
  const userReviews = useSelector((state) => state.myProfile.userReviews) || [];
  const account = useSelector((state) => state.user.account) || {};
  const userId = account?.id || "";
  const userAvatar = account?.avatar || "";
  const userName = account?.userName || "";
  console.log("reviews:", userReviews);
  const [newComment, setNewComment] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    // Polling every 5 seconds
    const interval = setInterval(() => {
      dispatch(fetchUserReviews());
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      dispatch(
        fetchPostComment({
          userId,
          content: newComment,
          avatar: userAvatar,
          userName,
        })
      )
        .then(() => {
          setNewComment("");
          dispatch(fetchUserReviews());
        })
        .catch((error) => {
          toast.error(`Failed to add comment: ${error.message}`);
        });
    }
  };

  const handleAddReply = (commentId) => {
    if (replyContent.trim()) {
      dispatch(
        fetchPostComment({
          userId,
          content: replyContent,
          avatar: userAvatar,
          replyTo: commentId,
          userName,
        })
      )
        .then(() => {
          setReplyContent("");
          setReplyTo(null);
          dispatch(fetchUserReviews());
        })
        .catch((error) => {
          toast.error(`Failed to add reply: ${error.message}`);
        });
    }
  };

  const handleDeleteComment = (commentId) => {
    const comment = userReviews.find((review) => review.id === commentId);
    if (comment && comment.userId === userId) {
      dispatch(fetchDeleteReview({ userId, reviewId: commentId }))
        .then(() => {
          toast.success("Comment deleted successfully!");
          dispatch(fetchUserReviews());
        })
        .catch((error) => {
          toast.error(`Failed to delete comment: ${error.message}`);
        });
    } else {
      toast.error("You can only delete your own comments.");
    }
  };

  // Hàm để nhóm các phản hồi theo bình luận gốc
  const groupRepliesByComment = (reviews) => {
    const groupedReplies = {};

    reviews.forEach((review) => {
      if (review.replyTo) {
        if (!groupedReplies[review.replyTo]) {
          groupedReplies[review.replyTo] = [];
        }
        groupedReplies[review.replyTo].push(review);
      }
    });

    return groupedReplies;
  };

  const groupedReplies = groupRepliesByComment(userReviews);

  return (
    <div className="discussion_reviews_content">
      <h3 className="about-title-text">Discussion</h3>
      <div className="discussion_comment_section">
        <div className="discussion_comment_group">
          <div className="discussion_user_image">
            <img src={userAvatar} alt="User Avatar" className="user_avatar" />
          </div>
          <textarea
            className="discussion_comment_input"
            placeholder="Add a public comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        </div>
        <button
          className="discussion_comment_button"
          type="button"
          onClick={handleAddComment}
        >
          Comment
        </button>
      </div>
      <div className="discussion_reviews_list">
        {userReviews.length > 0 &&
          userReviews.map((review) => {
            const isRootComment = !review.replyTo;
            return (
              isRootComment && (
                <div key={review.id} className="discussion_review_item">
                  <div className="discussion_review_user_details">
                    <img
                      src={review.userImage}
                      alt="User Avatar"
                      className="user_avatar"
                    />
                    <div className="discussion_review_user_info">
                      <h4 className="discussion_user_name">{review.user}</h4>
                      <span className="discussion_review_time">
                        {review.time}
                      </span>{" "}
                      <br />
                      <span className="discussion_review_time">
                        {review.date}
                      </span>
                    </div>
                    {review.userId === userId && (
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
                            <i
                              className="comment-alt-delete"
                              onClick={() => handleDeleteComment(review.id)}
                            >
                              <img
                                src={Delete}
                                alt="Delete"
                                className="icon_delete"
                              />
                            </i>
                            Delete
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="discussion_review_text">{review.content}</p>
                  <div className="discussion_review_actions">
                    <a href="#" className="discussion_action_link">
                      <img
                        src={Like}
                        className="discussion_review_like"
                        alt="Like"
                      />
                      {review.likes}
                    </a>
                    <a href="#" className="discussion_action_link">
                      <img
                        src={Dislike}
                        className="discussion_review_dislike"
                        alt="Dislike"
                      />
                      {review.dislikes}
                    </a>
                    <a
                      href="#"
                      className="discussion_action_link"
                      onClick={() => setReplyTo(review.id)}
                    >
                      <HeartOutlined /> Reply
                    </a>
                  </div>
                  <hr />
                  {replyTo === review.id && (
                    <div className="discussion_reply_section">
                      <textarea
                        className="discussion_reply_input"
                        placeholder="Add a reply"
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                      ></textarea>
                      <button
                        className="discussion_reply_button"
                        type="button"
                        onClick={() => handleAddReply(review.id)}
                      >
                        Send
                      </button>
                    </div>
                  )}
                  {groupedReplies[review.id] &&
                    groupedReplies[review.id].map((reply) => (
                      <div key={reply.id} className="discussion_reply_item">
                        <div className="discussion_review_item">
                          <div className="discussion_review_user_details">
                            <img
                              src={reply.userImage}
                              alt="User Avatar"
                              className="user_avatar"
                            />
                            <div className="discussion_review_user_info">
                              <h4 className="discussion_user_name">
                                {reply.user}
                              </h4>
                              <span className="discussion_review_time">
                                {reply.time}
                              </span>
                              <br />
                              <span className="discussion_review_time">
                                {reply.date}
                              </span>
                            </div>
                            {reply.userId === userId && (
                              <div className="discussion_options_dropdown">
                                <div className="fa_EllipsisVertical">
                                  <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    style={{ color: "#686f7a" }}
                                    className="purchased_fa_ellipsis_vertical"
                                  />
                                </div>
                                <div className="discussion_dropdown_content">
                                  <span
                                    onClick={() =>
                                      handleDeleteComment(reply.id)
                                    }
                                  >
                                    <i className="comment-alt-delete">
                                      <img
                                        src={Delete}
                                        alt="Delete"
                                        className="icon_delete"
                                      />
                                    </i>
                                    Delete
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                          <p className="discussion_review_text">
                            {reply.content}
                          </p>
                          <div className="discussion_review_actions">
                            <a href="#" className="discussion_action_link">
                              <img
                                src={Like}
                                className="discussion_review_like"
                                alt="Like"
                              />
                              {reply.likes}
                            </a>
                            <a href="#" className="discussion_action_link">
                              <img
                                src={Dislike}
                                className="discussion_review_dislike"
                                alt="Dislike"
                              />
                              {reply.dislikes}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default Discussion;
