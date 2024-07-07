import React, { useState } from "react";
import "./index.scss";
import CRC_add_lecture_html5 from "./HTML5";
import CRC_add_lecture_externalURL from "./External_URL";
import CRC_add_lecture_youtube from "./Youtube";
import CRC_add_lecture_vimeo from "./Vimeo";
import CRC_add_lecture_embedded from "./Embedded";
function Add_lecture_video() {
    const [isSelect, setIsSelect] = useState("html5");

    return (
        <div className="add_lecture_video">
            <div className="add_lecture_video-title">
                Select your preferred video type. (.mp4, YouTube, Vimeo etc.)
            </div>
            <div className="add_lecture_video-cta">
                <button
                    className={`add_lecture_video-btn ${
                        isSelect === "html5" ? "active" : ""
                    }`}
                    onClick={() => setIsSelect("html5")}
                >
                    HTML5(mp4)
                </button>
                <button
                    className={`add_lecture_video-btn ${
                        isSelect === "external_URL" ? "active" : ""
                    }`}
                    onClick={() => setIsSelect("external_URL")}
                >
                    External URL
                </button>
                <button
                    className={`add_lecture_video-btn ${
                        isSelect === "youtube" ? "active" : ""
                    }`}
                    onClick={() => setIsSelect("youtube")}
                >
                    Youtube
                </button>
                <button
                    className={`add_lecture_video-btn ${
                        isSelect === "vimeo" ? "active" : ""
                    }`}
                    onClick={() => setIsSelect("vimeo")}
                >
                    Vimeo
                </button>
                <button
                    className={`add_lecture_video-btn ${
                        isSelect === "embedded" ? "active" : ""
                    }`}
                    onClick={() => setIsSelect("embedded")}
                >
                    embedded
                </button>
                {isSelect === "html5" && <CRC_add_lecture_html5 />}
                {isSelect === "external_URL" && <CRC_add_lecture_externalURL />}
                {isSelect === "youtube" && <CRC_add_lecture_youtube />}
                {isSelect === "vimeo" && <CRC_add_lecture_vimeo />}
                {isSelect === "embedded" && <CRC_add_lecture_embedded />}
            </div>
        </div>
    );
}

export default Add_lecture_video;
