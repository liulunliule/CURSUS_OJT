import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { updateUser } from "../../../redux/features/userSlice";

function AccountTab() {
    const account = useSelector((state) => state.user.account);
    console.log("Check account: ", account);

    const [userName, setUserName] = useState(account.userName || "");
    const [phone, setPhone] = useState(account.phone || "");
    const [aboutMe, setAboutMe] = useState(account.aboutme || "");
    const navigate = useNavigate();

    useEffect(() => {
        setUserName(account.userName || "");
        setPhone(account.phone || "");
        setAboutMe(account.aboutme || "");
    }, [account]);

    const dispatch = useDispatch();

    const handleUpdateUser = async () => {
        try {
            const userId = account.id;
            await axios.put(
                `https://6696231a0312447373c1386e.mockapi.io/user/${userId}`,
                { userName: userName, phone: phone, aboutme: aboutMe }
            );
            toast.success("User updated successfully");

            dispatch(updateUser({ userName, phone, aboutme: aboutMe }));
            // navigate("/");
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("An error occurred. Please try again.");
        }
    };
    return (
        <div className="AccountTab">
            <div className="AllTabButton_SettingPage">
                <button className="AllTabButton_SettingPage_AccountTab">
                    Account
                </button>
                <Link to="/setting_page/notification_tab">
                    <button className="AllTabButton_SettingPage_Rest">
                        Notification
                    </button>
                </Link>
                <Link to="/setting_page/privacy_tab">
                    <button className="AllTabButton_SettingPage_Rest">
                        Privacy
                    </button>
                </Link>
                <Link to="/setting_page/billing_and_payouts_tab">
                    <button className="AllTabButton_SettingPage_Rest">
                        Billing and Payouts
                    </button>
                </Link>
                <Link to="/setting_page/API_clients_tab">
                    <button className="AllTabButton_SettingPage_Rest">
                        API Clients
                    </button>
                </Link>
                <Link to="/setting_page/close_account_tab">
                    <button className="AllTabButton_SettingPage_Rest">
                        Close Account
                    </button>
                </Link>
            </div>
            <div className="AccountTab_Contents">
                <h4 className="AccountTab_Contents_Title_H4">
                    Your Cursus Account
                </h4>
                <p className="AccountTab_Contents_ContentOfH4_P">
                    This is your public presence on Cursus. You need a account
                    to upload your paid courses, comment on courses, purchased
                    by students, or earning.
                </p>
                <h4 className="AccountTab_Contents_Profile_H4">
                    Basic Profile
                </h4>
                <p className="AccountTab_Contents_Profile_P">
                    Add information about yourself
                </p>

                <div className="AccountTab_Contents_InputName">
                    <span className="AccountTab_Contents_SPAN">Email:</span>

                    <Input
                        className="AccountTab_Contents_InputName_FirstName"
                        placeholder="Email"
                        value={account.email}
                        disabled
                    />
                </div>
                <div className="AccountTab_Contents_InputName">
                    <span className="AccountTab_Contents_SPAN">Username:</span>

                    <Input
                        className="AccountTab_Contents_InputName_FirstName"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="AccountTab_Contents_InputName">
                    <span className="AccountTab_Contents_SPAN">
                        Phone Number:
                    </span>

                    <Input
                        className="AccountTab_Contents_InputName_FirstName"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="AccountTab_Contents_InputName">
                    <span className="AccountTab_Contents_SPAN">About me:</span>
                    <TextArea
                        className="AccountTab_Contents_TextArea"
                        rows={3}
                        placeholder="Write a little description about you..."
                        maxLength={3000}
                        value={aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                    />
                </div>
                <div className="AccountTab_Contents_Line"></div>
                <h4 className="AccountTab_Contents_ProfileLink_H4">
                    Profile Links
                </h4>
                <Space.Compact className="AccountTab_Contents_SpaceCompact">
                    <Input
                        style={{
                            width: "8%",
                            backgroundColor: "#e8e8e8",
                            borderRadius: "3px",
                            height: "42px",
                            fontWeight: "700",
                            color: "#686f7a",
                            border: "none",
                            fontSize: "15px",
                        }}
                        defaultValue="https://"
                    />
                    <Input
                        style={{ width: "92%" }}
                        placeholder="yoursite.com"
                    />
                </Space.Compact>
                <br />
                <Space.Compact className="AccountTab_Contents_SpaceCompact">
                    <Input
                        style={{
                            width: "18%",
                            backgroundColor: "#e8e8e8",
                            borderRadius: "3px",
                            height: "42px",
                            fontWeight: "700",
                            color: "#686f7a",
                            border: "none",
                            fontSize: "15px",
                        }}
                        defaultValue="http://facebook.com/"
                    />
                    <Input
                        style={{ width: "82%" }}
                        placeholder="Facebook Profile"
                    />
                </Space.Compact>
                <br />
                <span className="AccountTab_Contents_SPAN">
                    Add your Facebook username (e.g. johndoe).
                </span>
                <br />
                <Space.Compact className="AccountTab_Contents_SpaceCompact">
                    <Input
                        style={{
                            width: "16%",
                            backgroundColor: "#e8e8e8",
                            borderRadius: "3px",
                            height: "42px",
                            fontWeight: "700",
                            color: "#686f7a",
                            border: "none",
                            fontSize: "15px",
                        }}
                        defaultValue="http://twitter.com/"
                    />
                    <Input
                        style={{ width: "84%" }}
                        placeholder="Twitter Profile"
                    />
                </Space.Compact>
                <br />
                <span className="AccountTab_Contents_SPAN">
                    Add your Twitter username (e.g. johndoe).
                </span>
                <br />
                <Space.Compact className="AccountTab_Contents_SpaceCompact">
                    <Input
                        style={{
                            width: "21%",
                            backgroundColor: "#e8e8e8",
                            borderRadius: "3px",
                            height: "42px",
                            fontWeight: "700",
                            color: "#686f7a",
                            border: "none",
                            fontSize: "15px",
                        }}
                        defaultValue="http://www.linkedin.com/"
                    />
                    <Input
                        style={{ width: "79%" }}
                        placeholder="Linkedin Profile"
                    />
                </Space.Compact>
                <br />
                <span className="AccountTab_Contents_SPAN">
                    Input your LinkedIn resource id (e.g. in/johndoe).
                </span>
                <br />
                <Space.Compact className="AccountTab_Contents_SpaceCompact">
                    <Input
                        style={{
                            width: "21%",
                            backgroundColor: "#e8e8e8",
                            borderRadius: "3px",
                            height: "42px",
                            fontWeight: "700",
                            color: "#686f7a",
                            border: "none",
                            fontSize: "15px",
                        }}
                        defaultValue="http://www.youtube.com/"
                    />
                    <Input
                        style={{ width: "79%" }}
                        placeholder="Youtube Profile"
                    />
                </Space.Compact>
                <br />
                <span className="AccountTab_Contents_SPAN">
                    Input your Youtube username (e.g. johndoe).
                </span>
                <br />
                <button
                    className="AccountTab_Contents_button"
                    onClick={handleUpdateUser}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}

export default AccountTab;
