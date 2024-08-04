import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { fetchUsers } from "../../redux/features/myProfileSlice";
import iconSearchExplore from "../../assets/img/iconSearch_Explore.png";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss";
import { useNavigate } from "react-router-dom";

const All_Instructors = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const all_instructor = useSelector((state) => state.myProfile.all_instructor);
  const account = useSelector((state) => state.user.account);
  const userPosts = useSelector((state) => state.myProfile.userPosts);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUsers())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching instructors:", error);
        setLoading(false);
      });
  }, [dispatch]);

  console.log("Check:", account);
  const instructor = all_instructor.filter((post) => post.role === true);

  const getCourseCount = (userId) => {
    return userPosts.filter((course) => course.userId === userId).length;
  };
  useEffect(() => {
    if (query.trim()) {
      dispatch(fetchUsers(query.trim()));
    }
    setLoading(false);
  }, [dispatch, query]);

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      dispatch(fetchUsers(trimmedQuery));
    }
  };

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
    <div
      className={`container-fluid all_instructor_design ${
        isShowAll ? "active" : ""
      }`}
    >
      <div className="row">
        <div className="col-md-2 sidebar_instructor"></div>
        <div className="col-md-10 body_all_instructor">
          <div className="instructor_search col-xl-12 col-lg-8">
            <div className="search_all_instructor">
              <div className="search_all_instructor_explore_search">
                <div className="ai search_focus">
                  <div className="ai left_icon input_text swdh11_search">
                    <img
                      className="icon-search-all-instrutor"
                      src={iconSearchExplore}
                      alt=""
                    />
                    <input
                      className="search_all_instructor_explore"
                      type="text"
                      placeholder="Search Tutors..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleSearch}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="all_instructor_group">
              <div className="row">
                {instructor.map((instructor) => (
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="all_instructor_infor">
                      <div className="all_instructor_infor_img">
                        <img
                          key={instructor.id}
                          onClick={() =>
                            navigate(`/other_instructor_view/${instructor.id}`)
                          }
                          src={instructor.avatar}
                          alt={instructor.userName}
                        />
                      </div>
                      <div className="all_instructor_infor_content">
                        <div className="all_instructor_infor_content_detail">
                          <a href="#" className="all_instructor_infor_name">
                            {instructor.userName}
                            <div className="icon-faCircleCheck">
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "#1da1f2",
                                }}
                              />
                            </div>
                          </a>
                        </div>
                        <div className="all_instructor_infor_major">
                          {instructor.major}
                        </div>
                        <ul className="all_instructor_tutor_social_links social_links_all">
                          <li>
                            <a href={instructor.facebook} className="fb">
                              <FontAwesomeIcon
                                icon={faFacebookF}
                                style={{
                                  color: "white",
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a href={instructor.twitter} className="tw">
                              <FontAwesomeIcon
                                icon={faTwitter}
                                style={{
                                  color: "white",
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a href={instructor.linkedin} className="ln">
                              <FontAwesomeIcon
                                icon={faLinkedinIn}
                                style={{
                                  color: "white",
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a href={instructor.youtube} className="yu">
                              <FontAwesomeIcon
                                icon={faYoutube}
                                style={{
                                  color: "white",
                                }}
                              />
                            </a>
                          </li>
                        </ul>
                        <div className="all_instructor_infor_instructor">
                          <span className="all_instructor_infor_student_number">
                            {instructor.enrollStudents} Students
                          </span>
                          <span className="all_instructor_infor_course_number">
                            {getCourseCount(instructor.id)} Courses
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-10">
            <div className="all-instructor-spinner">
              <div className="bounce-1"></div>
              <div className="bounce-2"></div>
              <div className="bounce-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All_Instructors;
