import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
const About = () => {
  const account = useSelector((state) => state.user.account);
  return (
    <div className="about_profile">
      <h3 className="about_title_text">About Me</h3>
      <div className="about_profile_me">
        <h5 className="about_text">{account.aboutme}</h5>
      </div>
    </div>
  );
};

export default About;
