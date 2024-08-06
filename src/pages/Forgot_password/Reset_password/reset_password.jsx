import React, { useState } from "react";
import "./index.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { logo_Small, logoCursus } from "../../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from "axios";
function Reset_password() {
    const location = useLocation();
    const { email } = location.state;

    const [newPassword, setNewPassWord] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();

        //Validate

        if (!newPassword || !confirmedPassword) {
            toast.error("Please fill in all fields");
            return;
        }

        if (newPassword !== confirmedPassword) {
            toast.error("Password do not match");
            return;
        }

        try {
            const response = await axios.get(
                `https://6696231a0312447373c1386e.mockapi.io/user?email=${email}`
            );

            console.log("CHeck: ", response.data);

            if (response.data.length === 0) {
                toast.error("User not found");
                return;
            }

            const userId = response.data[0].id;
            await axios.put(
                `https://6696231a0312447373c1386e.mockapi.io/user/${userId}`,
                { password: newPassword }
            );

            toast.success("Password updated successfully");
            navigate("/login");
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <div className="forgot_password">
                <Link to="/">
                    <img
                        src={logoCursus}
                        alt=""
                        className="forgot_password__logo"
                    />
                </Link>
                <div className="forgot_password__main main">
                    <h2 className="forgot_password__title">
                        Reset Password for {email}
                    </h2>
                    <form
                        className="forgot_password__form"
                        action=""
                        onSubmit={handleResetPassword}
                    >
                        <div
                            className="forgot_password__wrapper"
                            style={{ marginBottom: "20px" }}
                        >
                            <FontAwesomeIcon
                                icon={faKey}
                                style={{ color: "#909090" }}
                                className="faEnvelope"
                            />
                            <input
                                className="forgot_password__input"
                                type="password"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassWord(e.target.value)}
                            />
                        </div>

                        <div className="forgot_password__wrapper">
                            <FontAwesomeIcon
                                icon={faKey}
                                style={{ color: "#909090" }}
                                className="faEnvelope"
                            />
                            <input
                                className="forgot_password__input"
                                type="password"
                                placeholder="Confirm New Password"
                                value={confirmedPassword}
                                onChange={(e) =>
                                    setConfirmedPassword(e.target.value)
                                }
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

export default Reset_password;
