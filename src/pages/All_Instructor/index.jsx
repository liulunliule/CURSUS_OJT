import React, { useEffect, useState } from "react";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import iconSearchExplore from "../../assets/img/iconSearch_Explore.png";
import { useSelector } from "react-redux";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
function All_Instructors() {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  useEffect(() => {
    fetch("https://6678f8ae0bd4525056207d59.mockapi.io/all_instructor")
      .then((response) => response.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching instructors:", error);
        setLoading(false);
      });
  }, []);

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
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="all_instructor_group">
              <div className="row">
                {loading ? (
                  <div
                    className="col-md-12 d-flex justify-content-center align-items-center"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "#f7f7f7",
                      zIndex: "3000",
                    }}
                  >
                    {/* Loading spinner */}
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  instructors.map((instructor) => (
                    <div
                      className="col-xl-3 col-lg-4 col-md-6"
                      key={instructor.id}
                    >
                      <div className="all_instructor_infor">
                        <div className="all_instructor_infor_img">
                          <a href="/other_instructor_view">
                            <img
                              src={instructor.avatar}
                              alt={instructor.name}
                            />
                          </a>
                        </div>
                        <div className="all_instructor_infor_content">
                          <div className="all_instructor_infor_content_detail">
                            <a href="#" className="all_instructor_infor_name">
                              {instructor.name}
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
                                  style={{ color: "white" }}
                                />
                              </a>
                            </li>
                            <li>
                              <a href={instructor.twitter} className="tw">
                                <FontAwesomeIcon
                                  icon={faTwitter}
                                  style={{ color: "white" }}
                                />
                              </a>
                            </li>
                            <li>
                              <a href={instructor.linkedin} className="ln">
                                <FontAwesomeIcon
                                  icon={faLinkedinIn}
                                  style={{ color: "white" }}
                                />
                              </a>
                            </li>
                            <li>
                              <a href={instructor.youtube} className="yu">
                                <FontAwesomeIcon
                                  icon={faYoutube}
                                  style={{ color: "white" }}
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="all_instructor_infor_instructor">
                            <span className="all_instructor_infor_student_number">
                              {instructor.student} Students
                            </span>
                            <span className="all_instructor_infor_course_number">
                              {instructor.course} Courses
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-10">
            <div class="all-instructor-spinner">
              <div class="bounce-1"></div>
              <div class="bounce-2"></div>
              <div class="bounce-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All_Instructors;
