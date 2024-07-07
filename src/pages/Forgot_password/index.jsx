import React from "react";
import { logoCursus } from "../../assets";
import { logo_Small } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./index.scss";
import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <div>
            <div className="forgot_password">
                <Link to="/">
                    <img src={logoCursus} alt="" className="forgot_password__logo" />
                </Link>
                <div className="forgot_password__main main">
                    <h2 className="forgot_password__title">
                        Request a Password Reset
                    </h2>
                    <form className="forgot_password__form" action="">
                        <div className="forgot_password__wrapper">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{ color: "#909090" }}
                                className="faEnvelope"
                            />
                            <input
                                className="forgot_password__input"
                                type="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <button
                            className="login__button forgot_password__btn"
                            type="submit"
                        >
                            Reset Password
                        </button>
                    </form>
                    <div className="forgot_password_SignIn">
                        Go Back <Link to="/login">Sign In</Link>
                    </div>
                </div>
                <div className="forgot_password__footer">
                    <img src={logo_Small} alt="" />
                    <p>
                        © 2024 <b>Cursus</b>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
