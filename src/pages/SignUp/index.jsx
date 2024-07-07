import React from "react";
import { logoCursus } from "../../assets";
import { Link } from "react-router-dom";
import "./index.scss";
import { logo_Small } from "../../assets";

function SignUpPage() {
    return (
        <div>
            <div className="signup">
                <img src={logoCursus} alt="" className="signup__logo" />
                <div className="signup__main main">
                    <h2 className="signup__title">Welcome to Cursus</h2>
                    <p className="signup__desc">Sign Up and Start Learning!</p>
                    <div className="signup__cta">
                        <form action="" className="signup__form-group">
                            <div className="signup__form">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Full Name"
                                    className="signup__form-input"
                                />
                            </div>

                            <div className="signup__form">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Email Address"
                                    className="signup__form-input"
                                />
                            </div>
                            <div className="signup__form">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Password"
                                    className="signup__form-input"
                                />
                            </div>
                            <div className="signup__remember">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="remember-me"
                                />
                                <label for="remember-me">
                                    I’m in for emails with exciting discounts
                                    and personalized recommendations
                                </label>
                            </div>
                            <Link to="/signupstep">
                                <button className="signup__button signup__signin">
                                    Next
                                </button>
                            </Link>
                        </form>
                    </div>

                    <div className="signup__forgotPass">
                        By signing up, you agree to our{" "}
                        <Link to="/secondLayout/policy"> Terms of Use</Link> and{" "}
                        <Link to="/secondLayout/term"> Privacy Policy</Link>.
                    </div>
                    <div className="signup__line"></div>
                    <div className="signup__signup">
                        Already have an account?<Link to="/login">Log in</Link>
                    </div>
                </div>

                <div className="signup__footer">
                    <img src={logo_Small} alt="" />
                    <p className="login__footer-content">
                        © 2024 <b>Cursus</b>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
