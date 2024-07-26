import React from "react";
import "./index.scss";
import { media_thumb_1 } from "../../../../assets";
function Media_embedded() {
  return (
    <div className="media_embedded">
      <div className="media_embedded-input">
        <label htmlFor="media_embedded">Embedded URL*</label>
        <textarea
          type="text"
          name=""
          id="media_embedded"
          placeholder="Place your embedded code here"
        />
      </div>

      <div className="media_html_choose-thumb">
        <div className="media_html_choose-thumb-title">Course thumbnail*</div>

        <div className="media_html_choose-thumb-item">
          <img src={media_thumb_1} alt="" className="html_thum" />
          <div className="media_html_choose_thumb-cta">
            <div className="choose_thumb-btn">
              <input type="file" name="" id="choose_thumb" />
              <label htmlFor="choose_thumb">Choose thumbnail</label>
            </div>
            <span className="choose-thumb-desc">
              Size: 590x300 pixels. Supports: jpg,jpeg, or png
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media_embedded;
