import "./index.scss";
import { Link } from "react-router-dom";
import { UilInfoCircle } from "@iconscout/react-unicons";

function APIClientsTab() {
  return (
    <div className="APIClientsTab">
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
        <button className="AllTabButton_SettingPage_APIClientsTab">
          API Clients
        </button>
        <Link to="/setting_page/close_account_tab">
          <button className="AllTabButton_SettingPage_Rest">
            Close Account
          </button>
        </Link>
      </div>
      <div className="APIClientsTab_Contents">
        <h4 className="APIClientsTab_Contents_Title_H4">Affiliate API</h4>
        <p className="APIClientsTab_Contents_TitleOf_P">
          The Cursus Affiliate API exposes functionalities of Cursus to help
          developers build client applications and integrations with Cursus. To
          see more details, please visit <Link className="APIClientsTab_Contents_TitleOf_P_Link">Cursus Affiliate API</Link>
        </p>
        <button className="APIClientsTab_Contents_Button">
          Request Affiliate API Client
        </button>
        <br />
        <UilInfoCircle className="APIClientsTab_Contents_UilInfoCircle_Logo" />
        <span className="APIClientsTab_Contents_UilInfoCircle_SPAN">You don't have any API clients yet.</span>
      </div>
    </div>
  );
}

export default APIClientsTab;
