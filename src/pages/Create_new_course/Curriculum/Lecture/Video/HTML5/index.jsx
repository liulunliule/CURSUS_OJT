import React from "react";
import "./index.scss";
function CRC_add_lecture_html5() {
    return (
        <div className="crc_add_lecture_html5">
            <div className="html5_upload_video_wrapper">
                <div className="html5_upload_video">
                    <div className="html5_upload_video-btn">
                        <div className="html5_upload_input-wrap">
                            <input
                                type="file"
                                name=""
                                id="html5_upload_input"
                                className="html5_upload_input"
                            />
                            <label htmlFor="html5_upload_input">
                                Upload Video
                            </label>
                        </div>
                        <span className="upload_video_file">
                            File Format: .mp4
                        </span>
                        <span className="upload_video_id">
                            Uploaded ID : <b>12</b>
                        </span>
                    </div>
                </div>
                <div className="html5_upload_video">
                    <div className="html5_upload_video-btn">
                        <div className="html5_upload_input-wrap">
                            <input
                                type="file"
                                name=""
                                id="html5_upload_input"
                                className="html5_upload_input"
                            />
                            <label htmlFor="html5_upload_input">
                                Video Poster
                            </label>
                        </div>
                        <span className="upload_video_file video_poster_file">
                            Uploaded ID : preview.jpg
                        </span>
                        <span className="upload_video_id video_poster_file_size">
                            Size: 590x300 pixels. Supports: jpg,jpeg, or png
                        </span>
                    </div>
                </div>
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

export default CRC_add_lecture_html5;
