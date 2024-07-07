import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import CustomAccordion from "./Accordion";

function Course_detail_content() {
    return (
        <div className="course_detail_course-content">
            <div className="course_detail_content-title">
                <div className="course_detail_content-title-left">
                    Course content
                </div>
                <div className="course_detail_content-title-right">
                    <ul>
                        <li className="accordion-expand-all">
                            <Link>Expand-all</Link>
                        </li>
                        <li className="lecture-quantity"> 402 lectures</li>
                        <li className="lecture-time">47:06:29</li>
                    </ul>
                </div>
            </div>
            <CustomAccordion />
        </div>
    );
}

export default Course_detail_content;
