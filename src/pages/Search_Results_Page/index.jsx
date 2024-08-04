import React, { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Cart from "../../assets/img/cart.png";
import Play from "../../assets/img/play-button.png";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import { UilWindsock } from "@iconscout/react-unicons";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchSearchResult,
  fetchAddNewCourse,
} from "../../redux/features/mySearchSlice";
import { Link } from "react-router-dom";

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
            <div class="col-lg-3 col-md-4">
              <div class="search-results-filters-section">
                <div class="search-results-filters-section-result-stitles">
                  <div class="search-results-filters-title">Filters</div>
                  <div className="search-results-filters-title-selector">
                    <Dropdown onSelect={handleSortChange}>
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        className="search-results-filters-title-selector-dropdown-basic"
                      >
                        {selectedSort}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="Most Relevant">
                          Most Relevant
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Most Reviewed">
                          Most Reviewed
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Highest Rated">
                          Highest Rated
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Newest">Newest</Dropdown.Item>
                        <Dropdown.Item eventKey="Lowest Price">
                          Lowest Price
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Highest Price">
                          Highest Price
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="tb_145">
                  <div className="panel-group accordion" id="accordionfilter">
                    <div className="panel-searchpanel-default-search">
                      <div className="panel-heading" id="headingOne">
                        <div className="panel-title10">
                          <a
                            className={`collapsed-search ${
                              showTopic ? "active" : ""
                            }`}
                            onClick={() => toggleAccordion("topic")}
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded={showTopic ? "true" : "false"}
                            aria-controls="collapseOne"
                          >
                            Topic
                          </a>
                        </div>
                      </div>
                      <div
                        id="collapseOne"
                        className={`panel-collapse collapse ${
                          showTopic ? "show" : ""
                        }`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionfilter"
                      >
                        <div className="panel-body">
                          <div className="ui form">
                            <div className="grouped fields">
                              <div className=" checkbox_sign ">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox1"
                                    />
                                    <label htmlFor="checkbox1">
                                      SEO
                                      <span className="filter__counter">
                                        (428)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox2"
                                    />
                                    <label htmlFor="checkbox2">
                                      Php
                                      <span className="filter__counter">
                                        (1526)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox3"
                                    />
                                    <label htmlFor="checkbox3">
                                      Wordpress Pro
                                      <span className="filter__counter">
                                        (428)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox4"
                                    />
                                    <label htmlFor="checkbox4">
                                      WooCommerce
                                      <span className="filter__counter">
                                        (958)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox5"
                                    />
                                    <label htmlFor="checkbox5">
                                      Bootstrap
                                      <span className="filter__counter">
                                        (748)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox6"
                                    />
                                    <label htmlFor="checkbox6">
                                      Web Development
                                      <span className="filter__counter">
                                        (2256)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox7"
                                    />
                                    <label htmlFor="checkbox7">
                                      Web Design
                                      <span className="filter__counter">
                                        (4859)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox8"
                                    />
                                    <label htmlFor="checkbox8">
                                      Digital Marketing
                                      <span className="filter__counter">
                                        (2458)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox9"
                                    />
                                    <label htmlFor="checkbox9">
                                      E-commerce
                                      <span className="filter__counter">
                                        (1245)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox10"
                                    />
                                    <label htmlFor="checkbox10">
                                      Wordpress Themes
                                      <span className="filter__counter">
                                        (5879)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox11"
                                    />
                                    <label htmlFor="checkbox11">
                                      Wordpress Plugins
                                      <span className="filter__counter">
                                        (2654)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox12"
                                    />
                                    <label htmlFor="checkbox12">
                                      Wordpress Hosting
                                      <span className="filter__counter">
                                        (1485)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox13"
                                    />
                                    <label htmlFor="checkbox13">
                                      Elementor
                                      <span className="filter__counter">
                                        (3658)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" checkbox_sign">
                                <div className="inline field">
                                  <div className="  mncheck">
                                    <input
                                      type="checkbox"
                                      tabIndex="0"
                                      className="hidden"
                                      id="checkbox14"
                                    />
                                    <label htmlFor="checkbox14">
                                      Wordpress for Ecommerce
                                      <span className="filter__counter">
                                        (5894)
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-searchpanel-default-search">
                  <div className="panel-heading" id="headingTwo">
                    <div className="panel-title10">
                      <a
                        className={`collapsed-search ${
                          showLevel ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion("level")}
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded={showLevel ? "true" : "false"}
                        aria-controls="collapseTwo"
                      >
                        Level
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    className={`panel-collapse collapse ${
                      showLevel ? "show" : ""
                    }`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionfilter"
                  >
                    <div className="panel-body">
                      <div className="ui form">
                        <div className="grouped fields">
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox15"
                                />
                                <label htmlFor="checkbox15">
                                  All Levels
                                  <span className="filter__counter">
                                    (5000)
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox16"
                                />
                                <label htmlFor="checkbox16">
                                  Beginner
                                  <span className="filter__counter">
                                    (3517)
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox17"
                                />
                                <label htmlFor="checkbox17">
                                  Intermediate
                                  <span className="filter__counter">
                                    (1560)
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox18"
                                />
                                <label htmlFor="checkbox18">
                                  Expert
                                  <span className="filter__counter">(240)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Level Section */}
                {/* Language Section */}
                <div className="panel-searchpanel-default-search">
                  <div className="panel-heading" id="headingThree">
                    <div className="panel-title10">
                      <a
                        className={`collapsed-search ${
                          showLanguage ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion("language")}
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded={showLanguage ? "true" : "false"}
                        aria-controls="collapseThree"
                      >
                        Language
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className={`panel-collapse collapse ${
                      showLanguage ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionfilter"
                  >
                    <div className="panel-body">
                      <div className="ui form">
                        <div className="grouped fields">
                          {/* Example checkboxes */}
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox19"
                                />
                                <label htmlFor="checkbox19">
                                  English
                                  <span className="filter__counter">(500)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox20"
                                />
                                <label htmlFor="checkbox20">
                                  Español
                                  <span className="filter__counter">(250)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox21"
                                />
                                <label htmlFor="checkbox21">
                                  português
                                  <span className="filter__counter">(270)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox22"
                                />
                                <label htmlFor="checkbox22">
                                  日本語
                                  <span className="filter__counter">(190)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox23"
                                />
                                <label htmlFor="checkbox23">
                                  Deutsch
                                  <span className="filter__counter">(120)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox24"
                                />
                                <label htmlFor="checkbox24">
                                  Français
                                  <span className="filter__counter">(105)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox25"
                                />
                                <label htmlFor="checkbox25">
                                  Türkçe
                                  <span className="filter__counter">(90)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox26"
                                />
                                <label htmlFor="checkbox26">
                                  हिन्दी
                                  <span className="filter__counter">(80)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox27"
                                />
                                <label htmlFor="checkbox27">
                                  Italiano
                                  <span className="filter__counter">(178)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox28"
                                />
                                <label htmlFor="checkbox28">
                                  Polski
                                  <span className="filter__counter">(50)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox29"
                                />
                                <label htmlFor="checkbox29">
                                  ภาษาไทย
                                  <span className="filter__counter">(27)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox30"
                                />
                                <label htmlFor="checkbox30">
                                  Română
                                  <span className="filter__counter">(157)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox31"
                                />
                                <label htmlFor="checkbox31">
                                  Telugu
                                  <span className="filter__counter">(110)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox32"
                                />
                                <label htmlFor="checkbox32">
                                  मराठी
                                  <span className="filter__counter">(50)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Add more checkboxes as needed */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Price Section */}
                <div className="panel-searchpanel-default-search">
                  <div className="panel-heading" id="headingThree">
                    <div className="panel-title10">
                      <a
                        className={`collapsed-search ${
                          showPrice ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion("Price")}
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded={showLanguage ? "true" : "false"}
                        aria-controls="collapseThree"
                      >
                        Price
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className={`panel-collapse collapse ${
                      showPrice ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionfilter"
                  >
                    <div className="panel-body">
                      <div className="ui form">
                        <div className="grouped fields">
                          {/* Example checkboxes */}
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox33"
                                />
                                <label htmlFor="checkbox33">
                                  Paid
                                  <span className="filter__counter">
                                    (3000)
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox34"
                                />
                                <label htmlFor="checkbox34">
                                  Free
                                  <span className="filter__counter">(50)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Add more checkboxes as needed */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Language Section */}
                <div className="panel-searchpanel-default-search">
                  <div className="panel-heading" id="headingThree">
                    <div className="panel-title10">
                      <a
                        className={`collapsed-search ${
                          showFeatures ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion("Features")}
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded={showLanguage ? "true" : "false"}
                        aria-controls="collapseThree"
                      >
                        Features
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className={`panel-collapse collapse ${
                      showFeatures ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionfilter"
                  >
                    <div className="panel-body">
                      <div className="ui form">
                        <div className="grouped fields">
                          {/* Example checkboxes */}
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox35"
                                />
                                <label htmlFor="checkbox35">
                                  Coptions
                                  <span className="filter__counter">
                                    (4780)
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox36"
                                />
                                <label htmlFor="checkbox36">
                                  Quizzes
                                  <span className="filter__counter">(890)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox37"
                                />
                                <label htmlFor="checkbox37">
                                  Coding Exercises
                                  <span className="filter__counter">(350)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox38"
                                />
                                <label htmlFor="checkbox38">
                                  Practice Tests
                                  <span className="filter__counter">
                                    (1050)
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Add more checkboxes as needed */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Language Section */}
                <div className="panel-searchpanel-default-search">
                  <div className="panel-heading" id="headingThree">
                    <div className="panel-title10">
                      <a
                        className={`collapsed-search ${
                          showRating ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion("Rating")}
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded={showRating ? "true" : "false"}
                        aria-controls="collapseThree"
                      >
                        Rating
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className={`panel-collapse collapse ${
                      showRating ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionfilter"
                  >
                    <div className="panel-body">
                      <div className="ui form">
                        <div className="grouped fields">
                          {/* Example checkboxes */}
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox39"
                                />
                                <label htmlFor="checkbox39">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  500&up
                                  <span className="filter__counter">
                                    (5000)
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox40"
                                />
                                <label htmlFor="checkbox40">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  4.0 & up
                                  <span className="filter__counter">
                                    (2500)
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className=" checkbox_sign">
                              <div className="inline field">
                                <div className="  mncheck">
                                  <input
                                    type="checkbox"
                                    tabIndex="0"
                                    className="hidden"
                                    id="checkbox41"
                                  />
                                  <label htmlFor="checkbox41">
                                    <FontAwesomeIcon
                                      icon={faStar}
                                      style={{
                                        color: "#eec00c",
                                      }}
                                      className="fa-star-search"
                                    />
                                    <FontAwesomeIcon
                                      icon={faStar}
                                      style={{
                                        color: "#eec00c",
                                      }}
                                      className="fa-star-search"
                                    />
                                    <FontAwesomeIcon
                                      icon={faStar}
                                      style={{
                                        color: "#eec00c",
                                      }}
                                      className="fa-star-search"
                                    />
                                    3.0 & up
                                    <span className="filter__counter">
                                      (2500)
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Add more checkboxes as needed */}
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox42"
                                />
                                <label htmlFor="checkbox42">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    style={{
                                      color: "#eec00c",
                                    }}
                                    className="fa-star-search"
                                  />
                                  2.0 & up
                                  <span className="filter__counter">(122)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Language Section */}
                <div className="panel-searchpanel-default-search">
                  <div className="panel-heading" id="headingThree">
                    <div className="panel-title10">
                      <a
                        className={`collapsed-search ${
                          showVideoDuration ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion("VideoDuration")}
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded={showVideoDuration ? "true" : "false"}
                        aria-controls="collapseThree"
                      >
                        Video Duration
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className={`panel-collapse collapse ${
                      showVideoDuration ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionfilter"
                  >
                    <div className="panel-body">
                      <div className="ui form">
                        <div className="grouped fields">
                          {/* Example checkboxes */}
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox43"
                                />
                                <label htmlFor="checkbox43">
                                  0-2 Hours
                                  <span className="filter__counter">(500)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox44"
                                />
                                <label htmlFor="checkbox44">
                                  3-6 Hours
                                  <span className="filter__counter">(150)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox45"
                                />
                                <label htmlFor="checkbox45">
                                  7-18 Hours
                                  <span className="filter__counter">(90)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox46"
                                />
                                <label htmlFor="checkbox46">
                                  19+ Hours
                                  <span className="filter__counter">(25)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Add more checkboxes as needed */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* Language Section */}
                <div className="panel-searchpanel-default-search">
                  <div className="panel-heading" id="headingThree">
                    <div className="panel-title10">
                      <a
                        className={`collapsed-search ${
                          showCloseCaption ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion("CloseCaption")}
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded={showCloseCaption ? "true" : "false"}
                        aria-controls="collapseThree"
                      >
                        Close Caption
                      </a>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className={`panel-collapse collapse ${
                      showCloseCaption ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionfilter"
                  >
                    <div className="panel-body">
                      <div className="ui form">
                        <div className="grouped fields">
                          {/* Example checkboxes */}
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox47"
                                />
                                <label htmlFor="checkbox47">
                                  English
                                  <span className="filter__counter">(300)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox48"
                                />
                                <label htmlFor="checkbox48">
                                  Español
                                  <span className="filter__counter">(210)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox49"
                                />
                                <label htmlFor="checkbox49">
                                  português
                                  <span className="filter__counter">(170)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox50"
                                />
                                <label htmlFor="checkbox50">
                                  Italiano
                                  <span className="filter__counter">(174)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox51"
                                />
                                <label htmlFor="checkbox51">
                                  हिन्दी
                                  <span className="filter__counter">(80)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox52"
                                />
                                <label htmlFor="checkbox52">
                                  Français
                                  <span className="filter__counter">(105)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox53"
                                />
                                <label htmlFor="checkbox53">
                                  Polski
                                  <span className="filter__counter">(130)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox54"
                                />
                                <label htmlFor="checkbox54">
                                  Deutsch
                                  <span className="filter__counter">(30)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox55"
                                />
                                <label htmlFor="checkbox55">
                                  Bahasa Indonesia
                                  <span className="filter__counter">(20)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className=" checkbox_sign">
                            <div className="inline field">
                              <div className="  mncheck">
                                <input
                                  type="checkbox"
                                  tabIndex="0"
                                  className="hidden"
                                  id="checkbox56"
                                />
                                <label htmlFor="checkbox56">
                                  ภาษาไทย
                                  <span className="filter__counter">(27)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* Add more checkboxes as needed */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Language Section */}
              </div>
            </div>
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

                                <Link to="/report_history_page">
                                  <span>
                                    <i className="uil uil-windsock">
                                      <UilWindsock />
                                    </i>
                                    Report
                                  </span>
                                </Link>
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
