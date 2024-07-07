import React from "react";
import "./index.scss";
import { media_thumb_1 } from "../../../../assets";

function Media_vimeo() {
    return (
        <div className="media_vimeo">
            <div className="media_vimeo-input">
                <label htmlFor="media_vimeo">Vimeo URL*</label>
                <input
                    type="text"
                    name=""
                    id="media_vimeo"
                    placeholder="Vimeo Video URL"
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

export default Media_vimeo;
