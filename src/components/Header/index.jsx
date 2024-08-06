import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleCheck,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/scss/bootstrap.scss";
import "./index.scss";
import { Logo_dark, logo, search, cart, letter, bell } from "../../assets";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./global";
import { useDarkMode } from "./darkMode";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowAll } from "../../redux/features/savedCourseSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { doLogout } from "../../redux/features/userSlice";
import {
  fetchUpdateMessage,
  fetchUpdateNotification,
  fetchUserMessage,
  fetchUserNotification,
} from "../../redux/features/myHeaderSlice";
import { fetchSearchResult } from "../../redux/features/mySearchSlice";
import { fetchShoppingCart } from "../../redux/features/shoppingCartSlice";
import { toast } from "react-toastify";

function Header() {
  const [isDropdownOpenLetter, setIsDropdownOpenLetter] = useState(false);
  const [isDropdownOpenBell, setIsDropdownOpenBell] = useState(false);
  const [isDropdownOpenAvatar, setIsDropdownOpenAvatar] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const userMessage = useSelector((state) => state.myHeader.messages);
  const userNotification = useSelector((state) => state.myHeader.notification);
  const items = useSelector((state) => state.shoppingCart.items);
  // const [showCreateButton, setShowCreateButton] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.user.account);
  const userId = account.id || "";
  const role = account.role;
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserMessage(userId));
      dispatch(fetchUserNotification(userId));
      dispatch(fetchShoppingCart(userId));
    }

    // const showHeaderSecond = () => {
    //   const paths = [
    //     "/fourlayout/instructor_studio_dashboard",
    //     "/fourlayout/purchased_courses_page",
    //     "/fourlayout/messages",
    //     "/fourlayout/instructor_notification",
    //     "/fourlayout/my_certificates",
    //     "/fourlayout/reviews_page_student",
    //     "/fourlayout/credits",
    //     "/fourlayout/students_statement",
    //   ];
    //   setShowCreateButton(paths.includes(location.pathname));
    // };
    // showHeaderSecond();
  }, [dispatch, location.pathname, userId]);

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
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResult(query));
    }
  }, [dispatch, query]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      window.location.href = "/secondLayout/search_results_page";
    }
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = async () => {
    dispatch(doLogout());
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const filteredUserMess = userMessage.filter(
    (post) => post.userId === userId && post.seen === true
  );

  const handleUpdateMess = (messageId) => {
    dispatch(fetchUpdateMessage({ messageId, userId }))
      .then((response) => {
        console.log("Update response:", response);
        toast.success("Seen");
      })
      .catch((error) => {
        console.error("Update error:", error);
        toast.error("See fali. Please try again.");
      });
  };

  const filteredUserNoti = userNotification.filter(
    (post) => post.userId === userId && post.seen === true
  );

  const handleUpdateNoti = (notiId) => {
    dispatch(fetchUpdateNotification({ notiId, userId }))
      .then((response) => {
        console.log("Update response:", response);
        toast.success("Seen");
      })
      .catch((error) => {
        console.error("Update error:", error);
        toast.error("See fali. Please try again.");
      });
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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <img
                src={search}
                alt="Search Icon"
                className="search-icon-header"
              />
            </div>
          </div>
          <div className="header-right col-md-5">
            {role === true && (
              <Link
                to="/thirdlayout/create_new_course"
                className={`create-button ${
                  theme !== "light" ? "dark-theme-hover" : ""
                }`}
              >
                Create New Course
              </Link>
            )}
            {isAuthenticated === false ? (
              <div className="header_home_cta">
                <button className="btn-login" onClick={handleLogin}>
                  Login
                </button>
                <button className="btn-signup" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="user-profile">
                <Link to="/secondLayout/Shopping_cart">
                  <div className="icon-container">
                    <img src={cart} alt="Cart" className="icon-cart" />
                    <span className="header-badge">{items.length}</span>
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
                        {filteredUserMess.length === 0 ? (
                          <li className="no-messages">No messages</li>
                        ) : (
                          filteredUserMess.slice(0, 3).map((message) => (
                            <Link
                              to="/fourlayout/messages"
                              key={message.id}
                              onClick={() => handleUpdateMess(message.id)}
                            >
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
                          ))
                        )}
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

                  <span className="header-badge">
                    {filteredUserMess.length}
                  </span>
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
                        {filteredUserNoti.length === 0 ? (
                          <li className="no-messages">No notifications </li>
                        ) : (
                          filteredUserNoti.slice(0, 3).map((notification) => (
                            <Link
                              to="/thirdlayout/reviews_page_instructor"
                              key={notification.id}
                              onClick={() => handleUpdateNoti(notification.id)}
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
                          ))
                        )}
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
                  <span className="header-badge">
                    {filteredUserNoti.length}
                  </span>
                </div>

                <div className="icon-container">
                  <img
                    src={account.avatar}
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
                                src={account.avatar}
                                alt=""
                                className="profile-avatar"
                              />

                              <div className="profile-content">
                                <div className="profile-content-info">
                                  <h6 className="profile-name">
                                    {account.userName}
                                    <FontAwesomeIcon
                                      icon={faCircleCheck}
                                      style={{
                                        color: "#1da1f2",
                                      }}
                                    />
                                  </h6>
                                </div>
                                <span className="channel-my-email">
                                  {account.email}
                                </span>
                              </div>
                            </div>

                            {role === true ? (
                              <>
                                <a
                                  href="/instructor_profile"
                                  className="profile-instructor-link"
                                >
                                  View My Profile
                                </a>
                              </>
                            ) : role === false ? (
                              <a
                                href="/student_profile"
                                className="profile-instructor-link"
                              >
                                View My Profile
                              </a>
                            ) : null}
                          </div>
                        </li>
                        <hr />
                        <li
                          className={`item-dask ${
                            theme !== "light" ? "item-dask-hover" : ""
                          }`}
                          onClick={toggleTheme}
                        >
                          <div className="fa-moon-container">
                            <FontAwesomeIcon
                              icon={faMoon}
                              className="fa-moon"
                            />
                          </div>
                          <span className="nightmode">Night Mode</span>
                          <button
                            className={`toggle-button ${
                              theme === "dark" ? "on" : ""
                            }`}
                            onClick={toggleTheme}
                          ></button>
                        </li>
                        <hr />
                        <div className="dropItemText">
                          {role === true ? (
                            <>
                              <Link to="/thirdlayout/instructor_studio_dashboard">
                                <li className="item">Cursus Dashboard</li>
                              </Link>
                            </>
                          ) : role === false ? (
                            <Link to="/fourlayout/student_studio_dashboard">
                              <li className="item">Cursus Dashboard</li>
                            </Link>
                          ) : null}
                          <Link to="/secondLayout/paid_membership_page">
                            <li className="item">Paid Memberships</li>
                          </Link>
                          <Link to="/setting_page/account_tab">
                            <li className="item">Settings</li>
                          </Link>
                          <Link to="/help">
                            <li className="item">Help</li>
                          </Link>
                          <Link to="/send_feedback_page">
                            <li className="item">Send Feedback</li>
                          </Link>
                          <li className="item" onClick={handleLogout}>
                            Sign Out
                          </li>
                        </div>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default Header;
