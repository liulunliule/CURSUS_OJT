import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Add_lecture_attachment() {
    return (
        <div className="add_lecture_attachment">
            <div className="add_lecture_attachment-inner">
                <div className="add_lecture_attachment-input-wrap">
                    <input
                        type="file"
                        name=""
                        id="add_lecture_attachment-input"
                    />
                    <label htmlFor="add_lecture_attachment-input">
                        <FontAwesomeIcon
                            icon={faSquarePlus}
                            style={{ marginRight: "10px", fontSize: "17px" }}
                        />
                        Attachment
                    </label>
                </div>
                <div className="add_lecture_attachment-input-desc">
                    Supports: jpg, jpeg, png, pdf or .zip
                </div>

                <div className="add_lecture_attachment_updateID-wrap">
                    <div className="updateID_item">
                        <div className="updateID_item-title">
                            Uploaded ID: 12
                        </div>
                        <button className="updateID_item-delete">
                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{
                                    color: "#926a9d",
                                }}
                            />
                        </button>
                    </div>
                    <div className="updateID_item">
                        <div className="updateID_item-title">
                            Uploaded ID: 12
                        </div>
                        <button className="updateID_item-delete">
                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{
                                    color: "#926a9d",
                                }}
                            />
                        </button>
                    </div>
                    <div className="updateID_item">
                        <div className="updateID_item-title">
                            Uploaded ID: 12
                        </div>
                        <button className="updateID_item-delete">
                            <FontAwesomeIcon
                                icon={faTrash}
                                style={{
                                    color: "#926a9d",
                                }}
                            />
                        </button>
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

export default Add_lecture_attachment;
