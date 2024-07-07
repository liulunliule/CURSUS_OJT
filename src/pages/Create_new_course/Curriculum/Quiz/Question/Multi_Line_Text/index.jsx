import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { Image, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
function Milti_Line_Text() {
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState([]);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) =>
        setFileList(newFileList);
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: "none",
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );
    return (
        <div className="single_choice_page">
            <div className="single_choice_add_info">
                <div className="single_choice_add_image">
                    <div className="single_choice_add_image-title">Image*</div>
                    <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    {previewImage && (
                        <Image
                            wrapperStyle={{
                                display: "none",
                            }}
                            preview={{
                                visible: previewOpen,
                                onVisibleChange: (visible) =>
                                    setPreviewOpen(visible),
                                afterOpenChange: (visible) =>
                                    !visible && setPreviewImage(""),
                            }}
                            src={previewImage}
                        />
                    )}
                </div>

                <div className="single_choice_add_question">
                    <div className="single_choice_add_question-title">
                        Question Title*
                    </div>
                    <Input
                        placeholder="Write question title"
                        style={{ height: "40px", width: "424px" }}
                    />
                </div>

                <div className="single_choice_score">
                    <div className="single_choice_score-title">Score*</div>
                    <Input
                        placeholder="Write question title"
                        style={{ height: "40px", width: "170px" }}
                    />
                </div>
            </div>

            <button className="add_option-btn">
                <FontAwesomeIcon
                    icon={faFloppyDisk}
                    style={{ marginRight: "10px" }}
                />
                Save Question
            </button>
        </div>
    );
}

export default Milti_Line_Text;
