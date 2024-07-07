import React from "react";
import "./index.scss";
import { media_thumb_1 } from "../../../../assets";
function Media_external_url() {
    return (
        <div className="media_external_url">
            <div className="media_external_url-input">
                <label htmlFor="media_external">External URL*</label>
                <input
                    type="text"
                    name=""
                    id="media_external"
                    placeholder="External Video URL"
                />
            </div>
            <div className="media_html_choose-thumb">
                <div className="media_html_choose-thumb-title">
                    Course thumbnail*
                </div>

                
                <div className="media_html_choose-thumb-item">
                    <img src={media_thumb_1} alt="" className="html_thum" />
                    <div className="media_html_choose_thumb-cta">
                        <div className="choose_thumb-btn">
                            <input type="file" name="" id="choose_thumb" />
                            <label htmlFor="choose_thumb">
                                Choose thumbnail
                            </label>
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

export default Media_external_url;
