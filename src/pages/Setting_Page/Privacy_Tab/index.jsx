import { Switch } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";

function PrivacyTab() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="PrivacyTab">
      <div className="AllTabButton_SettingPage">
        <Link to="/setting_page/account_tab">
          <button className="AllTabButton_SettingPage_Rest">Account</button>
        </Link>
        <Link to="/setting_page/notification_tab">
          <button className="AllTabButton_SettingPage_Rest">
            Notification
          </button>
        </Link>
        <button className="AllTabButton_SettingPage_PrivacyTab">Privacy</button>
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
      <div className="PrivacyTab_Contents">
        <h4 className="PrivacyTab_Contents_Privacy_H4">Privacy</h4>
        <p className="PrivacyTab_Contents_PrivacyOf_P">Modify your privacy settings here.</p>
        <h4 className="PrivacyTab_Contents_SettingProfile_H4">Profile page settings</h4>
        <div className="PrivacyTab_Contents_SwitchButton1">
          <Switch className="PrivacyTab_Contents_SwitchButton1_Switch" onChange={onChange} />
          <span className="PrivacyTab_Contents_SwitchButton1_SPAN">
            Show your profile on search engines
          </span>
        </div>
        <div className="PrivacyTab_Contents_SwitchButton2">
          <Switch className="PrivacyTab_Contents_SwitchButton2_Switch" onChange={onChange} />
          <span className="PrivacyTab_Contents_SwitchButton2_SPAN">
            Show courses you're taking on your profile page
          </span>
        </div>
        <button className="CloseAccountTab_Contents_button">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default PrivacyTab;
