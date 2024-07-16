import React, { useState } from "react";
import "./index.scss";
import { logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGoogle,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { logo_Small } from "../../assets";
import { postLogin } from "../../services/apiService";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { fetchUserLoginSuccess } from "../../redux/features/userSlice";
import { LoadingOutlined } from "@ant-design/icons";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
        //    Validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            messageApi.open({
                type: "error",
                content: "Invalid email! Please try again",
            });
            return;
        } else if (!password) {
            messageApi.open({
                type: "error",
                content: "Invalid password",
            });
            return;
        }
        setIsLoading(true);
        //submit login
        const response = await postLogin(email, password);
        console.log("Check: ", response.data);

        if (response && response.data.EC === 0) {
            dispatch(fetchUserLoginSuccess(response.data));
            setIsLoading(false);
            navigate("/", {
                state: { message: response.data.EM, type: "success" },
            });
        }
        if (response && response.data.EC !== 0) {
            messageApi.open({
                type: "error",
                content: response.data.EM,
            });
            setIsLoading(false);
        }
    };

    return (
        <div>
            {contextHolder}
            <div className="login">
                <Link to="/">
                    <img src={logo} alt="" className="login__logo" />
                </Link>
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
                                    marginRight: "10px",
                                }}
                            />
                            Continue with Facebook
                        </button>
                        <button className="login__button">
                            <FontAwesomeIcon
                                icon={faTwitter}
                                style={{
                                    color: "#ffffff",
                                    marginRight: "10px",
                                }}
                            />
                            Continue with Twitter
                        </button>
                        <button className="login__button">
                            <FontAwesomeIcon
                                icon={faGoogle}
                                style={{
                                    color: "#ffffff",
                                    marginRight: "10px",
                                }}
                            />
                            Continue with Google
                        </button>
                        <div className="login__form-group">
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
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </div>

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
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />
                            </div>
                            <div className="login__remember">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="remember-me"
                                />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button
                                className="login__button login__signin"
                                onClick={() => handleLogin()}
                                disabled={isLoading}
                            >
                                {isLoading === true && (
                                    <LoadingOutlined
                                        style={{ marginRight: "10px" }}
                                    />
                                )}
                                Sign in
                            </button>
                        </div>
                    </div>

                    <div className="login__forgotPass">
                        Or{" "}
                        <Link to="/forgot_password" className="aaaa">
                            {" "}
                            Forgot Password
                        </Link>
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
