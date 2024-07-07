import { Collapse } from "antd";
import React from "react";
import "./index.scss";
import {
    DownloadOutlined,
    FileOutlined,
    PlayCircleOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;
function CustomAccordion() {
    return (
        <div>
            <Collapse accordion className="custom-collapse">
                <Panel
                    header={
                        <div className="custom-panel-header">
                            <span className="course-name">
                                <VideoCameraOutlined className="icon" />
                                Introduction to this Course
                            </span>
                            <div className="course-info">
                                <span className="lecture-quantity">
                                    8 lectures
                                </span>
                                <span className="time">22:08</span>
                            </div>
                        </div>
                    }
                    key="1"
                    className="custom-panel"
                >
                    <div className="panel-content">
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>A Note On Asking For Help</p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Introducing Our TA</p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Join the Online Community</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Why This Course?</p>
                        </div>
                        <div className="panel-item">
                            <DownloadOutlined className="icon-item" />
                            <p>Syllabus Download</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Syllabus Walkthrough</p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />

                            <p>Lecture Slides</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse accordion className="custom-collapse">
                <Panel
                    header={
                        <div className="custom-panel-header">
                            <span className="course-name">
                                <VideoCameraOutlined className="icon" />
                                Introduction to Front End Development
                            </span>
                            <div className="course-info">
                                <span className="lecture-quantity">
                                    6 lectures
                                </span>
                                <span className="time">27:26</span>
                            </div>
                        </div>
                    }
                    key="1"
                    className="custom-panel"
                >
                    <div className="panel-content">
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Unit Objectives</p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>
                                Note about Setting Up Front-End Developer
                                Environment
                            </p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Setting Up Front-End Developer Environment</p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Note about Introduction to the Web</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Introduction to the Web</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>The Front End Holy Trinity</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse accordion className="custom-collapse">
                <Panel
                    header={
                        <div className="custom-panel-header">
                            <span className="course-name">
                                <VideoCameraOutlined className="icon" />
                                Introduction to HTML
                            </span>
                            <div className="course-info">
                                <span className="lecture-quantity">
                                    13 lectures
                                </span>
                                <span className="time">58:55</span>
                            </div>
                        </div>
                    }
                    key="1"
                    className="custom-panel"
                >
                    <div className="panel-content">
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Unit Objectives</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>
                                HTML Basicsng Up Front-End Developer Environment
                            </p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Note about Introduction to MDN</p>
                        </div>

                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Introduction to MDN</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Boilerplate and Comments</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Basic Tags</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment: SOLUTION</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Divs and Spans</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Attributes</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment: SOLUTION</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse accordion className="custom-collapse">
                <Panel
                    header={
                        <div className="custom-panel-header">
                            <span className="course-name">
                                <VideoCameraOutlined className="icon" />
                                Introduction to HTML
                            </span>
                            <div className="course-info">
                                <span className="lecture-quantity">
                                    13 lectures
                                </span>
                                <span className="time">58:55</span>
                            </div>
                        </div>
                    }
                    key="1"
                    className="custom-panel"
                >
                    <div className="panel-content">
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Unit Objectives</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>
                                HTML Basicsng Up Front-End Developer Environment
                            </p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Note about Introduction to MDN</p>
                        </div>

                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Introduction to MDN</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Boilerplate and Comments</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Basic Tags</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment: SOLUTION</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Divs and Spans</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Attributes</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment: SOLUTION</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse accordion className="custom-collapse">
                <Panel
                    header={
                        <div className="custom-panel-header">
                            <span className="course-name">
                                <VideoCameraOutlined className="icon" />
                                Intermediate HTML
                            </span>
                            <div className="course-info">
                                <span className="lecture-quantity">
                                    13 lectures
                                </span>
                                <span className="time">01.12:29</span>
                            </div>
                        </div>
                    }
                    key="1"
                    className="custom-panel"
                >
                    <div className="panel-content">
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Unit Objectives</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>
                                HTML Basicsng Up Front-End Developer Environment
                            </p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Note about Introduction to MDN</p>
                        </div>

                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Introduction to MDN</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Boilerplate and Comments</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Basic Tags</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment: SOLUTION</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Divs and Spans</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Attributes</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment: SOLUTION</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse accordion className="custom-collapse">
                <Panel
                    header={
                        <div className="custom-panel-header">
                            <span className="course-name">
                                <VideoCameraOutlined className="icon" />
                                Introduction to CSS
                            </span>
                            <div className="course-info">
                                <span className="lecture-quantity">
                                    15 lectures
                                </span>
                                <span className="time">1.40:15</span>
                            </div>
                        </div>
                    }
                    key="1"
                    className="custom-panel"
                >
                    <div className="panel-content">
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Unit Objectives</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>
                                HTML Basicsng Up Front-End Developer Environment
                            </p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Note about Introduction to MDN</p>
                        </div>

                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Introduction to MDN</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Boilerplate and Comments</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Basic Tags</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment: SOLUTION</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Divs and Spans</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Attributes</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment: SOLUTION</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse accordion className="custom-collapse">
                <Panel
                    header={
                        <div className="custom-panel-header">
                            <span className="course-name">
                                <VideoCameraOutlined className="icon" />
                                Intermediate CSS
                            </span>
                            <div className="course-info">
                                <span className="lecture-quantity">
                                    16 lectures
                                </span>
                                <span className="time">1.26:40</span>
                            </div>
                        </div>
                    }
                    key="1"
                    className="custom-panel"
                >
                    <div className="panel-content">
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Unit Objectives</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>
                                HTML Basicsng Up Front-End Developer Environment
                            </p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Note about Introduction to MDN</p>
                        </div>

                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Introduction to MDN</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Boilerplate and Comments</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Basic Tags</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment: SOLUTION</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Divs and Spans</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Attributes</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment: SOLUTION</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse accordion className="custom-collapse">
                <Panel
                    header={
                        <div className="custom-panel-header">
                            <span className="course-name">
                                <VideoCameraOutlined className="icon" />
                                Bootstrap
                            </span>
                            <div className="course-info">
                                <span className="lecture-quantity">
                                    16 lectures
                                </span>
                                <span className="time">1.59:55</span>
                            </div>
                        </div>
                    }
                    key="1"
                    className="custom-panel"
                >
                    <div className="panel-content">
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Unit Objectives</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>
                                HTML Basicsng Up Front-End Developer Environment
                            </p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Note about Introduction to MDN</p>
                        </div>

                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Introduction to MDN</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Boilerplate and Comments</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Basic Tags</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment: SOLUTION</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Divs and Spans</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Attributes</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment: SOLUTION</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Collapse accordion className="custom-collapse">
                <Panel
                    header={
                        <div className="custom-panel-header">
                            <span className="course-name">
                                <VideoCameraOutlined className="icon" />
                                Bootstrap 4!
                            </span>
                            <div className="course-info">
                                <span className="lecture-quantity">
                                    11 lectures
                                </span>
                                <span className="time">1.26:45</span>
                            </div>
                        </div>
                    }
                    key="1"
                    className="custom-panel"
                >
                    <div className="panel-content">
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Unit Objectives</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>
                                HTML Basicsng Up Front-End Developer Environment
                            </p>
                        </div>
                        <div className="panel-item">
                            <FileOutlined className="icon-item" />
                            <p>Note about Introduction to MDN</p>
                        </div>

                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />
                            <p>Introduction to MDN</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Boilerplate and Comments</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Basic Tags</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Lists Assignment: SOLUTION</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Divs and Spans</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>HTML Attributes</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment</p>
                        </div>
                        <div className="panel-item">
                            <PlayCircleOutlined className="icon-item" />

                            <p>Recreate Webpage Assignment: SOLUTION</p>
                        </div>
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
}

export default CustomAccordion;
