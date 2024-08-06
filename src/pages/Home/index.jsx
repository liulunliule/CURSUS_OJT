import React, { useEffect, useState } from "react";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import Stream from "../../assets/img/stream.png";
import Learn from "../../assets/img/learn.png";
import Play from "../../assets/img/play.png";
import Time from "../../assets/img/time.png";
import Course from "../../assets/img/course.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { message } from "antd";
import Carousel from "../../components/carousel";

const Homepage = () => {
  const [mouseOverColor, setMouseOverColor] = useState(null);
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  console.log("account:", account);
  console.log("isAuthenticated:", isAuthenticated);

  const mouseOverOn = () => {
    setMouseOverColor("black");
  };

  const mouseOverOff = () => {
    setMouseOverColor(null);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message) {
      message.open({
        type: location.state.type,
        content: location.state.message,
      });
    }
  }, [location.state]);
  const role = account.role;
  return (
    <div className={`wrapper12 ${isShowAll ? "active" : ""}`}>
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="row">
            <div className="right_side">
              <div className="col-xl-9 col-lg-8">
                <div className="section3125">
                  <h4 className="item_title">Live Streams</h4>
                  <Link to="/LiveStreams" className="see150">
                    See all
                  </Link>
                  <div className="la5lo1">
                    <div className="owl-carousel live_stream owl-theme owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <Carousel />
                        {/* <div className="owl-stage">
                                                    <Slider {...settings}>
                                                        {data.map((d) => (
                                                            <div className="owl-item">
                                                                <div className="item">
                                                                    <div className="stream_1">
                                                                        <Link
                                                                            to="/instructor_profile"
                                                                            className="stream_bg"
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    d.img
                                                                                }
                                                                            />
                                                                            <h4>
                                                                                {
                                                                                    d.name
                                                                                }
                                                                            </h4>
                                                                            <p>
                                                                                Live
                                                                                <span></span>
                                                                            </p>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </Slider>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section3125 mt-50">
                  <h4 className="item_title">Featured Courses</h4>
                  <a href="#" className="see150">
                    See all
                  </a>
                  <div className="la5lo1">
                    <div className="owl-carousel live_stream owl-theme owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                          <Slider {...settings}>
                            {courses.map((d) => (
                              <Link to="/course_detail/course_detail_about">
                                <div className="owl-item-course">
                                  <div className="item">
                                    <div className="fcrse_1 mb_20">
                                      <a href="#" className="fcrse_img">
                                        <img src={d.img} />
                                        <div className="course-overlay">
                                          <div className="badge_seller">
                                            Bestseller
                                          </div>
                                          <div className="crse_reviews">
                                            {/* <img src={Star} className="mr-2"/> */}
                                            {d.rating}
                                          </div>
                                          <div className="crse_timer">
                                            {d.hours} hours
                                          </div>
                                        </div>
                                      </a>

                                      <div className="fcrse_content">
                                        <div className="vdtodt">
                                          <span>{d.views} views</span>
                                        </div>
                                        <a className="crse14s">
                                          {d.description}
                                        </a>
                                        <a href="#" className="crse-cate">
                                          {d.category}
                                        </a>
                                        <div className="auth1lnkprce">
                                          <p className="cr1fot">
                                            By
                                            <a href="#"> {d.instructor}</a>
                                          </p>
                                          <div className="prce142">
                                            ${d.price}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section3125 mt-50">
                  <h4 className="item_title">Newest Courses</h4>
                  <a href="#" className="see150">
                    See all
                  </a>
                  <div className="la5lo1">
                    <div className="owl-carousel live_stream owl-theme owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                          <Slider {...settings}>
                            {newCourses.map((d) => (
                              <Link to="/course_detail/course_detail_about">
                                <div className="owl-item-course">
                                  <div className="item">
                                    <div className="fcrse_1 mb_20">
                                      <a href="#" className="fcrse_img">
                                        <img src={d.img} />
                                        <div className="course-overlay">
                                          {/* <div className="badge_seller">Bestseller</div>
                                                                          <div className="crse_reviews">{d.rating}</div> */}
                                          <div className="crse_timer">
                                            {d.hours} hours
                                          </div>
                                        </div>
                                      </a>

                                      <div className="fcrse_content">
                                        <div className="vdtodt">
                                          <span>{d.views} views</span>
                                        </div>
                                        <a className="crse14s">
                                          {d.description}
                                        </a>
                                        <a href="#" className="crse-cate">
                                          {d.category}
                                        </a>
                                        <div className="auth1lnkprce">
                                          <p className="cr1fot">
                                            By
                                            <a href="#"> {d.instructor}</a>
                                          </p>
                                          <div className="prce142">
                                            ${d.price}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section3126">
                  <div className="row">
                    {content.map((d) => (
                      <div className="col-xl-6 col-lg-12 col-md-6">
                        <div className="value_props">
                          <div className="value_icon">
                            <img src={d.icon} />
                          </div>
                          <div className="value_content">
                            <h4>{d.slogan}</h4>
                            <p>{d.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section3125 mt-50">
                  <h4 className="item_title">Popular Instructors</h4>
                  <a href="#" className="see150">
                    See all
                  </a>
                  <div className="la5lo1">
                    <div className="owl-carousel live_stream owl-theme owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                          <Slider {...settings}>
                            {instructor.map((d) => (
                              <div className="owl-item-course">
                                <div className="item">
                                  <div className="fcrse_1 mb_20">
                                    <div className="tutor_img">
                                      <a href="#">
                                        <img src={d.img} alt="instructor" />
                                      </a>
                                    </div>

                                    <div className="tutor_content_dt">
                                      <div className="tutor150">
                                        <a href="#" className="tutor_name">
                                          {d.name}
                                        </a>
                                      </div>
                                      <div className="tutor_cate">
                                        {d.title}
                                      </div>
                                      <div className="social_links mt-10">
                                        <FontAwesomeIcon
                                          icon={faFacebookF}
                                          style={{
                                            color: "#2f55a4",
                                          }}
                                        />
                                        <FontAwesomeIcon
                                          icon={faTwitter}
                                          style={{
                                            color: "#1DA1F2",
                                          }}
                                        />
                                        <FontAwesomeIcon
                                          icon={faLinkedinIn}
                                          style={{
                                            color: "purple",
                                          }}
                                        />
                                        <FontAwesomeIcon
                                          icon={faYoutube}
                                          style={{
                                            color: "red",
                                          }}
                                        />
                                      </div>
                                      <div className="tut1250 mt-30">
                                        <span>{d.students} Students</span>
                                        <span className="mr-20">
                                          {d.courses} Courses
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12 col-lg-11">
                  <div className="section3125 mt-50">
                    <h4 className="item_title">What Our Students Have Today</h4>
                    <div className="la5lo1 mb-20">
                      <div className="owl-carousel live_stream owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                          <div className="owl-stage">
                            <Slider {...settings}>
                              {testimony.map((d) => (
                                <div className="owl-item-student">
                                  <div className="item">
                                    <div className="fcrse_4">
                                      <div className="say_content">
                                        <p>{d.feedback}</p>
                                      </div>
                                      <div className="st_group">
                                        <div className="stud_img">
                                          <img src={d.img} />
                                        </div>
                                        <h4>{d.student}</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4">
                <div>
                  {/* <div className="fcrse_2 mb-30">
                                        <div className="tutor_img">
                                            <a href="#">
                                                <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-10.jpg" />
                                            </a>
                                        </div>
                                        <div className="tutor_content_dt">
                                            <div className="tutor150">
                                                <a className="tutor_name">Jodinger Sighn</a>
                                            </div>
                                        </div>
                                    </div>  */}
                  <div className="fcrse_10 mb_20">
                    <div className="tutor_img">
                      <a href="#">
                        <img
                          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-10.jpg"
                          alt="instructor"
                        />
                      </a>
                    </div>

                    <div className="tutor_content_dt">
                      <div className="tutor150">
                        <a href="#" className="tutor_name">
                          Joginder Singh
                        </a>
                      </div>
                      <div className="tutor_cate">
                        Web Developer, Designer, and Teacher
                      </div>
                      <div className="social_links">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          style={{ color: "#2f55a4" }}
                        />
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "#1DA1F2" }}
                        />
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          style={{ color: "purple" }}
                        />
                        <FontAwesomeIcon
                          icon={faYoutube}
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="tut1250">
                        <span>615k Students</span>
                        <span className="mr-20">12 Courses</span>
                      </div>
                      {role === true ? (
                        <>
                          <a
                            href="/instructor_profile"
                            className="prfle12link"
                          >
                            Go to Profile
                          </a>
                        </>
                      ) : role === false ? (
                        <a
                          href="/student_profile"
                          className="prfle12link"
                        >
                           Go to Profile
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="fcrse_20 mt-20">
                    <div className="cater_ttle">
                      <h4>Live Streaming</h4>
                    </div>
                    <div className="live_text">
                      <div className="live_icon">
                        <img src={Stream} />
                      </div>
                      <div class="live-content">
                        <p>
                          Set up your channel and stream live to your students
                        </p>
                        <Link to="/Add_Live_Stream">
                          <button
                            style={{
                              backgroundColor: mouseOverColor,
                            }}
                            class="live_link"
                            onMouseOver={mouseOverOn}
                            onMouseOut={mouseOverOff}
                          >
                            Get Started
                          </button>
                        </Link>
                        <span class="livinfo">
                          Info : This feature only for 'Instructors'.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="get1452">
                    <h4>Get personalized recommendations</h4>
                    <p>Answer a few questions for your top picks</p>
                    <button
                      class="Get_btn"
                      onclick="window.location.href = '#';"
                    >
                      Get Started
                    </button>
                  </div>

                  <div class="fcrse_12 mt-50">
                    <div class="cater_ttle">
                      <h4>Top Categories</h4>
                    </div>
                    <ul class="allcate15">
                      <li>
                        <a href="#" class="ct_item">
                          <i class="uil uil-arrow"></i>
                          Development
                        </a>
                      </li>
                      <li>
                        <a href="#" class="ct_item">
                          <i class="uil uil-graph-bar"></i>
                          Business
                        </a>
                      </li>
                      <li>
                        <a href="#" class="ct_item">
                          <i class="uil uil-monitor"></i>
                          IT and Software
                        </a>
                      </li>
                      <li>
                        <a href="#" class="ct_item">
                          <i class="uil uil-ruler"></i>
                          Design
                        </a>
                      </li>
                      <li>
                        <a href="#" class="ct_item">
                          <i class="uil uil-chart-line"></i>
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href="#" class="ct_item">
                          <i class="uil uil-book-open"></i>
                          Personal Development
                        </a>
                      </li>
                      <li>
                        <a href="#" class="ct_item">
                          <i class="uil uil-camera"></i>
                          Photography
                        </a>
                      </li>
                      <li>
                        <a href="#" class="ct_item">
                          <i class="uil uil-music"></i>
                          Music
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="strttech120">
                    <h4>Become an Instructor</h4>
                    <p>
                      Top instructors from around the world teach millions of
                      students on Cursus. We provide the tools and skills to
                      teach what you love.
                    </p>
                    <button
                      class="Get_btn"
                      onclick="window.location.href = '#';"
                    >
                      Start Teaching
                    </button>
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

const data = [
  {
    name: "John Doe",
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
  },
  {
    name: "Jassica",
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
  },
  {
    name: "Edututs+",
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg",
  },
  {
    name: "Joginder",
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg",
  },
  {
    name: "Zoena",
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
  },
  {
    name: "Albert Dua",
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
  },
  {
    name: "Ridhima",
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
  },
  {
    name: "Amritpal",
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg",
  },
  {
    name: "Jimmy",
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
  },
];

const courses = [
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg",
    rating: "4.5",
    hours: "25",
    views: "109k",
    description: "Complete Python Bootcamp: Go from zero to hero in Python 3",
    category: "Web Development | Python",
    instructor: "John Doe",
    price: "10",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg",
    rating: "4.5",
    hours: "28",
    views: "5M",
    description: "The Complete JavaScript Course 2020: Build Real Projects!",
    category: "Development | JavaScript",
    instructor: "Jassica William",
    price: "5",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-3.jpg",
    rating: "4.5",
    hours: "12",
    views: "1M",
    description: "Beginning C++ Programming - From Beginner to Beyond",
    category: "Development | C++",
    instructor: "Joginder Singh",
    price: "13",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-4.jpg",
    rating: "5.0",
    hours: "2",
    views: "153k",
    description: "The Complete Digital Marketing Course - 12 Courses in 1",
    category: "Digital Marketing | Marketing",
    instructor: "Poonam Verma",
    price: "12",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-5.jpg",
    rating: "4.5",
    hours: "1.5",
    views: "53K",
    description: "Microsoft Excel - Excel from Beginner to Advanced",
    category: "Office Productivity | Excel",
    instructor: "Rock William",
    price: "6",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-6.jpg",
    rating: "5.0",
    hours: "36",
    views: "253k",
    description: "Angular 8 - The Complete Guide (2020 Edition)",
    category: "Development | Angular",
    instructor: "John Doe",
    price: "15",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-7.jpg",
    rating: "5.0",
    hours: "5.4",
    views: "109k",
    description: "WordPress for Beginners: Create a Website Step by Step",
    category: "Design | WordPress",
    instructor: "Sabnam Singh",
    price: "18",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-8.jpg",
    rating: "4.0",
    hours: "23",
    views: "196k",
    description: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass",
    category: "Design | CSS",
    instructor: "Jashanpreet Singh",
    price: "10",
  },
];

const newCourses = [
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-14.jpg",
    hours: "12",
    views: "15",
    description: "Build Responsive Real World Websites with HTML5 and CSS3",
    category: "Development | CSS",
    instructor: "John Doe",
    price: "4",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-11.jpg",
    hours: "28",
    views: "5",
    description: "The Complete JavaScript Course 2020: Build Real Projects!",
    category: "Development | JavaScript",
    instructor: "Jassica William",
    price: "5",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-18.jpg",
    hours: "15",
    views: "25",
    description: "The Complete Front-End Web Development Course!",
    category: "Development | Web Development",
    instructor: "Joginder Singh",
    price: "9",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-19.jpg",
    hours: "2",
    views: "15",
    description: "Ethical Hacking - Most Advanced Level Pentration Testing",
    category: "IT & Software | Ethical Hacking",
    instructor: "Poonam Verma",
    price: "10",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-12.jpg",
    hours: "28",
    views: "45",
    description: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    category: "Development | Sass",
    instructor: "Rock William",
    price: "6",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-13.jpg",
    hours: "30",
    views: "20",
    description: "The Complete Node.js Developer Course (3rd Edition)",
    category: "Development | Node.js",
    instructor: "John Doe",
    price: "3",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-20.jpg",
    hours: "21",
    views: "200",
    description: "WordPress Development - Themes, Plugins & Gutenberg",
    category: "Design | WordPress",
    instructor: "Joy Dua",
    price: "14",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-16.jpg",
    hours: "22",
    views: "11",
    description: "Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
    category: "Developmet | Vue JS",
    instructor: "Manreet Kaur",
    price: "10",
  },
];

const content = [
  {
    slogan: "Go at your own pace",
    desc: "Enjoy lifetime access to courses on Edututs+'s website",
    icon: Time,
  },
  {
    slogan: "Learn from industry experts",
    desc: "Select from top instructors around the world",
    icon: Learn,
  },
  {
    slogan: "Find video courses on almost any topic",
    desc: "Build your library for your career and personal growth",
    icon: Play,
  },
  {
    slogan: "100,000 online courses",
    desc: "Explore a variety of fresh topics",
    icon: Course,
  },
];

const instructor = [
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
    name: "John Doe",
    title: "WordPress & Plugin Tutor",
    students: "100k",
    courses: "15",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
    name: "Kerstin Cable",
    title: "Language Learning Coach",
    students: "14k",
    courses: "11",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
    name: "Jose Portilla",
    title: "Head of Data Science",
    students: "1M",
    courses: "25",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
    name: "Farhat Amin",
    title: "Cookery Coach",
    students: "1.5k",
    courses: "9",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
    name: "Kyle Pew",
    title: "Microsoft Certified Trainer",
    students: "300k",
    courses: "18",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
    name: "Jaysen Batchelor",
    title: "Illustrator & Designer",
    students: "491k",
    courses: "13",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
    name: "Quinton Batchelor",
    title: "Photographer & Instructor",
    students: "364k",
    courses: "6",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg",
    name: "Eli Natoli",
    title: "Entrepreneur - Passionate Teacher",
    students: "615k",
    courses: "12",
  },
];

const testimony = [
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
    feedback:
      "Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi, in placerat eros ultricies vitae. Praesent pellentesque blandit scelerisque. Suspendisse potenti.",
    student: "Jassica William",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
    feedback:
      "Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum.",
    student: "Rock Smith",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci.",
    student: "Luoci Marchant",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
    feedback:
      "Nulla bibendum lectus pharetra, tempus eros ac, sagittis orci. Suspendisse posuere dolor neque, at finibus mauris lobortis in.  Pellentesque vitae laoreet tortor.",
    student: "Poonam Sharma",
  },
  {
    img: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
    feedback:
      "Curabitur placerat justo ac mauris condimentum ultricies. In magna tellus, eleifend et volutpat id, sagittis vitae est.  Pellentesque vitae laoreet tortor.",
    student: "Davinder Singh",
  },
];
export default Homepage;
