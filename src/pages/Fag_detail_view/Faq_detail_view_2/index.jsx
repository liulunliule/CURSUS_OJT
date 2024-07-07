import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faSellsy } from "@fortawesome/free-brands-svg-icons/faSellsy";
import { faRuler } from "@fortawesome/free-solid-svg-icons/faRuler";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons/faBarsProgress";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons/faHelmetSafety";
import { SearchOutlined } from "@ant-design/icons";

function Faq_detail_view_2() {
    return (
        <div className="promotion">
            <div className="promotion-container">
                <div className="promotion__inner">
                    <div className="promotion__toolbar">
                        <div className="promotion__toolbar-home">
                            <Link to="/">Home </Link>/{" "}
                            <Link to="/">Selling & Promotion </Link>
                            /Pricing & Coupons
                        </div>
                        <div className="promotion__toolbar-search">
                            <div className="promotion__toolbar-icon">
                                <SearchOutlined />
                            </div>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="promotion__toolbar-input"
                                placeholder="Search"
                            />
                        </div>
                    </div>

                    <h1 className="promotion__title">
                        Promote Your Course With Coupons and Referral Links
                    </h1>
                </div>
            </div>
            <div className="promotion__main">
                <div className="promotion-container">
                    <div className="promotion__catalogue-wrapper">
                        <div className="promotion__catalogue">
                            <h4 className="promotion__catalogue-title">
                                Instructor Topics
                            </h4>
                            <ul>
                                <li className="promotion__catalogue-item">
                                    <div className="promotion__catalogue-item-icon">
                                        <FontAwesomeIcon
                                            icon={faCartShopping}
                                        />
                                    </div>{" "}
                                    <NavLink to="/secondLayout/Faq_detail_view-1">
                                        Payments
                                    </NavLink>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <div className="promotion__catalogue-item-icon">
                                        <FontAwesomeIcon icon={faSellsy} />
                                    </div>{" "}
                                    <NavLink to="/secondLayout/Faq_detail_view-2">
                                        Selling &amp; Promotion
                                    </NavLink>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <div className="promotion__catalogue-item-icon">
                                        <FontAwesomeIcon
                                            icon={faCartShopping}
                                        />
                                    </div>{" "}
                                    <Link to="/term">Quality Standards</Link>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <div className="promotion__catalogue-item-icon">
                                        <FontAwesomeIcon icon={faRuler} />
                                    </div>{" "}
                                    <Link to="/term">Course Building</Link>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <div className="promotion__catalogue-item-icon">
                                        <FontAwesomeIcon
                                            icon={faBarsProgress}
                                        />
                                    </div>{" "}
                                    <Link to="/term">Course Management</Link>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <div className="promotion__catalogue-item-icon">
                                        <FontAwesomeIcon
                                            icon={faHelmetSafety}
                                        />
                                    </div>{" "}
                                    <Link to="/term">Trust &amp; Safety</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="promotion__catalogue">
                            <h4 className="promotion__catalogue-title">
                                Related Articles
                            </h4>
                            <ul>
                                <li className="promotion__catalogue-item">
                                    <Link to="/promotion">
                                        Instructor Revenue Share
                                    </Link>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <Link to="/term">
                                        Coupons & Course Referral Links: Rules
                                        and Guidelines
                                    </Link>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <Link to="/term">Rules and Guidelines</Link>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <Link to="/term">
                                        Instructor Promotional Agreements and
                                        Cursus Deals
                                    </Link>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <Link to="/term">Cursus Coupons: FAQ</Link>
                                </li>
                                <li className="promotion__catalogue-item">
                                    <Link to="/term">
                                        How to Select Your Payout Method And
                                        Become a Premium Instructor
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <button className="promotion__catalogue-btn">
                            <Link>Submit A Request</Link>
                        </button>
                    </div>
                    <div className="promotion__content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur volutpat maximus pellentesque.
                            Integer sem enim, luctus at nibh at, condimentum
                            sagittis sapien. Sed tempus ipsum erat, sit amet
                            efficitur velit interdum eu. Vestibulum hendrerit id
                            dolor eu scelerisque. Phasellus ex dui, consequat
                            nec feugiat eu, dapibus eget ante. Sed sodales
                            interdum dui, at euismod mi feugiat hendrerit.
                            Suspendisse auctor libero in tempor mollis. Nulla et
                            dolor velit. Aliquam sit amet luctus quam.
                        </p>
                        <div className="promotion__content-1">
                            <div className="promotion__content-title">
                                Course referral links
                            </div>
                            <p>
                                Nam a egestas libero, eget eleifend turpis. Sed
                                id ipsum a ipsum aliquam laoreet sit amet sit
                                amet nibh. Proin dapibus, libero sed posuere
                                rhoncus, orci mi cursus enim, at accumsan eros
                                massa lacinia mi. Nunc eget finibus felis,
                                volutpat malesuada sem. Aliquam ac nisl
                                pellentesque, varius neque sit amet, porttitor
                                nunc. Nullam elit tellus, dapibus non eleifend
                                sed, hendrerit eget velit. Aliquam ut felis
                                dictum, tincidunt magna vitae, aliquam massa. In
                                porttitor tristique quam, non dignissim sapien
                                pharetra ultrices. Cras non ante non velit
                                mollis mollis. Pellentesque habitant morbi
                                tristique senectus et netus et malesuada fames
                                ac turpis egestas. Quisque et bibendum urna,
                                eget consequat sapien. Integer sed condimentum
                                nibh. Integer id neque tristique, lobortis massa
                                ac, dapibus nibh. Donec nulla odio, porttitor ac
                                rutrum eget, volutpat a velit. Curabitur et enim
                                quis diam congue dictum et vitae dui. Nulla
                                tortor orci, luctus a pretium vel, ultrices
                                porta nisl.
                            </p>
                            <p>
                                Etiam lobortis dictum tincidunt. Interdum et
                                malesuada fames ac ante ipsum primis in
                                faucibus. Suspendisse ultricies efficitur dui,
                                suscipit tempus elit condimentum quis. Duis sed
                                vestibulum tortor, eget cursus odio.
                            </p>
                        </div>

                        <div className="promotion__content-1">
                            <h4 className="promotion__content-title">
                                How to create a coupon
                            </h4>

                            <ol className="promotion__content-desc">
                                <li className="promotion__content-desc-item">
                                    <Link className="promotion__content-desc-link">
                                        Navigate to the{" "}
                                        <b>course Promotions page</b>
                                    </Link>
                                </li>
                                <li className="promotion__content-desc-item">
                                    <Link>
                                        Click <b>Create new coupon</b>
                                    </Link>
                                </li>
                                <li className="promotion__content-desc-item">
                                    <Link>
                                        <b>Select the coupon type</b>
                                    </Link>
                                </li>
                                <li className="promotion__content-desc-item">
                                    <Link>
                                        If applicable, choose your coupon price
                                    </Link>
                                </li>
                                <li className="promotion__content-desc-item">
                                    <Link>
                                        Edit the coupon code if you wish (the
                                        coupon code must be between 6 and 20
                                        characters, and can only contain
                                        alphanumeric characters (A-Z, 0-9) ,
                                        periods ("."), dashes ("-") or
                                        underscores ("_").
                                    </Link>
                                </li>
                                <li className="promotion__content-desc-item">
                                    <Link>
                                        Click <b>Review coupon</b> to double
                                        check the coupon’s details
                                    </Link>
                                </li>
                                <li className="promotion__content-desc-item">
                                    <Link>
                                        Click <b>Create coupon</b>
                                    </Link>
                                </li>
                            </ol>
                        </div>
                        <div className="promotion__content-1">
                            <div className="promotion__content-title">
                                How to share your coupon code
                            </div>
                            <p>
                                Morbi lectus nunc, lacinia ut consequat a,
                                semper vel erat. Duis ut lacus nec dui sodales
                                mattis. Mauris tellus dolor, pulvinar sit amet
                                pretium a, malesuada sed tellus. Aliquam
                                ultrices elit neque, quis lacinia ex porttitor
                                non. Donec ac iaculis turpis. Nulla lacinia enim
                                quis orci aliquam, non cursus urna pellentesque.
                                Class aptent taciti sociosqu ad litora torquent
                                per conubia nostra, per inceptos himenaeos.
                                Phasellus in mi a nisi auctor interdum. Vivamus
                                faucibus magna sed elit interdum consequat.
                                Vestibulum eu tortor vel ante feugiat faucibus
                                quis et urna. Quisque interdum ac enim eu
                                tempus. Fusce viverra, lectus egestas tincidunt
                                cursus, tortor sapien convallis metus, vitae
                                auctor risus metus vel nisi. Aenean dapibus
                                bibendum mauris ut iaculis.
                            </p>
                        </div>

                        <div className="promotion__content-1">
                            <div className="promotion__content-title">
                                How to deactivate a coupon
                            </div>
                            <p>
                                Quisque et bibendum urna, eget consequat sapien.
                                Integer sed condimentum nibh. Integer id neque
                                tristique, lobortis massa ac, dapibus nibh.
                                Donec nulla odio, porttitor ac rutrum eget,
                                volutpat a velit. Curabitur et enim quis diam
                                congue dictum et vitae dui. Nulla tortor orci,
                                luctus a pretium vel, ultrices porta nisl.
                            </p>

                            <form className="promotion__content-1-form">
                                <div className="promotion__content-1-form-title">
                                    Was this review helpful?
                                </div>
                                <div className="promotion__content-1-form-radio">
                                    <input
                                        type="radio"
                                        name="content"
                                        id="yes"
                                    />
                                    <label htmlFor="yes">Yes</label>
                                    <input
                                        type="radio"
                                        name="content"
                                        id="no"
                                    />
                                    <label htmlFor="no">No</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq_detail_view_2;
