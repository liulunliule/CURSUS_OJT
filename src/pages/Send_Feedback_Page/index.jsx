import { useSelector } from "react-redux";
import "./index.scss";
import { SendFeedbackLogo_SideBar } from "../../assets";
import TextArea from "antd/es/input/TextArea";
import { Input } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { CloudUploadOutlined } from "@ant-design/icons";

function SendFeedbackPage() {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  return (
    <div className={`SendFeedbackPage ${isShowAll ? "active" : ""}`}>
      <div className="SendFeedbackPage_Contents">
        <div className="SendFeedbackPage_Contents_Title">
          <img
            className="SendFeedbackLogo_SendFeedbackPage"
            src={SendFeedbackLogo_SideBar}
            alt=""
          />
          <h2 className="SendFeedbackPage_Contents_Title_H2">Send Feedback</h2>
        </div>
        <Input
          className="SendFeedbackPage_Contents_Input"
          placeholder="Email address"
        />
        <TextArea
          className="SendFeedbackPage_Contents_TextArea"
          rows={4}
          placeholder=" Describe your issue or share your ideas"
          maxLength={3000}
        />
        <span className="SendFeedbackPage_Contents_Span">Add Screenshots</span>

        <Dragger>
          <p className="ant-upload-drag-icon"><CloudUploadOutlined className="Drag_Icon" /></p>
          <p className="ant-upload-text Drag_Text">Select screenshots to upload</p>
          <p className="ant-upload-hint Drag_hint">or drag and drop screenshots</p>
        </Dragger>

        <button className="SendFeedbackPage_Contents_button">Send Feedback</button>
      </div>
    </div>
  );
}

export default SendFeedbackPage;
