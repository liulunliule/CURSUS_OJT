import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCircleCheck,
    faMoon,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/scss/bootstrap.scss";
import "./index.scss";
import { Logo_dark } from "../../assets";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./global";
import { useDarkMode } from "./darkMode";
import { logo, search, cart, letter, bell, avatar } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowAll } from "../../redux/features/savedCourseSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { doLogout } from "../../redux/features/userSlice";
import {
    fetchUserMessage,
    fetchUserNotification,
} from "../../redux/features/myHeaderSlice";
import { toast } from "react-toastify";

function Header() {
    const [isDropdownOpenLetter, setIsDropdownOpenLetter] = useState(false);
    const [isDropdownOpenBell, setIsDropdownOpenBell] = useState(false);
    const [isDropdownOpenAvatar, setIsDropdownOpenAvatar] = useState(false);
    const [theme, toggleTheme] = useDarkMode();
    const userMessage = useSelector((state) => state.myHeader.messages);
    const userNotification = useSelector(
        (state) => state.myHeader.notification
    );
    const [showCreateButton, setShowCreateButton] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.user.account);
    // console.log("Check out: ", account);

    useEffect(() => {
        dispatch(fetchUserMessage());
        dispatch(fetchUserNotification());

        const showHeaderSecond = () => {
            const paths = [
                "/fourlayout/instructor_studio_dashboard",
                "/fourlayout/purchased_courses_page",
                "/fourlayout/messages",
                "/fourlayout/instructor_notification",
                "/fourlayout/my_certificates",
                "/fourlayout/reviews_page_student",
                "/fourlayout/credits",
                "/fourlayout/students_statement",
            ];
            setShowCreateButton(paths.includes(location.pathname));
        };
        showHeaderSecond();
    }, [dispatch, location.pathname]);

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
        // Clear data redux
        dispatch(doLogout());
        toast.success("Log out successfully");
        navigate("/login");
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
                        {isAuthenticated === false ? (
                            <div className="header_home_cta">
                                <button
                                    className="btn-login"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                                <button
                                    className="btn-signup"
                                    onClick={handleSignUp}
                                >
                                    Sign up
                                </button>
                            </div>
                        ) : (
                            <div className="user-profile">
                                <Link to="/secondLayout/Shopping_cart">
                                    <div className="icon-container">
                                        <img
                                            src={cart}
                                            alt="Cart"
                                            className="icon-cart"
                                        />
                                        <span className="header-badge">
                                            {userMessage.length}
                                        </span>
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
                                                {userMessage
                                                    .slice(0, 3)
                                                    .map((message) => (
                                                        <Link
                                                            to="/fourlayout/messages"
                                                            key={message.id}
                                                        >
                                                            <li
                                                                className={`item-message ${
                                                                    theme !==
                                                                    "light"
                                                                        ? "drop-hover"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <img
                                                                    src={
                                                                        message.Avatar
                                                                    }
                                                                    alt={
                                                                        message.name
                                                                    }
                                                                    className="avatar-message"
                                                                />
                                                                <div className="message-content">
                                                                    <p>
                                                                        {
                                                                            message.name
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        {
                                                                            message.message
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        {
                                                                            message.time
                                                                        }
                                                                    </p>
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
                                    <span className="header-badge">
                                        {userMessage.length}
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
                                                {userNotification
                                                    .slice(0, 3)
                                                    .map((notification) => (
                                                        <Link
                                                            to="/thirdlayout/reviews_page_instructor"
                                                            key={
                                                                notification.id
                                                            }
                                                        >
                                                            <li
                                                                className={`item-message ${
                                                                    theme !==
                                                                    "light"
                                                                        ? "drop-hover"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <img
                                                                    src={
                                                                        notification.Avatar
                                                                    }
                                                                    alt={
                                                                        notification.name
                                                                    }
                                                                    className="avatar-message"
                                                                />
                                                                <div className="message-content">
                                                                    <p>
                                                                        {
                                                                            notification.name
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        {
                                                                            notification.message
                                                                        }
                                                                    </p>
                                                                    <p>
                                                                        {
                                                                            notification.time
                                                                        }
                                                                    </p>
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
                                    <span className="header-badge">
                                        {userNotification.length}
                                    </span>
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
                                                                        {
                                                                            account.userName
                                                                        }
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCircleCheck
                                                                            }
                                                                            style={{
                                                                                color: "#1da1f2",
                                                                            }}
                                                                        />
                                                                    </h6>
                                                                </div>
                                                                <span className="channel-my-email">
                                                                    {
                                                                        account.email
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <a
                                                            href="/instructor_profile"
                                                            className="profile-instructor-link"
                                                        >
                                                            View Instructor
                                                            Profile
                                                        </a>
                                                    </div>
                                                </li>
                                                <hr />
                                                <li
                                                    className={`item-dask ${
                                                        theme !== "light"
                                                            ? "item-dask-hover"
                                                            : ""
                                                    }`}
                                                    onClick={toggleTheme}
                                                >
                                                    <div className="fa-moon-container">
                                                        <FontAwesomeIcon
                                                            icon={faMoon}
                                                            className="fa-moon"
                                                        />
                                                    </div>
                                                    <span className="nightmode">
                                                        Night Mode
                                                    </span>
                                                    <button
                                                        className={`toggle-button ${
                                                            theme === "dark"
                                                                ? "on"
                                                                : ""
                                                        }`}
                                                        onClick={toggleTheme}
                                                    ></button>
                                                </li>
                                                <hr />
                                                <div className="dropItemText">
                                                    <li className="item">
                                                        Cursus dashboard
                                                    </li>
                                                    <li className="item">
                                                        Paid Memberships
                                                    </li>
                                                    <li className="item">
                                                        Settings
                                                    </li>
                                                    <li className="item">
                                                        Help
                                                    </li>
                                                    <li className="item">
                                                        Send Feedback
                                                    </li>
                                                    <li
                                                        className="item"
                                                        onClick={() =>
                                                            handleLogout()
                                                        }
                                                    >
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
