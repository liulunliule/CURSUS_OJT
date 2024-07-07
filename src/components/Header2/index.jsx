import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faMoon } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/scss/bootstrap.scss";
import "./index.scss";
import { Logo_dark } from "../../assets/index.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./global.jsx";
import { useDarkMode } from "./darkMode.jsx";
import { logo } from "../../assets/index.jsx";
import { search } from "../../assets/index.jsx";
import { cart } from "../../assets/index.jsx";
import { letter } from "../../assets/index.jsx";
import { bell } from "../../assets/index.jsx";
import { avatar } from "../../assets/index.jsx";
import { useDispatch } from "react-redux";
import { toggleShowAll } from "../../redux/features/savedCourseSlice.js";
import { Link } from "react-router-dom";

function Header() {
  const [isDropdownOpenLetter, setIsDropdownOpenLetter] = useState(false);
  const [isDropdownOpenBell, setIsDropdownOpenBell] = useState(false);
  const [isDropdownOpenAvatar, setIsDropdownOpenAvatar] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "https://66751909a8d2b4d072eeb172.mockapi.io/notification"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

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
            <div className="logo-container">
              <img
                src={theme !== "light" ? Logo_dark : logo}
                alt="Cursus Logo"
                className="logo"
              />
            </div>
          </div>

          <div className="header-center col-md-4">
            <div className="search-container header2-search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search for Tuts, Videos, Tutors, Tests and more..."
              />
              <img src={search} alt="Search Icon" className="search-icon" />
            </div>
          </div>

          <div className="header-right col-md-5">
            <div className="user-profile">
              <div className="icon-container">
                <img src={cart} alt="Cart" className="icon-cart" />
                <span className="header-badge">5</span>
              </div>
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
                      {messages.map((message) => (
                        <Link to="/fourlayout/messages">
                          <li
                            key={message.id}
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
                <span className="header-badge">6</span>
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
                      {messages.map((message) => (
                        <li
                          key={message.id}
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
                      ))}
                      <li
                        className={`item-view ${
                          theme === "light"
                            ? "dropLight-hover"
                            : "dropDark-hover"
                        }`}
                      >
                        View All
                      </li>
                    </ul>
                  </div>
                )}
                <span className="header-badge">1</span>
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
                      <li
                        className={`item-dask ${
                          theme !== "light" ? "item-dask-hover" : ""
                        }`}
                        onClick={toggleTheme}
                      >
                        <div className="fa-moon-container">
                          <FontAwesomeIcon icon={faMoon} className="fa-moon" />
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
                        <li className="item">Cursus dashboard</li>
                        <li className="item">Paid Memberships</li>
                        <li className="item">Settings</li>
                        <li className="item">Help</li>
                        <li className="item">Send Feedback</li>
                        <li className="item">Sign Out</li>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </ThemeProvider>
      {/* <SidebarFrontend /> */}
    </div>
  );
}

export default Header;
