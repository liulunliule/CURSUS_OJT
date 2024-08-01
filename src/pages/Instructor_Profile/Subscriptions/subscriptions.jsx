import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSubscriptions,
  fetchUpdateSubscriptions,
} from "../../../redux/features/myProfileSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Bell from "../../../assets/img/bell.png";
import "./index.scss";
import { toast } from "react-toastify";

const Subscriptions = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector((state) => state.myProfile.subscriptions);
  const account = useSelector((state) => state.user.account);
  const userId = account.id || "";

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  const filteredUserSub = subscriptions.filter(
    (post) => post.userId === userId && post.registered === true
  );

  const handleUpdate = (id) => {
    const updatedDataSubscriptions = { subscriptionsed: false };
    dispatch(fetchUpdateSubscriptions({ id, updatedDataSubscriptions }));
    toast.success("Subscription removed successfully!!!");
  };

  return (
    <div className="subscriptions_container">
      <h3 className="about_title_text">Subscriptions</h3>
      <div className="subscriptions_grid">
        {filteredUserSub.length > 0 ? (
          filteredUserSub.map((subscription) => (
            <div key={subscription.id} className="subscription_card">
              <div className="subscription_image">
                <a href="#">
                  <img src={subscription.userImage} alt={subscription.user} />
                </a>
              </div>
              <div className="subscription_details">
                <div className="subscription_header">
                  <a href="#" className="subscription_name">
                    {subscription.user}
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "#1da1f2" }}
                      className="fa_circle_check"
                    />
                  </a>
                </div>
                <div className="subscription_category">
                  {subscription.category}
                </div>
                <div className="subscription_button">
                  <ul className="subscription_actions">
                    <li>
                      <button
                        className="subscribes_button"
                        onClick={() => handleUpdate(subscription.id)}
                      >
                        Subscribed
                      </button>
                    </li>
                    <li>
                      <button className="notification_button">
                        <img
                          src={Bell}
                          className="subscription_notification"
                          alt="Notification"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="subscription_stats">
                  <span className="students_count">
                    {subscription.students} Students
                  </span>
                  <span className="courses_count">
                    {subscription.courses} Courses
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No subscriptions available</p>
        )}
      </div>
    </div>
  );
};

export default Subscriptions;
