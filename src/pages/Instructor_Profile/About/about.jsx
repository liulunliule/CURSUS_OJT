import React from 'react';
import "./index.scss";
const About = ({ userInfo }) => {
  return (
    <div className="about_profile">
    <h3 className="about_title_text">About Me</h3>
      <div className="about_profile_me">
        <h5 className="about_text">{userInfo.aboutme}</h5>
      </div>
    </div>
  );
};

export default About;
