import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/scss/bootstrap.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Setting from "../../assets/img/settings.png";
import About from "../Instructor_Profile/About/about";
import Purchased from "../Instructor_Profile/Purchased/purchased";
import Discussion from "../Instructor_Profile/Discussion/discussion";
import Subscriptions from "../Instructor_Profile/Subscriptions/subscriptions";
import { Link } from "react-router-dom";
import "./index.scss";
import {
  fetchUserInfo,
  fetchUserReviews,
} from "../../redux/features/myProfileSlice";

const Instructor_Profile = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("nav-about");
  const userReviews = useSelector((state) => state.myProfile.userReviews);
  const [loading, setLoading] = useState(true);
  const isShowAll = useSelector((state) => state.savedCourse?.isShowAll);
  const account = useSelector((state) => state.user.account);
  const userPosts = useSelector((state) => state.myProfile.userPosts);
  const subscriptions = useSelector((state) => state.myProfile.subscriptions);
  const mycertificate = useSelector((state) => state.certificate.mycertificate);
  const userId = account.id || "";
  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserReviews())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching instructors:", error);
        setLoading(false);
      });
  }, [dispatch]);
  const countCourse = userPosts.filter(
    (post) => post.userId === userId && post.purchased === true
  );
  const countSubscription = subscriptions.filter(
    (post) => post.userId === userId && post.registered === true
  );
  const countCertificate = mycertificate.filter(
    (post) => post.userId === userId && post.statusCertificate === true
  );
  const courseCount = countCourse.length;
  const SubscriptionCount = countSubscription.length;
  const CertificateCount = countCertificate.length;
  if (loading) {
    return (
      <div
        className="col-md-12 d-flex justify-content-center align-items-center"
        style={{
          width: "100%",
          height: "100vh",
          backdropFilter: "blur(3px)",
          position: "absolute",
          zIndex: "3000",
        }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`instructor-container ${isShowAll ? "active" : ""}`}>
      <div className="container-fluid">
        <div className="row instructor_container_row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="profile">
              <div className="row instructor_container_row">
                <div className="profile-left col-lg-6">
                  <div className="user_infor">
                    <img
                      src={account.avatar}
                      alt=""
                      className="userInfo_avatar"
                    />
                    <div className="userInfor">
                      <div className="userInfor_instructor">
                        <h2>{account.userName}</h2>
                        <span>{account.major}</span>
                      </div>
                    </div>
                  </div>
                  <div className="userInfor_join">
                    <ul>
                      <li>
                        <div className="userInfor_join_group">
                          <div className="userInfor_join_title">Purchased</div>
                          <div className="userInfor_join_parameter">
                            {courseCount}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="userInfor_join_group">
                          <div className="userInfor_join_title">My Reviews</div>
                          <div className="userInfor_join_parameter">
                            {userReviews.length}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="userInfor_join_group">
                          <div className="userInfor_join_title">
                            Subscriptions
                          </div>
                          <div className="userInfor_join_parameter">
                            {SubscriptionCount}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="userInfor_join_group">
                          <div className="userInfor_join_title">
                            Cerfiticates
                          </div>
                          <div className="userInfor_join_parameter">
                            {CertificateCount}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="profile_right col-lg-6">
                  <Link className="profile_setting" to="/setting_page">
                    <span>
                      <img
                        src={Setting}
                        alt="Setting"
                        className="setting_icon"
                      />
                    </span>
                    Setting
                  </Link>
                  <div className="profile_connect">
                    <ul className="tutor_social_links">
                      <li>
                        <a href="#" className="fb">
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            style={{ color: "white" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            style={{ color: "white" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ln">
                          <FontAwesomeIcon
                            icon={faLinkedinIn}
                            style={{ color: "white" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="yu">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            style={{ color: "white" }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="profile_button_right">
                    <li>
                      <button
                        className="studio_link_btn btn_500"
                        onClick={() =>
                          (window.location.href =
                            "/fourlayout/student_studio_dashboard")
                        }
                      >
                        Cursus Studio
                      </button>
                    </li>
                    <li>
                      <button
                        className="studio_link_btn-edit btn_500"
                        onClick={() =>
                          (window.location.href = "/setting_page/account_tab")
                        }
                      >
                        Edit
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Tab navigation */}
            <div className="course_tabs_container">
              <div className="row instructor_container_row">
                <div className="col-lg-12">
                  <div className="course_tabs">
                    <nav>
                      <div
                        className="nav nav-tabs tab_crse"
                        id="nav-tab"
                        role="tablist"
                      >
                        <a
                          className={`nav-item nav-link ${
                            activeTab === "nav-about" ? "active" : ""
                          }`}
                          id="nav-about-tab"
                          data-bs-toggle="tab"
                          href="#nav-about"
                          role="tab"
                          aria-selected={activeTab === "nav-about"}
                          onClick={() => setActiveTab("nav-about")}
                        >
                          About
                        </a>
                        <a
                          className={`nav-item nav-link ${
                            activeTab === "nav-purchased" ? "active" : ""
                          }`}
                          id="nav-purchased-tab"
                          data-bs-toggle="tab"
                          href="#nav-purchased"
                          role="tab"
                          aria-selected={activeTab === "nav-purchased"}
                          onClick={() => setActiveTab("nav-purchased")}
                        >
                          Purchased
                        </a>
                        <a
                          className={`nav-item nav-link ${
                            activeTab === "nav-reviews" ? "active" : ""
                          }`}
                          id="nav-reviews-tab"
                          data-bs-toggle="tab"
                          href="#nav-reviews"
                          role="tab"
                          aria-selected={activeTab === "nav-reviews"}
                          onClick={() => setActiveTab("nav-reviews")}
                        >
                          Discussion
                        </a>
                        <a
                          className={`nav-item nav-link ${
                            activeTab === "nav-subscriptions" ? "active" : ""
                          }`}
                          id="nav-subscriptions-tab"
                          data-bs-toggle="tab"
                          href="#nav-subscriptions"
                          role="tab"
                          aria-selected={activeTab === "nav-subscriptions"}
                          onClick={() => setActiveTab("nav-subscriptions")}
                        >
                          Subscriptions
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="instructor_container_tabs row instructor_container_row">
              <div className="col-lg-12">
                <div className="course_tab_content">
                  <div className="tab-content" id="nav-tabContent">
                    {/* About tab */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "nav-about" ? "show active" : ""
                      }`}
                      id="nav-about"
                      role="tabpanel"
                      aria-labelledby="nav-about-tab"
                    >
                      <About />
                    </div>
                    {/* Purchased tab */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "nav-purchased" ? "show active" : ""
                      }`}
                      id="nav-purchased"
                      role="tabpanel"
                      aria-labelledby="nav-purchased-tab"
                    >
                      <Purchased />
                    </div>
                    {/* Discussion tab */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "nav-reviews" ? "show active" : ""
                      }`}
                      id="nav-reviews"
                      role="tabpanel"
                      aria-labelledby="nav-reviews-tab"
                    >
                      <Discussion />
                    </div>
                    {/* Subscriptions tab */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "nav-subscriptions" ? "show active" : ""
                      }`}
                      id="nav-subscriptions"
                      role="tabpanel"
                      aria-labelledby="nav-subscriptions-tab"
                    >
                      <Subscriptions />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor_Profile;
