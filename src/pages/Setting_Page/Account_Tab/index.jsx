import { Link } from "react-router-dom";
import "./index.scss";
import { Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";

function AccountTab() {
  return (
    <div className="AccountTab">
      <div className="AllTabButton_SettingPage">
        <button className="AllTabButton_SettingPage_AccountTab">Account</button>
        <Link to="/setting_page/notification_tab">
          <button className="AllTabButton_SettingPage_Rest">
            Notification
          </button>
        </Link>
        <Link to="/setting_page/privacy_tab">
          <button className="AllTabButton_SettingPage_Rest">Privacy</button>
        </Link>
        <Link to="/setting_page/billing_and_payouts_tab">
          <button className="AllTabButton_SettingPage_Rest">
            Billing and Payouts
          </button>
        </Link>
        <Link to="/setting_page/API_clients_tab">
          <button className="AllTabButton_SettingPage_Rest">API Clients</button>
        </Link>
        <Link to="/setting_page/close_account_tab">
          <button className="AllTabButton_SettingPage_Rest">
            Close Account
          </button>
        </Link>
      </div>
      <div className="AccountTab_Contents">
        <h4 className="AccountTab_Contents_Title_H4">Your Cursus Account</h4>
        <p className="AccountTab_Contents_ContentOfH4_P">
          This is your public presence on Cursus. You need a account to upload
          your paid courses, comment on courses, purchased by students, or
          earning.
        </p>
        <h4 className="AccountTab_Contents_Profile_H4">Basic Profile</h4>
        <p className="AccountTab_Contents_Profile_P">
          Add information about yourself
        </p>
        <div className="AccountTab_Contents_InputName">
          <Input
            className="AccountTab_Contents_InputName_FirstName"
            placeholder="First Name"
          />
          <Input
            className="AccountTab_Contents_InputName_LastName"
            placeholder="Last Name"
          />
        </div>
        <div className="AccountTab_Contents_Headline">
          <Input
            className="AccountTab_Contents_InputHeadline_Headline"
            placeholder="Headline"
          />
          <span className="AccountTab_Contents_Headline_36">36</span>
        </div>
        <span className="AccountTab_Contents_SPAN">
          Add a professional headline like, "Engineer at Cursus" or "Architect."
        </span>
        <TextArea
          className="AccountTab_Contents_TextArea"
          rows={3}
          placeholder="Write a little description about you..."
          maxLength={3000}
        />
        <span className="AccountTab_Contents_SPAN">
          Links and coupon codes are not permitted in this section.
        </span>
        <div className="AccountTab_Contents_Line"></div>
        <h4 className="AccountTab_Contents_ProfileLink_H4">Profile Links</h4>
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
          <Input style={{ width: "92%" }} placeholder="yoursite.com" />
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
          <Input style={{ width: "82%" }} placeholder="Facebook Profile" />
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
          <Input style={{ width: "84%" }} placeholder="Twitter Profile" />
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
          <Input style={{ width: "79%" }} placeholder="Linkedin Profile" />
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
          <Input style={{ width: "79%" }} placeholder="Youtube Profile" />
        </Space.Compact>
        <br />
        <span className="AccountTab_Contents_SPAN">
          Input your Youtube username (e.g. johndoe).
        </span>
        <br />
        <button className="AccountTab_Contents_button">Save Changes</button>
      </div>
    </div>
  );
}

export default AccountTab;
