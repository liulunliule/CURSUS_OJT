import React, { useState } from "react";
import "./index.scss";
import { Collapse } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faCircleDot,
    faFileAlt,
    faFileLines,
    faPenToSquare,
    faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import Single_Choice from "./Single_Choice";
import Multiple_Choice from "./Multiple_Choice";
import Single_Line_Text from "./Single_Line_Choice";
import Milti_Line_Text from "./Multi_Line_Text";
import {
    faBars,
    faCalendarWeek,
    faFile,
    faSquareCaretDown,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
function Add_quiz_question() {
    const { Panel } = Collapse;
    const customHeader = (
        <div className="add_quiz_question_collapse-header">
            <FontAwesomeIcon
                icon={faSquarePlus}
                style={{ marginRight: "8px", fontSize: "16px" }}
            />
            Add Question
        </div>
    );

    const [isSelect, setIsSelect] = useState("singleChoice");

    return (
        <div className="add_quiz_question">
            <Collapse>
                <Panel header={customHeader} key="1">
                    <div className="add_quiz_question-option">
                        <div className="add_option-title">Question type</div>
                    </div>

                    <div className="add_quiz_question-cta add_lecture_video-cta">
                        <button
                            className={`add_lecture_video-btn ${
                                isSelect === "singleChoice" ? "active" : ""
                            }`}
                            onClick={() => setIsSelect("singleChoice")}
                        >
                            <FontAwesomeIcon icon={faCircleDot} /> Single Choice
                        </button>
                        <button
                            className={`add_lecture_video-btn ${
                                isSelect === "multipleChoice" ? "active" : ""
                            }`}
                            onClick={() => setIsSelect("multipleChoice")}
                        >
                            <FontAwesomeIcon icon={faCircleCheck} /> Multiple
                            Choice
                        </button>
                        <button
                            className={`add_lecture_video-btn ${
                                isSelect === "singleLineText" ? "active" : ""
                            }`}
                            onClick={() => setIsSelect("singleLineText")}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} /> Single Line
                            Text
                        </button>
                        <button
                            className={`add_lecture_video-btn ${
                                isSelect === "multiLineText" ? "active" : ""
                            }`}
                            onClick={() => setIsSelect("multiLineText")}
                        >
                            <FontAwesomeIcon
                                icon={faFileLines}
                                style={{ marginRight: "5px" }}
                            />
                            Milti Line Text
                        </button>
                    </div>
                    {isSelect === "singleChoice" && <Single_Choice />}
                    {isSelect === "multipleChoice" && <Multiple_Choice />}
                    {isSelect === "singleLineText" && <Single_Line_Text />}
                    {isSelect === "multiLineText" && <Milti_Line_Text />}
                </Panel>
            </Collapse>

            <div className="curriculum_intro_body">
                <div className="curriculum_intro-item">
                    <div className="intro_body-left">
                        <FontAwesomeIcon icon={faCircleDot} /> Question Title
                    </div>
                    <div className="intro_body-right">
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ color: "#b005a8" }}
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "#b005a8" }}
                        />
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ color: "#b005a8" }}
                        />
                    </div>
                </div>
                <div className="curriculum_intro-item">
                    <div className="intro_body-left">
                        <FontAwesomeIcon icon={faCircleCheck} /> Question Title
                    </div>
                    <div className="intro_body-right">
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ color: "#b005a8" }}
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "#b005a8" }}
                        />
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ color: "#b005a8" }}
                        />
                    </div>
                </div>
                <div className="curriculum_intro-item">
                    <div className="intro_body-left">
                        <FontAwesomeIcon icon={faPenToSquare} /> Question Title
                    </div>
                    <div className="intro_body-right">
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ color: "#b005a8" }}
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "#b005a8" }}
                        />
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ color: "#b005a8" }}
                        />
                    </div>
                </div>
                <div className="curriculum_intro-item">
                    <div className="intro_body-left">
                        <FontAwesomeIcon icon={faFileAlt} />
                        Question Title
                    </div>
                    <div className="intro_body-right">
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ color: "#b005a8" }}
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "#b005a8" }}
                        />
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ color: "#b005a8" }}
                        />
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

export default Add_quiz_question;
