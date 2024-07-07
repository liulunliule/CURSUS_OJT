import "./index.scss";
import { SettingLogo_SideBar } from "../../assets";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function SettingPage() {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <div className={`SettingPage ${isShowAll ? "active" : ""}`}>
      <div className="SettingPage_Title">
        <img
          className="SettingPage_SettingLogo"
          src={SettingLogo_SideBar}
          alt=""
        />
        <h2 className="SettingPage_Title_Title">Setting</h2>
      </div>
      <Outlet />
    </div>
  );
}

export default SettingPage;
