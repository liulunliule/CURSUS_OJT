import React, { useState } from "react";
import "./index.scss";
import { FallOutlined } from "@ant-design/icons";
import { Button, Steps, message, theme } from "antd";
import Basic from "./Basic";
import Curriculum from "./Curriculum";
import Media from "./Media";
import Price from "./Price";
import Publish from "./Publish";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Create_new_course() {
    const steps = [
        {
            title: "BASIC",
            content: (
                <div>
                    <Basic />
                </div>
            ),
        },
        {
            title: "CURRICULUM",
            content: (
                <div>
                    <Curriculum />
                </div>
            ),
        },
        {
            title: "MEDIA",
            content: (
                <div>
                    <Media />
                </div>
            ),
        },
        {
            title: "PRICE",
            content: (
                <div>
                    <Price />
                </div>
            ),
        },
        {
            title: "PUBLISH",
            content: (
                <div>
                    <Publish />
                </div>
            ),
        },
    ];

    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

    return (
        <div className={`create_new_course ${isShowAll ? "active" : ""}`}>
            <div className="create_new_course-container">
                <div className="create_new_course_title">
                    <FallOutlined /> Create New Course
                </div>
                <div className="create_new_course_steps">
                    <Steps current={current} items={items} />
                    <div className="create_new_course_steps-content">
                        {steps[current].content}
                    </div>
                    <div
                        className="create_new_course-cta"
                        style={{
                            marginTop: 46,
                        }}
                    >
                        {current < steps.length - 1 && (
                            <Button
                                type="primary"
                                onClick={() => next()}
                                className="create_new_course_btn-next"
                            >
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button
                                type="primary"
                                onClick={() =>
                                    message.success("Processing complete!")
                                }
                                className="create_new_course_btn-next"
                            >
                                Submit for Review
                            </Button>
                        )}
                        {current > 0 && (
                            <Button
                                style={{
                                    margin: "0 8px",
                                }}
                                onClick={() => prev()}
                                className="create_new_course_btn-previous"
                            >
                                Previous
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create_new_course;
