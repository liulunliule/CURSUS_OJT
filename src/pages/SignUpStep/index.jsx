import React, { useState } from "react";
import "./index.scss";
import { logo, logo_Small } from "../../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";
import axios from "axios";

function SignUpStep() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { email, password, userName } = location.state || {};
    const [role, setRole] = useState(true);
    const [additionalInfo, setAdditionalInfo] = useState("");

    const handleRoleChange = (role) => {
        setRole(role);
        setIsOpen(role);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!additionalInfo) {
            toast.error("Please input your description!!");
            return;
        }

        try {
            const response = await axios.post(
                "https://6696231a0312447373c1386e.mockapi.io/user",
                { userName, email, password, role, additionalInfo }
            );
            console.log("CHek: ", response.data);
            toast.success("Sign up successful!");
            navigate("/login");
        } catch (error) {
            console.error("Error during sign up:", error);
            toast.error("Sign up failed. Please try again.");
        }
    };

    return (
        <div>
            <div className="signUpStep">
                <img src={logo} alt="" className="signUpStep__logo" />
                <div className="signUpStep__main main">
                    <div className="signUpStep__switch-wrap">
                        <div className="signUpStep__switch">
                            <input
                                type="radio"
                                name="signUpOption"
                                id="signUpStep-switch"
                                className="signUpStep__switch-input"
                                hidden
                                defaultChecked={role === true}
                                onClick={() => handleRoleChange(true)}
                            />
                            <label
                                htmlFor="signUpStep-switch"
                                className="signUpStep__switch-label"
                            >
                                <span className="signUpStep__switch-value">
                                    Instructor Sign Up
                                </span>
                            </label>
                        </div>
                        <div className="signUpStep__switch">
                            <input
                                type="radio"
                                name="signUpOption"
                                id="signUpStep-switch2"
                                className="signUpStep__switch-input"
                                hidden
                                defaultChecked={role === false}
                                onClick={() => handleRoleChange(false)}
                            />
                            <label
                                htmlFor="signUpStep-switch2"
                                className="signUpStep__switch-label"
                            >
                                <span className="signUpStep__switch-value">
                                    Student Sign Up
                                </span>
                            </label>
                        </div>
                    </div>
                    <form className="signUpStep__form" onSubmit={handleSignUp}>
                        {isOpen && (
                            <div className="signUpStep__select">
                                <Select
                                    className="custom-select"
                                    showSearch
                                    style={{
                                        width: "100%",
                                    }}
                                    placeholder="Search Category"
                                    options={[
                                        { value: "1", label: "Development" },
                                        { value: "2", label: "Business" },
                                        {
                                            value: "3",
                                            label: "Finance & Accounting",
                                        },
                                        { value: "4", label: "IT & Software" },
                                        {
                                            value: "5",
                                            label: "Office Productivity",
                                        },
                                        { value: "6", label: "Design" },
                                        { value: "7", label: "Marketing" },
                                        { value: "8", label: "Lifestyle" },
                                        { value: "9", label: "Photography" },
                                        {
                                            value: "10",
                                            label: "Health & Fitness",
                                        },
                                        { value: "11", label: "Music" },
                                        {
                                            value: "12",
                                            label: "Teaching and Academic",
                                        },
                                    ]}
                                />
                            </div>
                        )}
                        <div className="signUpStep__textArea">
                            <TextArea
                                rows={3}
                                placeholder="Write a little description about you..."
                                maxLength={12000}
                                value={additionalInfo}
                                onChange={(e) =>
                                    setAdditionalInfo(e.target.value)
                                }
                            />
                        </div>
                        <p className="signUpStep__limit">
                            Your biography should have at least 12000
                            characters.
                        </p>
                        <button
                            className="signUpStep__btn button"
                            type="submit"
                        >
                            Sign Up Now
                        </button>
                        <div className="signUpStep__signup">
                            Already have an account?
                            <Link to="/login">Log In</Link>
                        </div>
                    </form>
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

export default SignUpStep;
