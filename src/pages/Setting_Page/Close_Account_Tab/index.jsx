import { Input } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";

function CloseAccountTab() {
  return (
    <div className="CloseAccountTab">
      <div className="AllTabButton_SettingPage">
        <Link to="/setting_page/account_tab">
          <button className="AllTabButton_SettingPage_Rest">Account</button>
        </Link>
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
        <button className="AllTabButton_SettingPage_CloseAccountTab">
          Close Account
        </button>
      </div>
      <div className="CloseAccountTab_Contents">
        <h4 className="CloseAccountTab_Contents_close_H4">Close account</h4>
        <p className="CloseAccountTab_Contents_close_P">
          <strong className="CloseAccountTab_Contents_close_P_STRONG">
            Warning:
          </strong>
          If you close your account, you will be unsubscribed from all your 5
          courses, and will lose access forever.
        </p>
        <Input
          className="AccountTab_Contents_InputPassword"
          placeholder="Enter Your Password"
        />
        <br />
        <span className="CloseAccountTab_Contents_SPAN">Are you sure you want to close your account?</span>
        <br />
        <button className="CloseAccountTab_Contents_button">Close Account</button>
      </div>
    </div>
  );
}

export default CloseAccountTab;
