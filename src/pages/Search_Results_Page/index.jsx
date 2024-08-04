import React, { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Cart from "../../assets/img/cart.png";
import Play from "../../assets/img/play-button.png";
import {
  SearchOutlined,
  ShareAltOutlined,
  HeartOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { UilWindsock } from "@iconscout/react-unicons";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchSearchResult,
  fetchAddNewCourse,
} from "../../redux/features/mySearchSlice";

const Search_Resultse = () => {
  const [loading, setLoading] = useState(true);
  const [showTopic, setShowTopic] = useState(false);
  const [showLevel, setShowLevel] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showFeatures, setshowFeatures] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showVideoDuration, setshowVideoDuration] = useState(false);
  const [showCloseCaption, setshowCloseCaption] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sort");
  const [query, setQuery] = useState("");
  const [likedCourses, setLikedCourses] = useState(new Set());
  const dispatch = useDispatch();
  const { userSearch, status } = useSelector((state) => state.mySearch);
  const account = useSelector((state) => state.user.account);

  const handleSortChange = (eventKey) => {
    setSelectedSort(eventKey);
  };
  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResult(query));
    }
    setLoading(false);
  }, [dispatch, query]);

  const handleSearch = () => {
    dispatch(fetchSearchResult(query));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleAddCourse = (course) => {
    const userId = account.id;
    const updatedCourse = {
      ...course,
      userId,
      saved: !likedCourses.has(course.id),
    };

    dispatch(fetchAddNewCourse(updatedCourse));
    setLikedCourses((prev) => {
      const newLikedCourses = new Set(prev);
      if (newLikedCourses.has(course.id)) {
        newLikedCourses.delete(course.id);
      } else {
        newLikedCourses.add(course.id);
      }
      return newLikedCourses;
    });

    toast.success("Course added to favorites!");
  };

  React.useEffect(() => {
    setSelectedSort("Sort");
  }, []);
  const toggleAccordion = (accordion) => {
    setShowTopic(false);
    setShowLevel(false);
    setShowLanguage(false);
    setShowPrice(false);
    setshowFeatures(false);
    setShowRating(false);
    setshowVideoDuration(false);
    setshowCloseCaption(false);

    switch (accordion) {
      case "topic":
        setShowTopic(!showTopic);
        break;
      case "level":
        setShowLevel(!showLevel);
        break;
      case "language":
        setShowLanguage(!showLanguage);
        break;
      case "Price":
        setShowPrice(!showPrice);
        break;
      case "Features":
        setshowFeatures(!showFeatures);
        break;
      case "Rating":
        setShowRating(!showRating);
        break;
      case "VideoDuration":
        setshowVideoDuration(!showVideoDuration);
        break;
      case "CloseCaption":
        setshowCloseCaption(!showCloseCaption);
        break;
      default:
        break;
    }
  };
  return (
    <div className="search-result-wrapper search-result">
      <div className="search-result-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-search-result">
                <div className="title-search-result-left">
                  <div className="title-search-result-left-link">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                        <li
                          className="breadcrumb-item breadcrumb-item-color active"
                          aria-current="page"
                        >
                          Search Results
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div className="title-search-result-right">
                  <div className="instructor_search title-search-result-right-search col-xl-12 col-lg-8">
                    <div className="search_all_instructor title-search-result-right-search-result">
                      <div className="policy__toolbar">
                        <div className="policy__toolbar-search">
                          <div className="policy__toolbar-icon">
                            <SearchOutlined />
                          </div>
                          <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyPress}
                            className="policy__toolbar-input"
                            placeholder="Search courses..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-search-result-main">
                <h2>Search Results</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-results-filters mb4d25">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-9 col-md-8">
              <div className="search-result-data search-result-data-mb-20">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="search-result-number">
                      {userSearch.length} Results
                    </h4>
                    {status === "loading" ? (
                      <div className="main-loader mt-50">
                        <div className="spinner">
                          <div className="bounce1"></div>
                          <div className="bounce2"></div>
                          <div className="bounce3"></div>
                        </div>
                      </div>
                    ) : (
                      userSearch.map((course) => (
                        <div
                          className="col-md-12 search-result-course-card"
                          key={course.id}
                        >
                          <div className="search-result-course-image">
                            <a
                              href="course_detail_view.html"
                              className="search-result-data-img"
                            >
                              <img
                                className="search-result-course-image-left"
                                src={course.video}
                                alt=""
                              />
                              <div className="search-result-course-overlay">
                                <div className="search-result-badge">
                                  {course.level}
                                </div>
                                <div className="search-result-course-reviews">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{ color: "#ffffff" }}
                                    className="fa-star-search"
                                  />
                                  {course.ratting}
                                </div>
                                <span className="search-result-play-btn">
                                  <i className="uil uil-play search-result-play">
                                    <img
                                      src={Play}
                                      className="search-result-course-play"
                                      alt="purchased-play"
                                    />
                                  </i>
                                </span>
                                <div className="search-result-course-timer">
                                  {course.time} hours
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="search-result-course-content">
                            <div className="search-result-more-dropdown">
                              <a href="#">
                                <div className="uil uil-ellipsis-v search-result-fa-EllipsisVertical">
                                  <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    style={{ color: "#ccc" }}
                                    className="fa-ellipsis-vertical"
                                  />
                                </div>
                              </a>
                              <div className="search-result-more-dropdown-content">
                                <span onClick={() => handleAddCourse(course)}>
                                  <i
                                    className={`uil uil-heart ${
                                      likedCourses.has(course.id)
                                        ? "heart-red"
                                        : ""
                                    }`}
                                  >
                                    <HeartOutlined />
                                  </i>
                                  {likedCourses.has(course.id)
                                    ? "Saved"
                                    : "Save"}
                                </span>

                                <span>
                                  <i className="uil uil-windsock">
                                    <UilWindsock />
                                  </i>
                                  Report
                                </span>
                              </div>
                            </div>
                            <div className="search-result-view-date">
                              <span className="vdt14 view">
                                {course.views} views
                              </span>
                              <span className="vdt14 date">
                                {course.date} days ago
                              </span>
                            </div>
                            <a
                              href="course_detail_view.html"
                              className="search-result-course-title"
                            >
                              {course.titilecourse}
                            </a>
                            <a
                              href="#"
                              className="search-result-course-category"
                            >
                              {course.typecourse}
                            </a>
                            <div className="search-result-author-price">
                              <p className="search-result-author">
                                By <a href="#">{course.author}</a>
                              </p>
                              <div className="search-result-price">
                                ${course.price}
                              </div>
                              <button
                                className="search-result-add-to-cart-btn"
                                title="cart"
                              >
                                <i className="uil uil-shopping-cart-alt">
                                  {" "}
                                  <img
                                    src={Cart}
                                    alt="Cart"
                                    className="search-result-cart-image"
                                  />
                                </i>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
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

export default Search_Resultse;
