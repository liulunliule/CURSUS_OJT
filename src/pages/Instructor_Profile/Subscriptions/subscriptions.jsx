// Subscriptions.js
import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Bell from "../../../assets/img/bell.png";

const Subscriptions = ({ subscriptions, activeTab }) => {
  return (
    <div
      className={`tab-pane fade ${
        activeTab === "nav-subscriptions" ? "active show" : ""
      }`}
      id="nav-subscriptions"
      role="tabpanel"
      aria-labelledby="nav-subscriptions-tab"
    >
      <div className="subscriptions_container">
        <h3 className="about_title_text">Subscriptions</h3>
        <div className="subscriptions_grid">
          {subscriptions.map((subscription) => (
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
                      style={{
                        color: "#1da1f2",
                      }}
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
                    <button className="subscribes_button">Subscribed</button>
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
                </ul></div>  
                <div className="subscription_stats">
                  <span className="students_count">
                    {subscription.students.toLocaleString()} Students
                  </span>
                  <span className="courses_count">
                    {subscription.courses} Courses
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
