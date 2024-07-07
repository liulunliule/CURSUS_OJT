import React from "react";
import "./index.scss";
import Header_policy from "../../components/Header_privacy";
import { Link, NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import FooterHomePage from "../../components/Footer";

function Policy() {
    return (
        <div>
            <div className="policy">
                <div className="policy-container">
                    <div className="policy__inner">
                        <div className="policy__toolbar">
                            <div className="policy__toolbar-home">
                                <Link to="/">Home </Link>/ Term of use
                            </div>
                            <div className="policy__toolbar-search">
                                <div className="policy__toolbar-icon">
                                    <SearchOutlined />
                                </div>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="policy__toolbar-input"
                                    placeholder="Search"
                                />
                            </div>
                        </div>

                        <h1 className="policy__title">Term of Use</h1>
                    </div>
                </div>
                <div className="policy__main">
                    <div className="policy-container">
                        <div className="policy__catalogue">
                            <ul>
                                <li className="policy__catalogue-item">
                                    <NavLink to="/secondLayout/policy">
                                        Term of Use
                                    </NavLink>
                                </li>
                                <li className="policy__catalogue-item">
                                    <NavLink to="/secondLayout/term">
                                        Privacy Policy
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="policy__content">
                            <p className="policy__content-title">
                                <i>
                                    These Terms of Use{" "}
                                    <strong>("Terms")</strong> were last updated
                                    on August 1, 2020.
                                </i>
                            </p>
                            <p className="policy__content-desc">
                                Welcome to our Cursus. By accessing or using our
                                website, you agree to comply with and be bound
                                by these Terms of Use ("Terms"). Please read
                                these Terms carefully before using our services
                            </p>
                            <p className="policy__content-desc">
                                By using our website, you represent and warrant
                                that you are at least 18 years old and have the
                                legal capacity to enter into these Terms. If you
                                are under 18, you may use our services only with
                                the involvement of a parent or guardian.
                            </p>
                            <p className="policy__content-desc">
                                To access certain features of our website, you
                                may be required to register for an account. You
                                agree to: Provide accurate, current, and
                                complete information during the registration
                                process. Maintain and promptly update your
                                account information. Keep your password secure
                                and accept responsibility for all activities
                                that occur under your account.
                            </p>
                            <p className="policy__content-desc">
                                All content on our website, including text,
                                graphics, logos, and images, is the property of
                                [Your Website Name] or its content suppliers and
                                is protected by international copyright laws.
                                You agree not to use any of our intellectual
                                property without our prior written consent.
                            </p>
                            <p className="policy__content-desc">
                                We reserve the right to terminate or suspend
                                your account and access to our services at our
                                sole discretion, without notice, for conduct
                                that we believe violates these Terms or is
                                harmful to other users of our website.
                            </p>
                            <p className="policy__content-desc">
                                Our services are provided on an "as is" and "as
                                available" basis. We make no warranties, express
                                or implied, regarding the operation of our
                                website or the information, content, or
                                materials included therein.
                            </p>
                            <p className="policy__content-desc">
                                To the fullest extent permitted by law, [Your
                                Website Name] shall not be liable for any
                                indirect, incidental, special, or consequential
                                damages arising out of or in connection with the
                                use of our services.
                            </p>
                            <p className="policy__content-desc">
                                We reserve the right to modify these Terms at
                                any time. We will notify you of any changes by
                                posting the new Terms on our website. Your
                                continued use of our services after such changes
                                constitutes your acceptance of the new Terms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Policy;
