import React, { useState } from "react";
import { logoCursus } from "../../assets";
import { logo_Small } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        const serviceID = "service_opddtia";
        const templateID = "template_5g92d3l";
        const publicKey = "JVZ1QcVFHltEVdEc3";

        const data = {
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey,
            template_params: {
                from_name: email,
                to_name: "Trinh Huy",
                message:
                    "If you didn't request a password reset, please ignore this email or contact support if you have questions",
            },
        };

        //Send email
        try {
            const response = await axios.post(
                "https://api.emailjs.com/api/v1.0/email/send",
                data
            );
            console.log(response.data);
            setEmail("");
        } catch (error) {
            console.error(error);
        }

        navigate("/reset_password", { state: { email } });
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
                        Request a Password Reset
                    </h2>
                    <form
                        className="forgot_password__form"
                        action=""
                        onSubmit={handleResetPassword}
                    >
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
