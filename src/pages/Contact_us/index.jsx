import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import {
    BackwardOutlined,
    HomeOutlined,
    MailOutlined,
    MobileOutlined,
} from "@ant-design/icons";
import {
    contact_us_1,
    contact_us_2,
    contact_us_3,
    contact_us_4,
} from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

function Contact_us() {
    return (
        <div className="contact_us">
            <div className="contact_us_inner">
                <div className="contact_us_container">
                    <div className="contact_us__toolbar">
                        <div className="contact_us__toolbar-home">
                            <Link to="/">Home </Link>/ Contact Us
                        </div>
                        <div className="contact_us__toolbar-back">
                            <Link to="/" className="backHome">
                                {" "}
                                <BackwardOutlined />
                                Back to Home
                            </Link>
                        </div>
                    </div>

                    <h2 className="contact_us-title">Contact Us</h2>
                </div>

                <div className="contact_us-main">
                    <div className="contact_us_container">
                        <div className="contact_us-box">
                            <Link className="contact_us-item">
                                <img
                                    src={contact_us_1}
                                    alt=""
                                    className="contact-img"
                                />
                                <span className="contact_us-item-desc">
                                    Help Center
                                </span>
                            </Link>
                            <Link className="contact_us-item">
                                <img
                                    src={contact_us_2}
                                    alt=""
                                    className="contact-img"
                                />
                                <span className="contact_us-item-desc">
                                    Blog
                                </span>
                            </Link>
                            <Link className="contact_us-item">
                                <img
                                    src={contact_us_3}
                                    alt=""
                                    className="contact-img"
                                />
                                <span className="contact_us-item-desc">
                                    Careers
                                </span>
                            </Link>
                            <Link className="contact_us-item">
                                <img
                                    src={contact_us_4}
                                    alt=""
                                    className="contact-img"
                                />
                                <span className="contact_us-item-desc">
                                    Developer Area
                                </span>
                            </Link>
                        </div>

                        <div className="contact_us-map">
                            <div className="map" style={{ width: "100%" }}>
                                <iframe
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Fpt%20university+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    title="Google Maps"
                                >
                                    <a href="https://www.gps.ie/">
                                        gps systems
                                    </a>
                                </iframe>
                            </div>
                            <div className="contact_us-content">
                                <h4 className="contact_us-content-title">
                                    Contact Information
                                </h4>
                                <div className="contact_us-content-line"></div>
                                <ul className="contact_us-content-list">
                                    <li className="contact_item">
                                        <div className="contact_info">
                                            <HomeOutlined className="contact_icon" />{" "}
                                            Main Address :
                                        </div>
                                        <p>
                                            #1235 Sks Nagar St No. 8 Phase 3,
                                            Pakhowal Road, 141001, LDH, Punjab,
                                            India
                                        </p>
                                    </li>
                                    <li className="contact_item">
                                        <div className="contact_info">
                                            <MailOutlined className="contact_icon" />{" "}
                                            Email Address :
                                        </div>
                                        <p>Info@edututsplus@gmail.com</p>
                                    </li>
                                    <li className="contact_item">
                                        <div className="contact_info">
                                            <MobileOutlined className="contact_icon" />{" "}
                                            Phone Number :
                                        </div>
                                        <p>+911234567890, 01610000000</p>
                                    </li>
                                </ul>

                                <div className="contact_social">
                                    <Link className="contact_social-link">
                                        <FontAwesomeIcon
                                            icon={faFacebookF}
                                            style={{ color: "#ffffff" }}
                                        />
                                    </Link>
                                    <Link className="contact_social-link">
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            style={{ color: "#ffffff" }}
                                        />
                                    </Link>
                                    <Link className="contact_social-link">
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                            style={{ color: "#ffffff" }}
                                        />
                                    </Link>
                                    <Link className="contact_social-link">
                                        <FontAwesomeIcon
                                            icon={faYoutube}
                                            style={{ color: "#ffffff" }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact_us;
