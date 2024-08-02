import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, message } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import {
  fetchPrivacySettingData,
  updatePrivacySettingData,
} from "../../../redux/features/PrivacySettingSlice";

function PrivacyTab() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const dispatch = useDispatch();
  const {
    data: switchStates,
    status,
    error,
  } = useSelector((state) => state.privacySetting);

  const [localSettings, setLocalSettings] = useState({
    Showyouprofile: false,
    Showcourse: false,
  });

  useEffect(() => {
    dispatch(fetchPrivacySettingData());
  }, [dispatch]);

  useEffect(() => {
    if (status === "succeeded" && switchStates) {
      setLocalSettings(switchStates);
    } else if (status === "failed") {
      message.error("Failed to fetch privacy settings");
      console.error("Error fetching privacy settings:", error);
    }
  }, [status, switchStates, error]);

  const handleSwitchChange = (key, checked) => {
    setLocalSettings({ ...localSettings, [key]: checked });
  };

  const handleSaveChanges = async () => {
    try {
      await dispatch(updatePrivacySettingData(localSettings)).unwrap();
      message.success("Privacy settings saved successfully");
    } catch (error) {
      message.error("Failed to save privacy settings");
      console.error("Error saving privacy settings:", error);
    }
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
        <p className="PrivacyTab_Contents_PrivacyOf_P">
          Modify your privacy settings here.
        </p>
        <h4 className="PrivacyTab_Contents_SettingProfile_H4">
          Profile page settings
        </h4>
        <div className="PrivacyTab_Contents_SwitchButton1">
          <Switch
            checked={localSettings.Showyouprofile}
            onChange={(checked) =>
              handleSwitchChange("Showyouprofile", checked)
            }
            className="PrivacyTab_Contents_SwitchButton1_Switch"
          />
          <span className="PrivacyTab_Contents_SwitchButton1_SPAN">
            Show your profile on search engines
          </span>
        </div>
        <div className="PrivacyTab_Contents_SwitchButton2">
          <Switch
            checked={localSettings.Showcourse}
            onChange={(checked) => handleSwitchChange("Showcourse", checked)}
            className="PrivacyTab_Contents_SwitchButton2_Switch"
          />
          <span className="PrivacyTab_Contents_SwitchButton2_SPAN">
            Show courses you're taking on your profile page
          </span>
        </div>
        <button
          className="PrivacyTab_Contents_button"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default PrivacyTab;
