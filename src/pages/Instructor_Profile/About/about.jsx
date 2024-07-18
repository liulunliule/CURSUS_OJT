import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../../redux/features/myProfileSlice";
import "./index.scss";
const About = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.myProfile.userInfo);
  const firstUserInfo = userInfo[0];
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <div className="about_profile">
      <h3 className="about_title_text">About Me</h3>
      <div className="about_profile_me">
        <h5 className="about_text">{firstUserInfo.aboutme}</h5>
      </div>
    </div>
  );
};

export default About;
