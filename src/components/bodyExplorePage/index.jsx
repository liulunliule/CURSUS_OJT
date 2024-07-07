import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import thumbnailCourse from "../../assets/img/thumbnail_live.jpg";
import thumbnailCourse2 from "../../assets/img/thumbnail_live2.jpg";
import thumbnailCourse3 from "../../assets/img/thumbnail_live3.jpg";
import thumbnailCourse4 from "../../assets/img/thumbnail_live4.jpg";
import menu_course from "../../assets/img/menu_course.png";
import "./index.scss";

function BodyExplorePage() {
    return (
        <div className="bodyExplore">
            <div className="explore_page__wrapper_courseAll">
                <div className="showInformationOfCourse">
                    <div className="thumbnail_course_information">
                        <Link>
                            <img
                                className="thumbnailCourse"
                                src={thumbnailCourse}
                                alt=""
                            />
                        </Link>
                        <div className="membrane_thumbnail"></div>
                        <div className="other_thumbnail">
                            <div className="voteOfThumbnail">
                                <StarOutlined className="voteOfThumbnail_star" />
                                <span className="voteOfThumbnail_number">
                                    4.5
                                </span>
                            </div>
                            <div className="other_thumbnail_badge_seller_sqr"></div>
                            <div className="other_thumbnail_badge_seller">
                                <span className="other_thumbnail_badge_seller_title">
                                    BESTSELLER
                                </span>
                            </div>
                            <span className="other_thumbnail_crse_timer">
                                25 hours
                            </span>
                        </div>
                    </div>
                    <div className="viewsAndPostDate">
                        <div className="viewsAndPostDate_real">
                            <span>109k views</span>
                            <span>•</span>
                            <span> 15 days ago</span>
                        </div>
                        <div className="viewsAndPostDate_menu">
                            <img
                                className="menu_course"
                                src={menu_course}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="title_course">
                        <Link
                            to="/course_detail/course_detail_about"
                            className="titleOfCourse"
                        >
                            to="/course_detail/course_detail_about" Complete
                            Python Bootcamp: Go from zero to hero in Python 3
                        </Link>
                    </div>
                    <div className="fieldOfCourse">
                        <Link className="field_course">
                            Web Development | Python
                        </Link>
                    </div>
                    <div className="other_course">
                        <p className="other_By">
                            By{" "}
                            <Link className="other_courseName">John Doe</Link>
                        </p>
                        <div className="price_course">
                            <Link>
                                <ShoppingCartOutlined className="cart_course" />
                            </Link>{" "}
                            <div>$10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore_page__wrapper_courseAll">
                <div className="showInformationOfCourse">
                    <div className="thumbnail_course_information">
                        <Link>
                            <img
                                className="thumbnailCourse"
                                src={thumbnailCourse2}
                                alt=""
                            />
                        </Link>
                        <div className="membrane_thumbnail"></div>
                        <div className="other_thumbnail">
                            <div className="voteOfThumbnail">
                                <StarOutlined className="voteOfThumbnail_star" />
                                <span className="voteOfThumbnail_number">
                                    4.5
                                </span>
                            </div>
                            <div className="other_thumbnail_badge_seller_sqr"></div>
                            <div className="other_thumbnail_badge_seller">
                                <span className="other_thumbnail_badge_seller_title">
                                    BESTSELLER
                                </span>
                            </div>
                            <span className="other_thumbnail_crse_timer">
                                25 hours
                            </span>
                        </div>
                    </div>
                    <div className="viewsAndPostDate">
                        <div className="viewsAndPostDate_real">
                            <span>109k views</span>
                            <span>•</span>
                            <span> 15 days ago</span>
                        </div>
                        <div className="viewsAndPostDate_menu">
                            <img
                                className="menu_course"
                                src={menu_course}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="title_course">
                        <Link
                            to="/course_detail/course_detail_about"
                            className="titleOfCourse"
                        >
                            Complete Python Bootcamp: Go from zero to hero in
                            Python 3
                        </Link>
                    </div>
                    <div className="fieldOfCourse">
                        <Link className="field_course">
                            Web Development | Python
                        </Link>
                    </div>
                    <div className="other_course">
                        <p className="other_By">
                            By{" "}
                            <Link className="other_courseName">John Doe</Link>
                        </p>
                        <div className="price_course">
                            <Link>
                                <ShoppingCartOutlined className="cart_course" />
                            </Link>{" "}
                            <div>$10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore_page__wrapper_courseAll">
                <div className="showInformationOfCourse">
                    <div className="thumbnail_course_information">
                        <Link>
                            <img
                                className="thumbnailCourse"
                                src={thumbnailCourse3}
                                alt=""
                            />
                        </Link>
                        <div className="membrane_thumbnail"></div>
                        <div className="other_thumbnail">
                            <div className="voteOfThumbnail">
                                <StarOutlined className="voteOfThumbnail_star" />
                                <span className="voteOfThumbnail_number">
                                    4.5
                                </span>
                            </div>
                            <div className="other_thumbnail_badge_seller_sqr"></div>
                            <div className="other_thumbnail_badge_seller">
                                <span className="other_thumbnail_badge_seller_title">
                                    BESTSELLER
                                </span>
                            </div>
                            <span className="other_thumbnail_crse_timer">
                                25 hours
                            </span>
                        </div>
                    </div>
                    <div className="viewsAndPostDate">
                        <div className="viewsAndPostDate_real">
                            <span>109k views</span>
                            <span>•</span>
                            <span> 15 days ago</span>
                        </div>
                        <div className="viewsAndPostDate_menu">
                            <img
                                className="menu_course"
                                src={menu_course}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="title_course">
                        <Link
                            to="/course_detail/course_detail_about"
                            className="titleOfCourse"
                        >
                            Complete Python Bootcamp: Go from zero to hero in
                            Python 3
                        </Link>
                    </div>
                    <div className="fieldOfCourse">
                        <Link className="field_course">
                            Web Development | Python
                        </Link>
                    </div>
                    <div className="other_course">
                        <p className="other_By">
                            By{" "}
                            <Link className="other_courseName">John Doe</Link>
                        </p>
                        <div className="price_course">
                            <Link>
                                <ShoppingCartOutlined className="cart_course" />
                            </Link>{" "}
                            <div>$10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore_page__wrapper_courseAll">
                <div className="showInformationOfCourse">
                    <div className="thumbnail_course_information">
                        <Link>
                            <img
                                className="thumbnailCourse"
                                src={thumbnailCourse4}
                                alt=""
                            />
                        </Link>
                        <div className="membrane_thumbnail"></div>
                        <div className="other_thumbnail">
                            <div className="voteOfThumbnail">
                                <StarOutlined className="voteOfThumbnail_star" />
                                <span className="voteOfThumbnail_number">
                                    4.5
                                </span>
                            </div>
                            <div className="other_thumbnail_badge_seller_sqr"></div>
                            <div className="other_thumbnail_badge_seller">
                                <span className="other_thumbnail_badge_seller_title">
                                    BESTSELLER
                                </span>
                            </div>
                            <span className="other_thumbnail_crse_timer">
                                25 hours
                            </span>
                        </div>
                    </div>
                    <div className="viewsAndPostDate">
                        <div className="viewsAndPostDate_real">
                            <span>109k views</span>
                            <span>•</span>
                            <span> 15 days ago</span>
                        </div>
                        <div className="viewsAndPostDate_menu">
                            <img
                                className="menu_course"
                                src={menu_course}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="title_course">
                        <Link
                            to="/course_detail/course_detail_about"
                            className="titleOfCourse"
                        >
                            Complete Python Bootcamp: Go from zero to hero in
                            Python 3
                        </Link>
                    </div>
                    <div className="fieldOfCourse">
                        <Link className="field_course">
                            Web Development | Python
                        </Link>
                    </div>
                    <div className="other_course">
                        <p className="other_By">
                            By{" "}
                            <Link className="other_courseName">John Doe</Link>
                        </p>
                        <div className="price_course">
                            <Link>
                                <ShoppingCartOutlined className="cart_course" />
                            </Link>{" "}
                            <div>$10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore_page__wrapper_courseAll">
                <div className="showInformationOfCourse">
                    <div className="thumbnail_course_information">
                        <Link>
                            <img
                                className="thumbnailCourse"
                                src={thumbnailCourse3}
                                alt=""
                            />
                        </Link>
                        <div className="membrane_thumbnail"></div>
                        <div className="other_thumbnail">
                            <div className="voteOfThumbnail">
                                <StarOutlined className="voteOfThumbnail_star" />
                                <span className="voteOfThumbnail_number">
                                    4.5
                                </span>
                            </div>
                            <div className="other_thumbnail_badge_seller_sqr"></div>
                            <div className="other_thumbnail_badge_seller">
                                <span className="other_thumbnail_badge_seller_title">
                                    BESTSELLER
                                </span>
                            </div>
                            <span className="other_thumbnail_crse_timer">
                                25 hours
                            </span>
                        </div>
                    </div>
                    <div className="viewsAndPostDate">
                        <div className="viewsAndPostDate_real">
                            <span>109k views</span>
                            <span>•</span>
                            <span> 15 days ago</span>
                        </div>
                        <div className="viewsAndPostDate_menu">
                            <img
                                className="menu_course"
                                src={menu_course}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="title_course">
                        <Link
                            to="/course_detail/course_detail_about"
                            className="titleOfCourse"
                        >
                            Complete Python Bootcamp: Go from zero to hero in
                            Python 3
                        </Link>
                    </div>
                    <div className="fieldOfCourse">
                        <Link className="field_course">
                            Web Development | Python
                        </Link>
                    </div>
                    <div className="other_course">
                        <p className="other_By">
                            By{" "}
                            <Link className="other_courseName">John Doe</Link>
                        </p>
                        <div className="price_course">
                            <Link>
                                <ShoppingCartOutlined className="cart_course" />
                            </Link>{" "}
                            <div>$10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore_page__wrapper_courseAll">
                <div className="showInformationOfCourse">
                    <div className="thumbnail_course_information">
                        <Link>
                            <img
                                className="thumbnailCourse"
                                src={thumbnailCourse4}
                                alt=""
                            />
                        </Link>
                        <div className="membrane_thumbnail"></div>
                        <div className="other_thumbnail">
                            <div className="voteOfThumbnail">
                                <StarOutlined className="voteOfThumbnail_star" />
                                <span className="voteOfThumbnail_number">
                                    4.5
                                </span>
                            </div>
                            <div className="other_thumbnail_badge_seller_sqr"></div>
                            <div className="other_thumbnail_badge_seller">
                                <span className="other_thumbnail_badge_seller_title">
                                    BESTSELLER
                                </span>
                            </div>
                            <span className="other_thumbnail_crse_timer">
                                25 hours
                            </span>
                        </div>
                    </div>
                    <div className="viewsAndPostDate">
                        <div className="viewsAndPostDate_real">
                            <span>109k views</span>
                            <span>•</span>
                            <span> 15 days ago</span>
                        </div>
                        <div className="viewsAndPostDate_menu">
                            <img
                                className="menu_course"
                                src={menu_course}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="title_course">
                        <Link
                            to="/course_detail/course_detail_about"
                            className="titleOfCourse"
                        >
                            Complete Python Bootcamp: Go from zero to hero in
                            Python 3
                        </Link>
                    </div>
                    <div className="fieldOfCourse">
                        <Link className="field_course">
                            Web Development | Python
                        </Link>
                    </div>
                    <div className="other_course">
                        <p className="other_By">
                            By{" "}
                            <Link className="other_courseName">John Doe</Link>
                        </p>
                        <div className="price_course">
                            <Link>
                                <ShoppingCartOutlined className="cart_course" />
                            </Link>{" "}
                            <div>$10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore_page__wrapper_courseAll">
                <div className="showInformationOfCourse">
                    <div className="thumbnail_course_information">
                        <Link>
                            <img
                                className="thumbnailCourse"
                                src={thumbnailCourse2}
                                alt=""
                            />
                        </Link>
                        <div className="membrane_thumbnail"></div>
                        <div className="other_thumbnail">
                            <div className="voteOfThumbnail">
                                <StarOutlined className="voteOfThumbnail_star" />
                                <span className="voteOfThumbnail_number">
                                    4.5
                                </span>
                            </div>
                            <div className="other_thumbnail_badge_seller_sqr"></div>
                            <div className="other_thumbnail_badge_seller">
                                <span className="other_thumbnail_badge_seller_title">
                                    BESTSELLER
                                </span>
                            </div>
                            <span className="other_thumbnail_crse_timer">
                                25 hours
                            </span>
                        </div>
                    </div>
                    <div className="viewsAndPostDate">
                        <div className="viewsAndPostDate_real">
                            <span>109k views</span>
                            <span>•</span>
                            <span> 15 days ago</span>
                        </div>
                        <div className="viewsAndPostDate_menu">
                            <img
                                className="menu_course"
                                src={menu_course}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="title_course">
                        <Link
                            to="/course_detail/course_detail_about"
                            className="titleOfCourse"
                        >
                            Complete Python Bootcamp: Go from zero to hero in
                            Python 3
                        </Link>
                    </div>
                    <div className="fieldOfCourse">
                        <Link className="field_course">
                            Web Development | Python
                        </Link>
                    </div>
                    <div className="other_course">
                        <p className="other_By">
                            By{" "}
                            <Link className="other_courseName">John Doe</Link>
                        </p>
                        <div className="price_course">
                            <Link>
                                <ShoppingCartOutlined className="cart_course" />
                            </Link>{" "}
                            <div>$10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore_page__wrapper_courseAll">
                <div className="showInformationOfCourse">
                    <div className="thumbnail_course_information">
                        <Link>
                            <img
                                className="thumbnailCourse"
                                src={thumbnailCourse}
                                alt=""
                            />
                        </Link>
                        <div className="membrane_thumbnail"></div>
                        <div className="other_thumbnail">
                            <div className="voteOfThumbnail">
                                <StarOutlined className="voteOfThumbnail_star" />
                                <span className="voteOfThumbnail_number">
                                    4.5
                                </span>
                            </div>
                            <div className="other_thumbnail_badge_seller_sqr"></div>
                            <div className="other_thumbnail_badge_seller">
                                <span className="other_thumbnail_badge_seller_title">
                                    BESTSELLER
                                </span>
                            </div>
                            <span className="other_thumbnail_crse_timer">
                                25 hours
                            </span>
                        </div>
                    </div>
                    <div className="viewsAndPostDate">
                        <div className="viewsAndPostDate_real">
                            <span>109k views</span>
                            <span>•</span>
                            <span> 15 days ago</span>
                        </div>
                        <div className="viewsAndPostDate_menu">
                            <img
                                className="menu_course"
                                src={menu_course}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="title_course">
                        <Link
                            to="/course_detail/course_detail_about"
                            className="titleOfCourse"
                        >
                            Complete Python Bootcamp: Go from zero to hero in
                            Python 3
                        </Link>
                    </div>
                    <div className="fieldOfCourse">
                        <Link className="field_course">
                            Web Development | Python
                        </Link>
                    </div>
                    <div className="other_course">
                        <p className="other_By">
                            By{" "}
                            <Link className="other_courseName">John Doe</Link>
                        </p>
                        <div className="price_course">
                            <Link>
                                <ShoppingCartOutlined className="cart_course" />
                            </Link>{" "}
                            <div>$10</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyExplorePage;
