import React from "react";
import "./index.scss";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGoogle,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { logo_Small } from "../../assets";

function Login() {
    return (
        <div>
            <div className="login">
                <img src={logo} alt="" className="login__logo" />
                <div className="login__main main">
                    <h2 className="login__title">Welcome Back</h2>
                    <p className="login__desc">
                        Log In to Your Cursus Account!
                    </p>
                    <div className="login__cta">
                        <button className="login__button">
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                style={{
                                    color: "#ffffff",
                                    "margin-right": "10px",
                                }}
                            />
                            Continue with Facebook
                        </button>
                        <button className="login__button">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                style={{
                                    color: "#ffffff",
                                    "margin-right": "10px",
                                }}
                            />
                            Continue with Twitter
                        </button>
                        <button className="login__button">
                            <FontAwesomeIcon
                                icon={faGoogle}
                                style={{
                                    color: "#ffffff",
                                    "margin-right": "10px",
                                }}
                            />
                            Continue with Google
                        </button>
                        <form action="" className="login__form-group">
                            <div className="login__form">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    style={{ color: "#909090" }}
                                    className="faEnvelope"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Email Address"
                                    className="login__form-input"
                                />
                            </div>
                            {/* </form> */}
                            {/* <form action="" className="login__form"> */}
                            <div className="login__form">
                                <FontAwesomeIcon
                                    icon={faKey}
                                    style={{ color: "#909090" }}
                                    className="faKey"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Password"
                                    className="login__form-input"
                                />
                            </div>
                            <div className="login__remember">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="remember-me"
                                />
                                <label for="remember-me">Remember me</label>
                            </div>
                            <button
                                className="login__button login__signin"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>

                    <div className="login__forgotPass">
                        Or <Link to="/forgot_password" className="aaaa"> Forgot Password</Link>
                    </div>
                    <div className="login__line"></div>
                    <div className="login__signup">
                        Don't have an account?
                        <Link className="login__signup-link" to="/signup">
                            Sign Up
                        </Link>
                    </div>
                </div>
                <div className="login__footer">
                    <img src={logo_Small} alt="" />
                    <p className="login__footer-content">
                        © 2024 <b>Cursus</b>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
