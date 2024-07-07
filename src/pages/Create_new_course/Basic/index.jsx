import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import ReactQuill from "react-quill";
import TextArea from "antd/es/input/TextArea";
import { Select } from "antd";
function Basic() {
    return (
        <div className="create_course_basic">
            <div className="basic_title">
                <FontAwesomeIcon icon={faFaceSmile} className="basic_icon" />
                Basic information
            </div>

            <div className="basic_main_content">
                <div className="basic_main_course-title">
                    <label htmlFor="">Course title*</label>
                    <form action="" className="course_title-input">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Course title here"
                        />
                        <span>60</span>
                    </form>
                    <p className="course_title-desc">
                        (Please make this a maximum of 100 characters and
                        unique.)
                    </p>
                </div>

                <div className="basic_main_short-description">
                    <label htmlFor="">Short Description*</label>
                    <form action="" className="short-description-input">
                        <textarea
                            type="text"
                            name=""
                            id=""
                            placeholder="Item description here..."
                        />
                    </form>
                    <p className="course_title-desc">220 words</p>
                </div>

                <div className="basic_main_course-description">
                    <label htmlFor="">Course Description*</label>
                    <ReactQuill theme="snow" style={{ height: "150px" }} />
                </div>

                <div className="basic_main_requirement">
                    <div className="requirement_left" style={{ width: "50%" }}>
                        <label htmlFor="">
                            What will students learn in your course?*
                        </label>
                        <TextArea rows={5} />
                        <p className="course_title-desc">
                            Student will gain this skills, knowledge after
                            completing this course. (One per line).
                        </p>
                    </div>
                    <div className="requirement_right" style={{ width: "50%" }}>
                        <label htmlFor="">Requirement*</label>
                        <TextArea rows={5} />
                        <p className="course_title-desc">
                            What knowledge, technology, tools required by users
                            to start this course. (One per line).
                        </p>
                    </div>
                </div>

                <div className="basic_main_select">
                    <div className="basic_main_select-item">
                        <label htmlFor="">Course Level*</label>
                        <Select
                            style={{
                                width: "100%",
                                height: "40px",
                            }}
                            placeholder="Nothing selected"
                        ></Select>
                    </div>
                    <div className="basic_main_select-item">
                        <label htmlFor="">Audio Language*</label>
                        <Select
                            style={{
                                width: "100%",
                                height: "40px",
                            }}
                            placeholder="Select audio"
                        ></Select>
                    </div>
                    <div className="basic_main_select-item">
                        <label htmlFor="">Close Caption*</label>
                        <Select
                            style={{
                                width: "100%",
                                height: "40px",
                            }}
                            placeholder="Select caption"
                        ></Select>
                    </div>
                    <div className="basic_main_select-item">
                        <label htmlFor="">Course Category*</label>
                        <Select
                            style={{
                                width: "100%",
                                height: "40px",
                            }}
                            defaultValue="Web Development"
                            options={[
                                {
                                    value: "Web Development",
                                    label: "Web Development",
                                },
                            ]}
                        ></Select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basic;
