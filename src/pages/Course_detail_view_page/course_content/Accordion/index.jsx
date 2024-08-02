import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import "./index.scss";
import {
    DownloadOutlined,
    FileOutlined,
    PlayCircleOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { Panel } = Collapse;
function CustomAccordion() {
    const [courseContent, setCourseContent] = useState([]);

    const fetchCourseContent = async () => {
        const response = await axios.get(
            "https://6696231a0312447373c1386e.mockapi.io/Course_content"
        );

        setCourseContent(response.data);
    };

    useEffect(() => {
        fetchCourseContent();
    }, []);
    return (
        <div>
            {courseContent.map((item, index) => (
                <Collapse accordion className="custom-collapse" key={index}>
                    <Panel
                        header={
                            <div className="custom-panel-header">
                                <span className="course-name">
                                    <VideoCameraOutlined className="icon" />
                                    {item.title}
                                </span>
                                <div className="course-info">
                                    <span className="lecture-quantity">
                                        {item.lectures}
                                    </span>
                                    <span className="time">
                                        {item.duration}
                                    </span>
                                </div>
                            </div>
                        }
                        key="1"
                        className="custom-panel"
                    >
                        <div className="panel-content">
                            {item.content.map((contentItem, contentIndex) => (
                                <div className="panel-item" key={contentIndex}>
                                    <FileOutlined className="icon-item" />
                                    <p>{contentItem}</p>
                                </div>
                            ))}
                        </div>
                    </Panel>
                </Collapse>
            ))}
        </div>
    );
}

export default CustomAccordion;
