import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import Media_html5 from "./HTML5";
import Media_external_url from "./External_url";
import Media_youtube from "./Youtube";
import Media_vimeo from "./Vimeo";
import Media_embedded from "./Embedded";

function Media() {
  const [isSelect, setIsSelect] = useState("html5"); // Default selected media type
  const [mediaInfo, setMediaInfo] = useState({
    video: "", // This will hold the thumbnail URL
  });

  return (
    <div className="create_course_media">
      <div className="media_title">
        <FontAwesomeIcon icon={faImage} className="media_icon" />
        Media
      </div>
      <div className="media_content">
        <div className="media_content-intro">
          Intro Course overview provider type. (.mp4, YouTube, Vimeo, etc.)
        </div>
        <div className="media_content-cta">
          <button
            className={`media_content-link ${
              isSelect === "html5" ? "active" : ""
            }`}
            onClick={() => setIsSelect("html5")}
          >
            HTML5(mp4)
          </button>
          <button
            className={`media_content-link ${
              isSelect === "external_url" ? "active" : ""
            }`}
            onClick={() => setIsSelect("external_url")}
          >
            External URL
          </button>
          <button
            className={`media_content-link ${
              isSelect === "youtube" ? "active" : ""
            }`}
            onClick={() => setIsSelect("youtube")}
          >
            Youtube
          </button>
          <button
            className={`media_content-link ${
              isSelect === "vimeo" ? "active" : ""
            }`}
            onClick={() => setIsSelect("vimeo")}
          >
            Vimeo
          </button>
          <button
            className={`media_content-link ${
              isSelect === "embedded" ? "active" : ""
            }`}
            onClick={() => setIsSelect("embedded")}
          >
            Embedded
          </button>
        </div>
        {/* Render the selected media component with props */}
        {isSelect === "html5" && (
          <Media_html5 mediaInfo={mediaInfo} setMediaInfo={setMediaInfo} />
        )}
        {isSelect === "external_url" && <Media_external_url />}
        {isSelect === "youtube" && <Media_youtube />}
        {isSelect === "vimeo" && <Media_vimeo />}
        {isSelect === "embedded" && <Media_embedded />}
      </div>
    </div>
  );
}

export default Media;
