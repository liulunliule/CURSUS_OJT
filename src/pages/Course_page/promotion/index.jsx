import React from "react";
import "./index.scss";
import { promotion_1 } from "../../../assets";
function Promotion() {
    return (
        <div className="course_page-promotion">
            <img src={promotion_1} alt="" className="promotion_img" />
            <div className="course_page-promotion-title">
                Baby promotion plan is activated!
            </div>
            <div className="course_page-promotion-desc">
                By activating promotion plans you can improve course views and
                sales.
            </div>

            <button className="course_page-promotion-btn">
                Change New Plan
            </button>
        </div>
    );
}

export default Promotion;
