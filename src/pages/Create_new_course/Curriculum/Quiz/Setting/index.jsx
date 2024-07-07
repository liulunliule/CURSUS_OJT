import React from "react";
import "./index.scss";
import { Switch } from "antd";
function Add_quiz_setting() {
    return (
        <div className="add_quiz_setting">
            <div className="add_quiz_setting-switch">
                <div className="add_quiz_setting-switch-item">
                    <div className="add_quiz_setting-title">Gradable</div>
                    <div className="switch">
                        <Switch />
                        <label>Show Time</label>
                    </div>
                    <p>
                        If this quiz test affect on the students grading system
                        for this course.
                    </p>
                </div>

                <div className="add_quiz_setting-switch-item">
                    <div className="add_quiz_setting-title">
                        Remaining time display
                    </div>
                    <div className="switch">
                        <Switch />
                        <label>Show Time</label>
                    </div>
                    <p>
                        By enabling this option, quiz taker will show remaining
                        time during attempt.
                    </p>
                </div>
            </div>

            <div className="add_quiz_setting_input-row">
                <div className="setting_input-item">
                    <label htmlFor="">Time Limit*</label>
                    <div className="setting_input-form">
                        <input type="number" name="" id="" />
                        <button>Minutes</button>
                    </div>
                    <div className="setting_input-item-desc">
                        Set zero to disable time limit.
                    </div>
                </div>

                <div className="setting_input-item">
                    <label htmlFor="">Passing Score(%)*</label>
                    <div className="setting_input-form">
                        <input type="number" name="" id="" />
                    </div>
                    <div className="setting_input-item-desc">
                        Student have to collect this score in percent for the
                        pass this quiz.
                    </div>
                </div>

                <div className="setting_input-item">
                    <label htmlFor="">Questions Limit*</label>
                    <div className="setting_input-form">
                        <input type="number" name="" id="" />
                    </div>
                    <div className="setting_input-item-desc">
                        The number of questions student have to answer in this
                        quiz.
                    </div>
                </div>
            </div>

            <div className="add_lecture_basic-btn-wrap">
                <button className="add_lecture_basic-btn close">Close</button>
                <button className="add_lecture_basic-btn">Add Quiz</button>
            </div>
        </div>
    );
}

export default Add_quiz_setting;
