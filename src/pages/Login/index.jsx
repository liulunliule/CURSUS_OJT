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
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
    const handleLogin = async (email, password) => {
        //    Validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid email! Please try again");
            return;
        } else if (!password) {
            toast.error("Invalid password");
            return;
        }
        setIsLoading(true);

        // submit login
        try {
            const response = await axios.get(
                "https://6696231a0312447373c1386e.mockapi.io/user"
            );
            console.log(response.data);
            const user = response.data.find(
                (user) => user.email === email && user.password === password
            );
            if (user) {
                console.log("Check ", user);
                setIsLoading(false);
                toast.success("Login succeed");
                dispatch(fetchUserLoginSuccess(user));
                navigate("/");
            }

            if (user.password !== password) {
                toast.error("Incorrect Password. Please try again!!");
            }
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
        }
    };

    return (
        <div>
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
                                    type="password"
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
                                onClick={() => handleLogin(email, password)}
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
