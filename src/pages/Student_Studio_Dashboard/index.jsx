import React, { useEffect, useRef, useState } from "react";
import "bootstrap/scss/bootstrap.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  UilAngleLeft,
  UilAngleRight,
  UilApps,
} from "@iconscout/react-unicons";
import OnlineCourse from "../../assets/img/online-course.svg";
import Knowledge from "../../assets/img/knowledge.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudio } from "../../redux/features/myStudioSlice";

const Instructor_Studio_Dashboard = () => {
  const newsSliderRef = useRef(null);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const dispatch = useDispatch();
  const userStudio = useSelector((state) => state.myStudio.userStudio);

  useEffect(() => {
    dispatch(fetchStudio());
  }, [dispatch]);

  const newsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentNewsSlide(current),
  };

  const nextNewsSlide = () => {
    if (newsSliderRef.current) {
      newsSliderRef.current.slickNext();
    }
  };

  const prevNewsSlide = () => {
    if (newsSliderRef.current) {
      newsSliderRef.current.slickPrev();
    }
  };

  return (
    <div className={`studio-dashboard-wrapper ${isShowAll ? "active" : ""}`}>
      {userStudio.map((userInfo) => (
        <div key={userInfo.id} className="sa4d25">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="studio-dashboard-title">
                  <i className="uil uil-apps">
                    <UilApps size="20" />
                  </i>
                  Student Dashboard
                </h2>
              </div>

              <React.Fragment>
                
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="studio-dashboard-card-dash">
                    <div className="studio-dashboard-card-dash-left">
                      <h5>Total Purchased Courses</h5>
                      <h2>{userInfo.totalCourses}</h2>
                      <span className="studio-dashboard-card-3">
                        New {userInfo.newCourses}
                      </span>
                    </div>
                    <div className="studio-dashboard-card-dash-right">
                      <img src={OnlineCourse} alt="Online Course" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="studio-dashboard-card-dash">
                    <div className="studio-dashboard-card-dash-left">
                      <h5>Total Instrutors Subscribing</h5>
                      <h2>{userInfo.totalStudents}</h2>
                      <span className="studio-dashboard-card-4">
                        New {userInfo.newStudents}
                      </span>
                    </div>
                    <div className="studio-dashboard-card-dash-right">
                      <img src={Knowledge} alt="Knowledge" />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="studio-dashboard-section studio-dashboard-mt-50">
                  <h4 className="studio-dashboard-item-title">News</h4>
                  <Slider {...newsSettings} ref={newsSliderRef}>
                    {userInfo.news &&
                      userInfo.news.map((itemNews) => (
                        <div className="item" key={itemNews.id}>
                          <div class="studio-dashboard-detail">
                            <div class="studio-dashboard-edututs-news studio-dashboard-owl-theme">
                              <div class="studio-dashboard-course-1">
                                <a
                                  href="#"
                                  className="studio-dashboard-course-img"
                                >
                                  <img
                                    src={itemNews.imageUrl}
                                    alt="Course Image"
                                  />
                                  <div className="course-overlay"></div>
                                </a>
                                <div class="studio-dashboard-course-content">
                                  <a
                                    href="#"
                                    class="studio-dashboard-course-content-discription studio-dashboard-mt-15"
                                  >
                                    {itemNews.title}
                                  </a>
                                  <p class="studio-dashboard-news-description">
                                    {itemNews.description}
                                  </p>
                                  <div class="studio-dashboard-item">
                                    <a href="#" class="studio-dashboard-50">
                                      Learn More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </Slider>
                  <div className="button-news">
                    <button
                      type="button"
                      className={`button-prev-news ${
                        currentNewsSlide === 0 ? "disabled" : ""
                      }`}
                      onClick={prevNewsSlide}
                    >
                      <UilAngleLeft />
                    </button>
                    <button
                      type="button"
                      className={`button-next-news ${
                        currentNewsSlide === 2 ? "disabled" : ""
                      }`}
                      onClick={nextNewsSlide}
                    >
                      <UilAngleRight />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="studio-dashboard-section studio-dashboard-mt-50">
                  <h4 class="studio-dashboard-item-title">
                    What's new in Cursus
                  </h4>
                  <div class="studio-dashboard-detail">
                    <div class="studio-dashboard-course-1">
                      <div class="studio-dashboard-course-content">
                        <a href="#" class="studio-dashboard-new-links">
                          Improved performance on Studio Dashboard
                        </a>
                        <a href="#" class="studio-dashboard-new-links">
                          See more Dashboard updates
                        </a>
                        <a href="#" class="studio-dashboard-new-links">
                          See issues-at-glance for Live
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor_Studio_Dashboard;
