import React, { useState, useEffect } from "react";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Setting from "../../assets/img/settings.png";
import {
  fetchUserInfo,
  fetchUserPosts,
  fetchUserReviews,
  fetchSubscriptions,
} from "../Instructor_Profile/data";
import About from "../Instructor_Profile/About/about";
import Purchased from "../Instructor_Profile/Purchased/purchased";
import Discussion from "../Instructor_Profile/Discussion/discussion";
import Subscriptions from "../Instructor_Profile/Subscriptions/subscriptions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Other_Instructor_View() {
  const [userInfo, setUserInfo] = useState(null);
  const [posts, setPosts] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [activeTab, setActiveTab] = useState("nav-about");
  const [loading, setLoading] = useState(true);
  const targetId = "1";
  const [courseCount, setCourseCount] = useState(0);
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const userInfo = await fetchUserInfo(targetId);
        setUserInfo(userInfo);

        const postsData = await fetchUserPosts();
        setPosts(postsData);
        setCourseCount(postsData.length);

        const reviewsData = await fetchUserReviews();
        setUserReviews(reviewsData);

        const subscriptionsData = await fetchSubscriptions();
        setSubscriptions(subscriptionsData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [targetId]);

  if (loading) {
    return (
      <div
        className="col-md-12 d-flex justify-content-center align-items-center"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f7f7f7",
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

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const postsChunks = chunkArray(posts, 4);

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
                      src={userInfo.avatar}
                      alt={userInfo.name}
                      className="userInfo_avatar"
                    />
                    <div className="userInfor">
                      <div className="userInfor_instructor">
                        <h2>{userInfo.name}</h2>
                        <span>{userInfo.major}</span>
                      </div>
                    </div>
                  </div>
                  <div className="userInfor_join">
                    <li>
                      <div className="userInfor_join_group">
                        <div className="userInfor_join_title">
                          Enroll Students
                        </div>
                        <div className="userInfor_join_parameter">
                          {userInfo.enrollstudents}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="userInfor_join_group">
                        <div className="userInfor_join_title">Courses</div>
                        <div className="userInfor_join_parameter">
                          {courseCount}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="userInfor_join_group">
                        <div className="userInfor_join_title">Reviews</div>
                        <div className="userInfor_join_parameter">
                          {userInfo.reviews}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="userInfor_join_group">
                        <div className="userInfor_join_title">
                          Subscriptions
                        </div>
                        <div className="userInfor_join_parameter">
                          {userInfo.subscriptions}
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="profile_right col-lg-6">
                  <Link className="profile_setting" to="/setting_page">
                    <span>
                      <img
                        src={Setting}
                        alt="Setting"
                        className="setting_icon"
                      ></img>
                    </span>
                    Setting
                  </Link>
                  <div className="profile_connect">
                    <ul className="tutor_social_links">
                      <li>
                        <a href="#" className="fb">
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            style={{
                              color: "white",
                            }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            style={{
                              color: "white",
                            }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="ln">
                          <FontAwesomeIcon
                            icon={faLinkedinIn}
                            style={{
                              color: "white",
                            }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="yu">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            style={{
                              color: "white",
                            }}
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
                          (window.location.href = "/setting_page/account_tab")
                        }
                      >
                        Cursus Studio
                      </button>
                    </li>
                    <li>
                      <button
                        className="studio_link_btn-edit btn_500"
                        onClick={() => (window.location.href = "/fourlayout/instructor_studio_dashboard")}
                      >
                        Edit
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ///////////////////////Tab Content/////////////////// */}
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
                          onClick={() => handleTabClick("nav-about")}
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
                          onClick={() => handleTabClick("nav-purchased")}
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
                          onClick={() => handleTabClick("nav-reviews")}
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
                          onClick={() => handleTabClick("nav-subscriptions")}
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
                    {/* //////////////////////About//////////////////////////// */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "nav-about" ? "active show" : ""
                      }`}
                      id="nav-about"
                      role="tabpanel"
                      aria-labelledby="nav-about-tab"
                    >
                      <About userInfo={userInfo} />
                    </div>
                    
                    {/* /////////////////////////////Purchased//////////////////////////////////////////// */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "nav-purchased" ? "active show" : ""
                      }`}
                      id="nav-purchased"
                      role="tabpanel"
                      aria-labelledby="nav-purchased-tab"
                    >
                      <Purchased posts={posts} />
                    </div>
                    {/* ///////////////////////////Discussion//////////////////////// */}
                    <Discussion
                      userReviews={userReviews}
                      userInfo={userInfo}
                      activeTab={activeTab}
                    />
                    {/* ////////////////////////Subscriptions////////////////////////////////////*/}
                    <Subscriptions
                      subscriptions={subscriptions}
                      activeTab={activeTab}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Other_Instructor_View;
