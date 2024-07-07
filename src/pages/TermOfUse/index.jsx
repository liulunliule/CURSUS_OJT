import React from "react";
import "./index.scss";
import Header_policy from "../../components/Header_privacy";
import { Link, NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
function TermOfUse() {
    return (
        <div>
            {/* <Header_policy /> */}
            <div className="policy">
                <div className="policy-container">
                    <div className="policy__inner">
                        <div className="policy__toolbar">
                            <div className="policy__toolbar-home">
                                <Link to="/">Home </Link>/ Policy privacy
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

                        <h1 className="policy__title">Policy privacy</h1>
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
                                    Last Updated:
                                    <strong>August 1, 2020</strong>
                                </i>
                            </p>
                            <p className="policy__content-desc">
                                Welcome to Cursus. Your privacy is important to
                                us. This Privacy Policy explains how we collect,
                                use, and protect your personal information when
                                you access or use our website.
                            </p>

                            <p className="policy__content-title">
                                <b>1. Information We Collect</b>
                            </p>
                            <p className="policy__content-desc">
                                We collect personal information that you
                                voluntarily provide to us when you register for
                                an account, use our services, or contact us.
                                This may include: Your name Email address Phone
                                number Payment information Any other information
                                you choose to provide
                            </p>
                            <p className="policy__content-desc">
                                We may also automatically collect certain
                                information when you visit our website,
                                including: IP address Browser type Operating
                                system Pages you view The time and date of your
                                visit The referring URL
                            </p>
                            <p className="policy__content-title">
                                <b>2. How We Use Your Information</b>
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

export default TermOfUse;
