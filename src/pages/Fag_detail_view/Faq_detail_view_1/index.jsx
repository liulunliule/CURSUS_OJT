import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faSellsy } from "@fortawesome/free-brands-svg-icons/faSellsy";
import { faRuler } from "@fortawesome/free-solid-svg-icons/faRuler";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons/faBarsProgress";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons/faHelmetSafety";
function Faq_detail_view() {
    return (
        <div className="payments">
            <div className="payments-container">
                <div className="payments__inner">
                    <div className="payments__toolbar">
                        <div className="payments__toolbar-home">
                            <Link to="/">Home </Link>/ <Link to="/">Help </Link>
                            /Payments
                        </div>
                        <div className="payments__toolbar-search">
                            <div className="payments__toolbar-icon">
                                <SearchOutlined />
                            </div>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="payments__toolbar-input"
                                placeholder="Search"
                            />
                        </div>
                    </div>

                    <h1 className="payments__title">Payments</h1>
                </div>
            </div>
            <div className="payments__main">
                <div className="payments-container">
                    <div className="payments__catalogue">
                        <h4 className="payments__catalogue-title">
                            Instructor Topics
                        </h4>
                        <ul>
                            <li className="payments__catalogue-item">
                                <div className="payments__catalogue-item-icon">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </div>{" "}
                                <NavLink to="/secondLayout/Faq_detail_view-1">
                                    Payments
                                </NavLink>
                            </li>
                            <li className="payments__catalogue-item">
                                <div className="payments__catalogue-item-icon">
                                    <FontAwesomeIcon icon={faSellsy} />
                                </div>{" "}
                                <NavLink to="/secondLayout/Faq_detail_view-2">
                                    Selling &amp; Promotion
                                </NavLink>
                            </li>
                            <li className="payments__catalogue-item">
                                <div className="payments__catalogue-item-icon">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </div>{" "}
                                <Link to="/term">Quality Standards</Link>
                            </li>
                            <li className="payments__catalogue-item">
                                <div className="payments__catalogue-item-icon">
                                    <FontAwesomeIcon icon={faRuler} />
                                </div>{" "}
                                <Link to="/term">Course Building</Link>
                            </li>
                            <li className="payments__catalogue-item">
                                <div className="payments__catalogue-item-icon">
                                    <FontAwesomeIcon icon={faBarsProgress} />
                                </div>{" "}
                                <Link to="/term">Course Management</Link>
                            </li>
                            <li className="payments__catalogue-item">
                                <div className="payments__catalogue-item-icon">
                                    <FontAwesomeIcon icon={faHelmetSafety} />
                                </div>{" "}
                                <Link to="/term">Trust &amp; Safety</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="payments__content">
                        <div className="payment__content-1">
                            <h4 className="payments__content-title">
                                <b>Taxes</b>
                            </h4>
                            <ul className="payments__content-desc">
                                <li className="payments__content-desc-item">
                                    <Link>
                                        Common Instructor Questions About The
                                        W-8BEN
                                    </Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>
                                        Taxes: What do Instructors Need to
                                        Submit to Cursus?
                                    </Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>
                                        What Does Cursus do With my Tax
                                        Information (i.e. Withholding)?
                                    </Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>
                                        How do I Submit my Tax Forms to Cursus?
                                    </Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>
                                        How Does Cursus Handle VAT / GST?
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="payment__content-2">
                            <h4 className="payments__content-title">
                                <b>Payments - General</b>
                            </h4>

                            <ul className="payments__content-desc">
                                <li className="payments__content-desc-item">
                                    <Link className="payments__content-desc-link">
                                        How do I Earn Revenue From Cursus for
                                        Business?
                                    </Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>
                                        How to opt out of Cursus for Business
                                    </Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>Payoneer FAQ</Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>Missing Instructor Payments</Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>Instructor Revenue Share</Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>Instructor Revenue Report</Link>
                                </li>
                                <li className="payments__content-desc-item">
                                    <Link>Instructor Payment Overview</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq_detail_view;
