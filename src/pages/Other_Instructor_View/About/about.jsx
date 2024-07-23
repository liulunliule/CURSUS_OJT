import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import { useParams } from "react-router-dom";
const About = () => {
    const Instructor = useSelector((state) => state.myProfile.all_instructor);
    const { id } = useParams();
    const instrucInfor = Instructor.filter((post) => post.id === id);
    console.log("checkabout: ", instrucInfor);
    return (
        <div className="about_profile">
            <h3 className="about_title_text">About Me</h3>
            {instrucInfor.map((ab) => (
                <div className="about_profile_me">
                    <h5 className="about_text">{ab.aboutme}</h5>
                </div>
            ))}
        </div>
    );
};

export default About;
