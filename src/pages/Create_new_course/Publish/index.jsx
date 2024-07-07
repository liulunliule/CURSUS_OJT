import React from "react";
import "./index.scss";
import { UploadOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
function Publish() {
    return (
        <div className="create_course_publish">
            <div className="publish_title">
                <FontAwesomeIcon icon={faUpload} className="publish_icon" />
                Submit
            </div>
            <div className="publish_block">
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ fontSize: "25px", marginBottom: "20px" }}
                />
                <p>
                    Your course is in a draft state. Students cannot view,
                    purchase or enroll in this course. For students that are
                    already enrolled, this course will not appear on their
                    student Dashboard.
                </p>
            </div>
        </div>
    );
}

export default Publish;
