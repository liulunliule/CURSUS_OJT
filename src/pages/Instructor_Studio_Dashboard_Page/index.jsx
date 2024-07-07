import React, { useRef, useState } from "react";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  UilAngleLeft,
  UilAngleRight,
  UilApps,
  UilBookAlt,
} from "@iconscout/react-unicons";
import Achievement from "../../assets/img/achievement.svg";
import GraduationCap from "../../assets/img/graduation-cap.svg";
import OnlineCourse from "../../assets/img/online-course.svg";
import Knowledge from "../../assets/img/knowledge.svg";
import Courses from "../../assets/img/thumbnail_live.jpg";
import News from "../../assets/img/thumbnail_live3.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Instructor_Studio_Dashboard = () => {
  const sliderRef = useRef(null);
  const newsSliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };
  const newsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentNewsSlide(current),
  };
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
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
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="studio-dashboard-title">
                <i className="uil uil-apps">
                  <UilApps size="20" />
                </i>
                Instructor Dashboard
              </h2>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="studio-dashboard-card-dash">
                <div className="studio-dashboard-card-dash-left">
                  <h5>Total Sales</h5>
                  <h2>$350</h2>
                  <span className="studio-dashboard-card-1">New $50</span>
                </div>
                <div className="studio-dashboard-card-dash-right">
                  <img src={Achievement} alt="Achievement" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="studio-dashboard-card-dash">
                <div className="studio-dashboard-card-dash-left">
                  <h5>Total Enroll</h5>
                  <h2>1500</h2>
                  <span className="studio-dashboard-card-2">New 125</span>
                </div>
                <div className="studio-dashboard-card-dash-right">
                  <img src={GraduationCap} alt="Graduation Cap" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="studio-dashboard-card-dash">
                <div className="studio-dashboard-card-dash-left">
                  <h5>Total Courses</h5>
                  <h2>130</h2>
                  <span className="studio-dashboard-card-3">New 5</span>
                </div>
                <div className="studio-dashboard-card-dash-right">
                  <img src={OnlineCourse} alt="Online Course" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="studio-dashboard-card-dash">
                <div className="studio-dashboard-card-dash-left">
                  <h5>Total Students</h5>
                  <h2>2650</h2>
                  <span className="studio-dashboard-card-4">New 245</span>
                </div>
                <div className="studio-dashboard-card-dash-right">
                  <img src={Knowledge} alt="Knowledge" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="studio-dashboard-card-dash1">
                <div className="studio-dashboard-card-dash-left1">
                  <i className="uil uil-book-alt">
                    <UilBookAlt size="32" />
                  </i>
                  <h1>Jump Into Course Creation</h1>
                </div>
                <div className="studio-dashboard-card-dash-right1">
                  <Link to="/thirdlayout/create_new_course">
                  <button
                    className="studio-dashboard-create-btn-dash"
                    onClick={() => {
                      window.location.href = "create_new_course";
                    }}
                  >
                    Create Your Course
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="studio-dashboard-section studio-dashboard-mt-50">
                <h4 className="studio-dashboard-item-title">
                  Latest Courses performance
                </h4>
                <Slider {...settings} ref={sliderRef}>
                  <div className="item">
                    <div className="studio-dashboard-course-1">
                      <a href="#" className="studio-dashboard-course-img">
                        <img src={Courses} alt="Course Image" />
                        <div className="course-overlay"></div>
                      </a>
                      <div className="studio-dashboard-course-content">
                        <div className="studio-dashboard-course-content-vdtodt">
                          <span className="studio-dashboard-course-content-vdt14">
                            First 2 days 22 hours
                          </span>
                        </div>
                        <a
                          href="#"
                          className="studio-dashboard-course-content-discription"
                        >
                          Complete Python Bootcamp: Go from zero to hero in
                          Python 3
                        </a>
                        <div className="studio-dashboard-view">
                          <div className="studio-dashboard-course-content-left">
                            View
                          </div>
                          <div className="studio-dashboard-course-content-right">
                            1.5k
                          </div>
                        </div>
                        <div className="studio-dashboard-view">
                          <div className="studio-dashboard-course-content-left">
                            Purchased
                          </div>
                          <div className="studio-dashboard-course-content-right">
                            150
                          </div>
                        </div>
                        <div className="studio-dashboard-view">
                          <div className="studio-dashboard-course-content-left">
                            Total Like
                          </div>
                          <div className="studio-dashboard-course-content-right">
                            1k
                          </div>
                        </div>
                        <div className="studio-dashboard-item">
                          <a href="#" className="studio-dashboard-50">
                            Go to course analytics
                          </a>
                          <a href="#" className="studio-dashboard-50">
                            See comments (875)
                          </a>
                          <a href="#" className="studio-dashboard-50">
                            See Reviews (105)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="studio-dashboard-course-1">
                      <a href="#" className="studio-dashboard-course-img">
                        <img src={Courses} alt="Course Image" />
                        <div className="course-overlay"></div>
                      </a>
                      <div className="studio-dashboard-course-content">
                        <div className="studio-dashboard-course-content-vdtodt">
                          <span className="studio-dashboard-course-content-vdt14">
                            Second 4 days 9 hours
                          </span>
                        </div>
                        <a
                          href="#"
                          className="studio-dashboard-course-content-discription"
                        >
                          The Complete JavaScript Course 2020: Build Real
                          Projects!
                        </a>
                        <div className="studio-dashboard-view">
                          <div className="studio-dashboard-course-content-left">
                            View
                          </div>
                          <div className="studio-dashboard-course-content-right">
                            175k
                          </div>
                        </div>
                        <div className="studio-dashboard-view">
                          <div className="studio-dashboard-course-content-left">
                            Purchased
                          </div>
                          <div className="studio-dashboard-course-content-right">
                            1k
                          </div>
                        </div>
                        <div className="studio-dashboard-view">
                          <div className="studio-dashboard-course-content-left">
                            Total Like
                          </div>
                          <div className="studio-dashboard-course-content-right">
                            85k
                          </div>
                        </div>
                        <div className="studio-dashboard-item">
                          <a href="#" className="studio-dashboard-50">
                            Go to course analytics
                          </a>
                          <a href="#" className="studio-dashboard-50">
                            See comments (915)
                          </a>
                          <a href="#" className="studio-dashboard-50">
                            See Reviews (255)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="studio-dashboard-course-1">
                      <a href="#" className="studio-dashboard-course-img">
                        <img src={Courses} alt="Course Image" />
                        <div className="course-overlay"></div>
                      </a>
                      <div className="studio-dashboard-course-content">
                        <div className="studio-dashboard-course-content-vdtodt">
                          <span className="studio-dashboard-course-content-vdt14">
                            Third 6 days 11 hours
                          </span>
                        </div>
                        <a
                          href="#"
                          className="studio-dashboard-course-content-discription"
                        >
                          Beginning C++ Programming - From Beginner to Beyond
                        </a>
                        <div className="studio-dashboard-view">
                          <div className="studio-dashboard-course-content-left">
                            View
                          </div>
                          <div className="studio-dashboard-course-content-right">
                            150k
                          </div>
                        </div>
                        <div className="studio-dashboard-view">
                          <div className="studio-dashboard-course-content-left">
                            Purchased
                          </div>
                          <div className="studio-dashboard-course-content-right">
                            10k
                          </div>
                        </div>
                        <div className="studio-dashboard-view">
                          <div className="studio-dashboard-course-content-left">
                            Total Like
                          </div>
                          <div className="studio-dashboard-course-content-right">
                            75k
                          </div>
                        </div>
                        <div className="studio-dashboard-item">
                          <a href="#" className="studio-dashboard-50">
                            Go to course analytics
                          </a>
                          <a href="#" className="studio-dashboard-50">
                            See comments (785)
                          </a>
                          <a href="#" className="studio-dashboard-50">
                            See Reviews (205)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="studio-dashboard-owl-nav button_test">
                  <button
                    type="button"
                    className={`studio-dashboard-owl-prev  button_test_prev ${
                      currentSlide === 0 ? "disabled" : ""
                    }`}
                    onClick={prevSlide}
                  >
                    <UilAngleLeft />
                  </button>
                  <button
                    type="button"
                    className={`studio-dashboard-owl-next  button_test_next ${
                      currentSlide === 2 ? "disabled" : ""
                    }`}
                    onClick={nextSlide}
                  >
                    <UilAngleRight />
                  </button>
                </div>
                <div className="owl-dots disabled"></div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="studio-dashboard-section studio-dashboard-mt-50">
                <h4 className="studio-dashboard-item-title">News</h4>
                <Slider {...newsSettings} ref={newsSliderRef}>
                  <div className="item">
                    <div class="studio-dashboard-detail">
                      <div class="studio-dashboard-edututs-news studio-dashboard-owl-theme">
                        <div class="studio-dashboard-course-1">
                          <a href="#" className="studio-dashboard-course-img">
                            <img src={News} alt="Course Image" />
                            <div className="course-overlay"></div>
                          </a>
                          <div class="studio-dashboard-course-content">
                            <a
                              href="#"
                              class="studio-dashboard-course-content-discription studio-dashboard-mt-15"
                            >
                              COVID-19 Updates &amp; Resources
                            </a>
                            <p class="studio-dashboard-news-description">
                              See the latest updates to coronavirus-related
                              content, including changes to monetization, and
                              access new Creator support resources
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
                  <div className="item">
                    <div class="studio-dashboard-detail">
                      <div class="studio-dashboard-edututs-news studio-dashboard-owl-theme">
                        <div class="studio-dashboard-course-1">
                          <a href="#" className="studio-dashboard-course-img">
                            <img src={News} alt="Course Image" />
                            <div className="course-overlay"></div>
                          </a>
                          <div class="studio-dashboard-course-content">
                            <a
                              href="#"
                              class="studio-dashboard-course-content-discription studio-dashboard-mt-15"
                            >
                              Watch: Edututs+ interview Mr. Joginder
                            </a>
                            <p class="studio-dashboard-news-description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aenean ac eleifend ante. Duis ac pulvinar
                              felis. Sed a nibh ligula. Mauris eget tortor id
                              mauris tristique accumsan.
                            </p>{" "}
                            <div class="studio-dashboard-item">
                              <a href="#" class="studio-dashboard-50">
                                Watch Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div class="studio-dashboard-detail">
                      <div class="studio-dashboard-edututs-news studio-dashboard-owl-theme">
                        <div class="studio-dashboard-course-1">
                          <a href="#" className="studio-dashboard-course-img">
                            <img src={News} alt="Course Image" />
                            <div className="course-overlay"></div>
                          </a>
                          <div class="studio-dashboard-course-content">
                            <a
                              href="#"
                              class="studio-dashboard-course-content-discription studio-dashboard-mt-15"
                            >
                              COVID-19 Updates - April 7
                            </a>
                            <p class="studio-dashboard-news-description">
                              Ut porttitor mi vel orci cursus, nec elementum
                              neque malesuada. Phasellus imperdiet quam gravida
                              pharetra aliquet. Integer vel ligula eget nisl
                              dignissim hendrerit.
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
                <h4 class="studio-dashboard-item-title">Profile Analytics</h4>
                <div class="studio-dashboard-detail">
                  <div class="studio-dashboard-course-1">
                    <div class="studio-dashboard-course-content">
                      <h6 class="studio-dashboard-course-content-name">
                        Current subscribers
                      </h6>
                      <h3 class="studio-dashboard-subcribe-title">856</h3>
                      <div class="studio-dashboard-view">
                        <div class="studio-dashboard-course-content-left">
                          View
                        </div>
                        <div class="studio-dashboard-course-content-right">
                          17k
                          <span class="studio-dashboard-course-content-analyics">
                            <i class="uil uil-arrow-to-bottom"></i>75%
                          </span>
                        </div>
                      </div>
                      <div class="studio-dashboard-view">
                        <div class="studio-dashboard-course-content-left">
                          Purchased
                          <span class="studio-dashboard-per-text">
                            (per hour)
                          </span>
                        </div>
                        <div class="studio-dashboard-course-content-right">
                          1
                          <span class="studio-dashboard-course-content-analyics">
                            <i class="uil uil-top-arrow-from-top"></i>100%
                          </span>
                        </div>
                      </div>
                      <div class="studio-dashboard-view">
                        <div class="studio-dashboard-course-content-left">
                          Enroll
                          <span class="studio-dashboard-per-text">
                            (per hour)
                          </span>
                        </div>
                        <div class="studio-dashboard-course-content-right">
                          50
                          <span class="studio-dashboard-course-content-analyics">
                            <i class="uil uil-top-arrow-from-top"></i>70%
                          </span>
                        </div>
                      </div>
                      <div class="studio-dashboard-item">
                        <a href="#" class="studio-dashboard-50">
                          Go to profile analytics
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="studio-dashboard-section studio-dashboard-mt-50">
                <h4 class="studio-dashboard-item-title">Submit Courses</h4>
                <div class="studio-dashboard-detail">
                  <div class="studio-dashboard-course-1">
                    <div class="studio-dashboard-course-content">
                      <div class="studio-dashboard-upcming-card">
                        <a
                          href="#"
                          class="studio-dashboard-course-content-discription"
                        >
                          The Complete JavaScript Course 2020: Build Real
                          Projects!
                          <span class="studio-dashboard-Pending">Pending</span>
                        </a>
                        <p class="studio-dashboard-submit-course">
                          Submitted<span>1 days ago</span>
                        </p>
                        <a href="#" class="studio-dashboard-delete-link">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Instructor_Studio_Dashboard;
