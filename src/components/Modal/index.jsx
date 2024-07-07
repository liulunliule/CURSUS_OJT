import React from "react";
import "./index.scss";
function VideoModal({ isOpen = false, children, onCancel }) {
    return (
        <div className={`video_modal ${isOpen ? "active" : ""}`}>
            <div className="video_modal-overlay" onClick={onCancel}></div>
            <div className="video_modal-content">{children}</div>
        </div>
    );
}

export default VideoModal;
