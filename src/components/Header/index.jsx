import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faMoon } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/scss/bootstrap.scss";
import "./index.scss";
import { Logo_dark } from "../../assets";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./global";
import { useDarkMode } from "./darkMode";
import { logo, search, cart, letter, bell, avatar } from "../../assets";
import { useDispatch } from "react-redux";
import { toggleShowAll } from "../../redux/features/savedCourseSlice";
import { Link, useLocation } from "react-router-dom";
import { fetchUserMessage, fetchUserNotification } from "./data";

function Header() {
  const [isDropdownOpenLetter, setIsDropdownOpenLetter] = useState(false);
  const [isDropdownOpenBell, setIsDropdownOpenBell] = useState(false);
  const [isDropdownOpenAvatar, setIsDropdownOpenAvatar] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const [messages, setMessages] = useState([]);
  const [notification, setNotification] = useState([]);
  const [showCreateButton, setShowCreateButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMessages = async () => {
      const messageData = await fetchUserMessage();
      setMessages(messageData);
    };
    const fetchNotification = async () => {
      const notificateData = await fetchUserNotification();
      setNotification(notificateData);
    };
    const showHeaderSecond = () => {
      if (
        location.pathname === "/" ||
        location.pathname === "/fourlayout/instructor_studio_dashboard" ||
        location.pathname === "/fourlayout/purchased_courses_page" ||
        location.pathname === "/fourlayout/messages" ||
        location.pathname === "/fourlayout/instructor_notification" ||
        location.pathname === "/fourlayout/my_certificates" ||
        location.pathname === "/fourlayout/reviews_page_student" ||
        location.pathname === "/fourlayout/credits" ||
        location.pathname === "/fourlayout/students_statement"
      ) {
        setShowCreateButton(false);
      } else {
        setShowCreateButton(true);
      }
    };
    fetchMessages();
    fetchNotification();
    showHeaderSecond();
  }, [location]);

  const toggleDropdownLetter = () => {
    setIsDropdownOpenLetter(!isDropdownOpenLetter);
    setIsDropdownOpenBell(false);
    setIsDropdownOpenAvatar(false);
  };

  const toggleDropdownBell = () => {
    setIsDropdownOpenBell(!isDropdownOpenBell);
    setIsDropdownOpenLetter(false);
    setIsDropdownOpenAvatar(false);
  };

  const toggleDropdownAvatar = () => {
    setIsDropdownOpenAvatar(!isDropdownOpenAvatar);
    setIsDropdownOpenLetter(false);
    setIsDropdownOpenBell(false);
  };

  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      window.location.href = "/secondLayout/search_results_page";
    }
  };

  return (
    <div className="compo_header">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <header className="header">
          <div className="header-left col-md-3">
            <button
              className="menu-button"
              onClick={() => dispatch(toggleShowAll())}
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{
                  color: "#fff",
                  width: "20px",
                  height: "30px",
                }}
              />
            </button>
            <Link to="/">
              <div className="logo-container">
                <img
                  src={theme !== "light" ? Logo_dark : logo}
                  alt="Cursus Logo"
                  className="logo"
                />
              </div>
            </Link>
          </div>

          <div className="header-center col-md-4">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search for Tuts, Videos, Tutors, Tests and more..."
                onKeyDown={handleKeyPress}
              />
              <img
                src={search}
                alt="Search Icon"
                className="search-icon-header"
              />
            </div>
          </div>
          <div className="header-right col-md-5">
            {!showCreateButton && (
              <Link
                to="/thirdlayout/create_new_course"
                className={`create-button ${
                  theme !== "light" ? "dark-theme-hover" : ""
                }`}
              >
                Create New Course
              </Link>
            )}
            <div className="user-profile">
              <Link to="/secondLayout/Shopping_cart">
                <div className="icon-container">
                  <img src={cart} alt="Cart" className="icon-cart" />
                  <span className="header-badge">{messages.length}</span>
                </div>
              </Link>
              <div className="icon-container">
                <img
                  src={letter}
                  alt="Letter"
                  className="icon-letter"
                  onClick={toggleDropdownLetter}
                />
                {isDropdownOpenLetter && (
                  <div className="dropdown">
                    <ul>
                      {messages.slice(0, 3).map((message) => (
                        <Link to="/fourlayout/messages" key={message.id}>
                          <li
                            className={`item-message ${
                              theme !== "light" ? "drop-hover" : ""
                            }`}
                          >
                            <img
                              src={message.Avatar}
                              alt={message.name}
                              className="avatar-message"
                            />

                            <div className="message-content">
                              <p>{message.name}</p>
                              <p>{message.message}</p>
                              <p>{message.time}</p>
                            </div>
                          </li>
                        </Link>
                      ))}
                      <Link to="/fourlayout/messages">
                        <li
                          className={`item-view ${
                            theme === "light"
                              ? "dropLight-hover"
                              : "dropDark-hover"
                          }`}
                        >
                          View All
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
                <span className="header-badge">{messages.length}</span>
              </div>
              <div className="icon-container">
                <img
                  src={bell}
                  alt="Bell"
                  className="icon-bell"
                  onClick={toggleDropdownBell}
                />
                {isDropdownOpenBell && (
                  <div className="dropdown">
                    <ul>
                      {notification.slice(0, 3).map((notification) => (
                        <Link
                          to="/thirdlayout/reviews_page_instructor"
                          key={notification.id}
                        >
                          <li
                            className={`item-message ${
                              theme !== "light" ? "drop-hover" : ""
                            }`}
                          >
                            <img
                              src={notification.Avatar}
                              alt={notification.name}
                              className="avatar-message"
                            />

                            <div className="message-content">
                              <p>{notification.name}</p>
                              <p>{notification.message}</p>
                              <p>{notification.time}</p>
                            </div>
                          </li>
                        </Link>
                      ))}
                      <Link to="/thirdlayout/reviews_page_instructor">
                        <li
                          className={`item-view ${
                            theme === "light"
                              ? "dropLight-hover"
                              : "dropDark-hover"
                          }`}
                        >
                          View All
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
                <span className="header-badge">{notification.length}</span>
              </div>

              <div className="icon-container">
                <img
                  src={avatar}
                  alt="User Profile"
                  className="icon-user"
                  onClick={toggleDropdownAvatar}
                />
                {isDropdownOpenAvatar && (
                  <div className="dropdown">
                    <ul>
                      <li
                        className={`item-channel-my ${
                          theme === "light"
                            ? "item-channel-my-hover"
                            : "item-channel-my-dark-hover"
                        }`}
                      >
                        <div className="channel_my">
                          <div className="profile-link">
                            <img
                              src={avatar}
                              alt=""
                              className="profile-avatar"
                            />

                            <div className="profile-content">
                              <div className="profile-content-info">
                                <h6 className="profile-name">
                                  Joginder Singh
                                  <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{
                                      color: "#1da1f2",
                                    }}
                                  />
                                </h6>
                              </div>
                              <span className="channel-my-email">
                                gambol943@gmail.com
                              </span>
                            </div>
                          </div>

                          <a
                            href="/instructor_profile"
                            className="profile-instructor-link"
                          >
                            View Instructor Profile
                          </a>
                        </div>
                      </li>
                      <hr />
                      <div className="dropItemText">
                        <Link to="/fourlayout/instructor_studio_dashboard">
                          <li className="item">Cursus dashboard</li>
                        </Link>
                        <Link to="/secondlayout/paid_membership_page">
                          <li className="item">Paid Memberships</li>
                        </Link>
                        <Link to="/Setting_Page/Account_Tab">
                          <li className="item">Settings</li>
                        </Link>
                        <Link to="/help">
                          <li className="item">Help</li>
                        </Link>
                        <Link to="/send_feedback_page">
                          <li className="item">Send Feedback</li>
                        </Link>
                        <Link to="/login">
                          <li className="item">Sign Out</li>
                        </Link>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default Header;
