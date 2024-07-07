import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faNewspaper,
    faPenToSquare,
    faSquareCaretDown,
    faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import {
    faCircleQuestion,
    faFileLines,
    faFile,
    faBars,
    faServer,
    faTrash,
    faCalendarWeek,
    faVideo,
    faPaperclip,
    faGear,
} from "@fortawesome/free-solid-svg-icons";

import VideoModal from "../../../components/Modal";
import { CloseOutlined } from "@ant-design/icons";
import Add_lecture_basic from "./Lecture/Basic";

import Add_lecture_attachment from "./Lecture/Attachment";
import Add_lecture_video from "./Lecture/Video";
import Add_quiz_basic from "./Quiz/Basic";
import Add_quiz_question from "./Quiz/Question";
import Add_quiz_setting from "./Quiz/Setting";
import ReactQuill from "react-quill";
import { Select } from "antd";

function Curriculum() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModal = () => {
        setIsOpenModal(true);
    };
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    const [isOpenLecture, setIsOpenLecture] = useState(false);
    const handleOpenLecture = () => {
        setIsOpenLecture(true);

        setIsSelected("basic");
    };
    const handleCloseLecture = () => {
        setIsOpenLecture(false);
    };

    const [isOpenQuiz, setIsOpenQuiz] = useState(false);
    const handleOpenQuiz = () => {
        setIsOpenQuiz(true);
        setIsSelected("basicQuiz");
    };
    const handleCloseQuiz = () => {
        setIsOpenQuiz(false);
    };

    const [isOpenAssignment, setIsOpenAssignment] = useState(false);
    const handleOpenAssignment = () => {
        setIsOpenAssignment(true);
    };
    const handleCloseAssignment = () => {
        setIsOpenAssignment(false);
    };

    const [isSeleceted, setIsSelected] = useState("basic");

    return (
        <div className="create_course_curriculum">
            <div className="curriculum_title">
                <FontAwesomeIcon
                    icon={faNewspaper}
                    className="curriculum_icon"
                />
                Curriculum
            </div>

            <div className="curriculum_main">
                <div className="curriculum_new-section">
                    <h4 className="curriculum_new-section-title">
                        <FontAwesomeIcon
                            icon={faServer}
                            style={{ marginRight: "5px" }}
                        />{" "}
                        Curriculum
                    </h4>
                    <button
                        className="curriculum_new-section-btn"
                        onClick={handleOpenModal}
                    >
                        New Section
                    </button>
                </div>
                <VideoModal
                    isOpen={isOpenModal}
                    onCancel={handleCloseModal}
                    className="modal_newSection"
                >
                    <div className="modal_newSection-content">
                        <div className="modal_newSection-header">
                            <h4 className="modal_newSection-title">
                                New Section
                            </h4>
                            <CloseOutlined onClick={handleCloseModal} />
                        </div>
                        <div className="modal_newSection-input">
                            <label htmlFor="">Section Name*</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Section title here"
                            />
                        </div>
                        <div className="modal_newSection-btn">
                            <button
                                className="modal_newSection-btn close"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                            <button className="modal_newSection-btn">
                                Add Section
                            </button>
                        </div>
                    </div>
                </VideoModal>
            </div>
            <div className="curriculum_intro">
                <div className="curriculum_intro-header">
                    <div className="intro_header-left">
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ fontSize: "18px" }}
                        />
                        Introduction
                    </div>
                    <div className="intro_header-right">
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ color: "#afafaf" }}
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "#afafaf" }}
                        />
                    </div>
                </div>
                <div className="curriculum_intro_body">
                    <div className="curriculum_intro-item">
                        <div className="intro_body-left">
                            <FontAwesomeIcon icon={faFile} /> Lecture Title
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
                            <FontAwesomeIcon icon={faSquareCaretDown} /> Quiz
                            Title
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
                            <FontAwesomeIcon icon={faCalendarWeek} /> Assignment
                            Title
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
            </div>
            <div className="curriculum_intro_end">
                <button className="intro_end" onClick={handleOpenLecture}>
                    <FontAwesomeIcon
                        icon={faSquarePlus}
                        style={{ marginRight: "10px", fontSize: "17px" }}
                    />
                    Lecture
                </button>
                <button className="intro_end" onClick={handleOpenQuiz}>
                    <FontAwesomeIcon
                        icon={faSquarePlus}
                        style={{ marginRight: "10px", fontSize: "17px" }}
                    />
                    Quiz
                </button>
                <button className="intro_end" onClick={handleOpenAssignment}>
                    <FontAwesomeIcon
                        icon={faSquarePlus}
                        style={{ marginRight: "10px", fontSize: "17px" }}
                    />
                    Assignment
                </button>
                <VideoModal
                    isOpen={isOpenLecture}
                    onCancel={handleCloseLecture}
                >
                    <div className="add_lecture_modal">
                        <h5 className="add_lecture_modal_title">Add lecture</h5>
                        <div className="add_lecture_modal_body">
                            <button
                                className={`add_lecture_btn ${
                                    isSeleceted === "basic" ? "active" : ""
                                }`}
                                onClick={() => setIsSelected("basic")}
                            >
                                <FontAwesomeIcon
                                    icon={faFileLines}
                                    style={{ marginRight: "3px" }}
                                />{" "}
                                Basic
                            </button>
                            <button
                                className={`add_lecture_btn ${
                                    isSeleceted === "video" ? "active" : ""
                                }`}
                                onClick={() => setIsSelected("video")}
                            >
                                <FontAwesomeIcon
                                    icon={faVideo}
                                    style={{ marginRight: "3px" }}
                                />{" "}
                                Video
                            </button>
                            <button
                                className={`add_lecture_btn ${
                                    isSeleceted === "attachment" ? "active" : ""
                                }`}
                                onClick={() => setIsSelected("attachment")}
                            >
                                <FontAwesomeIcon
                                    icon={faPaperclip}
                                    style={{ marginRight: "3px" }}
                                />
                                Attachments
                            </button>
                        </div>
                        {isSeleceted === "basic" && <Add_lecture_basic />}
                        {isSeleceted === "video" && <Add_lecture_video />}
                        {isSeleceted === "attachment" && (
                            <Add_lecture_attachment />
                        )}
                    </div>
                </VideoModal>

                <VideoModal isOpen={isOpenQuiz} onCancel={handleCloseQuiz}>
                    <div className="add_quiz_modal add_lecture_modal">
                        <h5 className="add_lecture_modal_title">Add quiz</h5>
                        <div className="add_lecture_modal_body">
                            <button
                                className={`add_lecture_btn ${
                                    isSeleceted === "basicQuiz" ? "active" : ""
                                }`}
                                onClick={() => setIsSelected("basicQuiz")}
                            >
                                <FontAwesomeIcon
                                    icon={faFileLines}
                                    style={{ marginRight: "3px" }}
                                />{" "}
                                Basic
                            </button>
                            <button
                                className={`add_lecture_btn ${
                                    isSeleceted === "question" ? "active" : ""
                                }`}
                                onClick={() => setIsSelected("question")}
                            >
                                <FontAwesomeIcon
                                    icon={faCircleQuestion}
                                    style={{ marginRight: "3px" }}
                                />
                                Question
                            </button>
                            <button
                                className={`add_lecture_btn ${
                                    isSeleceted === "setting" ? "active" : ""
                                }`}
                                onClick={() => setIsSelected("setting")}
                            >
                                <FontAwesomeIcon
                                    icon={faGear}
                                    style={{ marginRight: "3px" }}
                                />
                                Setting
                            </button>
                        </div>
                        {isSeleceted === "basicQuiz" && <Add_quiz_basic />}
                        {isSeleceted === "question" && <Add_quiz_question />}
                        {isSeleceted === "setting" && <Add_quiz_setting />}
                    </div>
                </VideoModal>

                <VideoModal
                    isOpen={isOpenAssignment}
                    onCancel={handleCloseAssignment}
                >
                    <div className="add_quiz_modal add_lecture_modal">
                        <h5 className="add_lecture_modal_title">
                            Add Assignment
                        </h5>
                        <div className="add_lecture_basic">
                            <div className="add_lecture_basic-top">
                                <div className="add_lecture_basic-title">
                                    Assignment Title*
                                </div>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="add_lecture_basic-input"
                                    placeholder="Assignment title here"
                                />
                            </div>
                            <div className="add_lecture_basic-bot">
                                <div className="add_lecture_basic-desc">
                                    Description*
                                </div>
                                <ReactQuill
                                    theme="snow"
                                    style={{ height: "150px" }}
                                />
                            </div>
                            <div className="add_lecture_basic-switch"></div>

                            <div className="add_quiz_setting_input-row">
                                <div className="setting_input-item">
                                    <label htmlFor="">Time Duration*</label>
                                    <div
                                        className="setting_input-form"
                                        style={{
                                            border: "none",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <input
                                            type="number"
                                            name=""
                                            id=""
                                            style={{
                                                width: "45%",
                                                border: "1px solid #efefef",
                                            }}
                                        />

                                        <Select
                                            placeholder="Select"
                                            style={{
                                                width: "45%",
                                                height: "40px",
                                            }}
                                            options={[
                                                {
                                                    value: "Weeks",
                                                    label: "Weeks",
                                                },
                                                {
                                                    value: "Days",
                                                    label: "Days",
                                                },
                                                {
                                                    value: "Hours",
                                                    label: "Hours",
                                                },
                                            ]}
                                        />
                                    </div>
                                    <div className="setting_input-item-desc">
                                        Assignment time duration, set 0 for no
                                        limit.
                                    </div>
                                </div>

                                <div className="setting_input-item">
                                    <label htmlFor="">Total Number*</label>
                                    <div className="setting_input-form">
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div className="setting_input-item-desc">
                                        Maximum points a student can score
                                    </div>
                                </div>

                                <div className="setting_input-item">
                                    <label htmlFor="">
                                        Minimum Pass Number*
                                    </label>
                                    <div className="setting_input-form">
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div className="setting_input-item-desc">
                                        Minimum points required for the student
                                        to pass this assignment.
                                    </div>
                                </div>
                            </div>

                            <div
                                className="add_quiz_setting_input-row"
                                style={{
                                    marginTop: "30px",
                                    paddingTop: "30px",
                                    borderTop: "1px solid #efefef",
                                }}
                            >
                                <div
                                    className="setting_input-item"
                                    style={{ width: "360px" }}
                                >
                                    <label htmlFor="">
                                        Upload attachment limit*
                                    </label>
                                    <div
                                        className="setting_input-form"
                                        style={{ width: "100%" }}
                                    >
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div className="setting_input-item-desc">
                                        Maximum attachment size limit
                                    </div>
                                </div>

                                <div
                                    className="setting_input-item"
                                    style={{ width: "360px" }}
                                >
                                    <label htmlFor="">
                                        Maximum attachment size limit
                                    </label>
                                    <div
                                        className="setting_input-form"
                                        style={{ width: "100%" }}
                                    >
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div className="setting_input-item-desc">
                                        Define maximum attachment size in MB.
                                    </div>
                                </div>
                            </div>

                            <div className="add_lecture_attachment">
                                <div className="add_lecture_attachment-inner">
                                    <div className="add_lecture_attachment-input-wrap">
                                        <input
                                            type="file"
                                            name=""
                                            id="add_lecture_attachment-input"
                                        />
                                        <label htmlFor="add_lecture_attachment-input">
                                            <FontAwesomeIcon
                                                icon={faSquarePlus}
                                                style={{
                                                    marginRight: "10px",
                                                    fontSize: "17px",
                                                }}
                                            />
                                            Attachment
                                        </label>
                                    </div>
                                    <div className="add_lecture_attachment-input-desc">
                                        Supports: jpg, jpeg, png, pdf or .zip
                                    </div>

                                    <div className="add_lecture_attachment_updateID-wrap">
                                        <div className="updateID_item">
                                            <div className="updateID_item-title">
                                                Uploaded ID: 5
                                            </div>
                                            <button className="updateID_item-delete">
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    style={{
                                                        color: "#926a9d",
                                                    }}
                                                />
                                            </button>
                                        </div>
                                        <div className="updateID_item">
                                            <div className="updateID_item-title">
                                                Uploaded ID: 6
                                            </div>
                                            <button className="updateID_item-delete">
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    style={{
                                                        color: "#926a9d",
                                                    }}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="add_lecture_basic-btn-wrap">
                                <button className="add_lecture_basic-btn close">
                                    Close
                                </button>
                                <button className="add_lecture_basic-btn">
                                    Add Assignment
                                </button>
                            </div>
                        </div>
                    </div>
                </VideoModal>
            </div>
        </div>
    );
}

export default Curriculum;
