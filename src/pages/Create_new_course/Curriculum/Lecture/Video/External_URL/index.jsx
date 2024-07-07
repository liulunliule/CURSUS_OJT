import React from "react";
import "./index.scss";
function CRC_add_lecture_externalURL() {
    return (
        <div className="crc_add_lecture_externalURL">
            <div className="externalURL_input-title">External URL*</div>
            <div className="externalURL_input-wrap">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="External Video URL"
                />
            </div>

            <div className="html5_video-runtime">
                <div className="html5_video-runtime-title">
                    Video Runtime - hh:mm:ss*
                </div>
                <div className="html5_video-duration-time">
                    <div className="html5_video-input-group">
                        <input
                            type="text"
                            name=""
                            value="00"
                            id=""
                            className="video_runtime"
                        />
                        <input
                            type="text"
                            name=""
                            value="1"
                            id=""
                            className="video_runtime"
                        />
                        <input
                            type="text"
                            name=""
                            value="00"
                            id=""
                            className="video_runtime"
                        />
                    </div>
                </div>
            </div>
            <div className="add_lecture_basic-btn-wrap">
                <button className="add_lecture_basic-btn close">Close</button>
                <button className="add_lecture_basic-btn">Add lecture</button>
            </div>
        </div>
    );
}

export default CRC_add_lecture_externalURL;
