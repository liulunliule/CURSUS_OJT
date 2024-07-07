import React from "react";
import "./index.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Switch } from "antd";
function Add_quiz_basic() {
    return (
        <div className="add_lecture_basic">
            <div className="add_lecture_basic-top">
                <div className="add_lecture_basic-title">Lecture Title*</div>
                <input
                    type="text"
                    name=""
                    id=""
                    className="add_lecture_basic-input"
                    placeholder="Title here"
                />
            </div>
            <div className="add_lecture_basic-bot">
                <div className="add_lecture_basic-desc">Description*</div>
                <ReactQuill theme="snow" style={{ height: "150px" }} />
            </div>
            <div className="add_lecture_basic-switch"></div>
            <div className="add_lecture_basic-btn-wrap">
                <button className="add_lecture_basic-btn close">Close</button>
                <button className="add_lecture_basic-btn">Add lecture</button>
            </div>
        </div>
    );
}

export default Add_quiz_basic;
