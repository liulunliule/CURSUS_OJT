import { Switch } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";

function NotificationTab() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="NotificationTab">
      <div className="AllTabButton_SettingPage">
        <Link to="/setting_page/account_tab">
          <button className="AllTabButton_SettingPage_Rest">Account</button>
        </Link>
        <button className="AllTabButton_SettingPage_NotificationTab">
          Notification
        </button>
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
      <div className="NotificationTab_Contents">
        <h4 className="NotificationTab_Contents_TitleNotifications_H4">
          Notifications - Choose when and how to be notified
        </h4>
        <p className="NotificationTab_Contents_Title_P">
          Select push and email notifications you'd like to receive
        </p>
        <h4 className="NotificationTab_Contents_TitleChoose_H4">
          Choose when and how to be notified
        </h4>
        <div className="NotificationTab_Contents_Subscriptions_Switch">
          <Switch
            className="NotificationTab_Contents_Subscriptions_SwitchButton"
            onChange={onChange}
          />
          <span className="NotificationTab_Contents_Subscriptions_Switch_Title">
            Subscriptions
          </span>
        </div>
        <p className="NotificationTab_Contents_P">
          Notify me about activity from the profiles I'm subscribed to
        </p>
        <div className="NotificationTab_Contents_Subscriptions_Switch">
          <Switch
            className="NotificationTab_Contents_Subscriptions_SwitchButton"
            onChange={onChange}
          />
          <span className="NotificationTab_Contents_Subscriptions_Switch_Title">
            Recommended Courses
          </span>
        </div>
        <p className="NotificationTab_Contents_P">
          Notify me of courses I might like based on what I watch
        </p>
        <div className="NotificationTab_Contents_Subscriptions_Switch">
          <Switch
            className="NotificationTab_Contents_Subscriptions_SwitchButton"
            onChange={onChange}
          />
          <span className="NotificationTab_Contents_Subscriptions_Switch_Title">
            Activity on my comments
          </span>
        </div>
        <p className="NotificationTab_Contents_P">
          Notify me about activity on my comments on others’ courses
        </p>
        <div className="NotificationTab_Contents_Subscriptions_Switch">
          <Switch
            className="NotificationTab_Contents_Subscriptions_SwitchButton"
            onChange={onChange}
          />
          <span className="NotificationTab_Contents_Subscriptions_Switch_Title">
            Subscriptions
          </span>
        </div>
        <p className="NotificationTab_Contents_P">
          Notify me about activity from the profiles I'm subscribed to
        </p>
        <div className="NotificationTab_Contents_Line"></div>
        <h4 className="NotificationTab_Contents_TitleChoose_H4">
          Email notifications
        </h4>
        <p className="NotificationTab_Contents_Title_P">
          Your emails are sent to gambol943@gmail.com. To unsubscribe from an
          email, click the "Unsubscribe" link at the bottom of it. Learn more
          about emails from Edututs+.
        </p>
        <div className="NotificationTab_Contents_Subscriptions_Switch">
          <Switch
            className="NotificationTab_Contents_Subscriptions_SwitchButton"
            onChange={onChange}
          />
          <span className="NotificationTab_Contents_Subscriptions_Switch_Title">
            Send me emails about my Cursus activity and updates I requested
          </span>
        </div>
        <p className="NotificationTab_Contents_P">
          If this setting is turned off, Cursus may still send you messages
          regarding your account, required service announcements, legal
          notifications, and privacy matters
        </p>
        <div className="NotificationTab_Contents_Subscriptions_Switch">
          <Switch
            className="NotificationTab_Contents_Subscriptions_SwitchButton"
            onChange={onChange}
          />
          <span className="NotificationTab_Contents_Subscriptions_Switch_Title">
            Promotions, course recommendations, and helpful resources from
            Cursus.
          </span>
        </div>
        <div className="NotificationTab_Contents_Subscriptions_Switch">
          <Switch
            className="NotificationTab_Contents_Subscriptions_SwitchButton"
            onChange={onChange}
          />
          <span className="NotificationTab_Contents_Subscriptions_Switch_Title">
            Announcements from instructors whose course(s) I’m enrolled in.
          </span>
        </div>
        <p className="NotificationTab_Contents_P">
          To adjust this preference by course, leave this box checked and go to
          the course dashboard and click on "Options" to opt in or out of
          specific announcements.
        </p>
        <button className="NotificationTab_Contents_button">Save Changes</button>
      </div>
    </div>
  );
}

export default NotificationTab;
