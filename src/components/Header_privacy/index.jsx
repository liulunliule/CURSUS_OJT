import React from "react";
import "./index.scss";
import { avatar, logo } from "../../assets";
import { Link } from "react-router-dom";

function Header_policy() {
  return (
    <header className={`header__policy`}>
      <div className="header__policy-container">
        <div className="header__policy-inner">
          <Link to="/">
            <button className="header__policy-btn">Back to Cursus</button>
          </Link>
          <div className="header__policy-logo">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="header__policy-avt">
            <img src={avatar} alt="User Profile" className="avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header_policy;
