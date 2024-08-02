import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { SendFeedbackLogo_SideBar } from "../../assets";
import TextArea from "antd/es/input/TextArea";
import { Input, message } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { CloudUploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { addFeedbackReportData } from "../../redux/features/feedbackvsReportSlice";
import { Link, useNavigate } from "react-router-dom";

function SendFeedbackPage() {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [desribe, setDesribe] = useState("");
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = async () => {
    if (!email || !desribe) {
      message.error("Email and Describe fields are required");
      return;
    }
    if (!validateEmail(email)) {
      message.error("Invalid email address");
      return;
    }
    try {
      await dispatch(
        addFeedbackReportData({ Email: email, Desribe: desribe })
      ).unwrap();
      message.success("Feedback submitted successfully");
      setEmail("");
      setDesribe("");
      navigate("/report_history_page");
    } catch (error) {
      message.error("Failed to submit feedback");
    }
  };

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
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          className="SendFeedbackPage_Contents_TextArea"
          rows={4}
          placeholder=" Describe your issue or share your ideas"
          maxLength={3000}
          onChange={(e) => setDesribe(e.target.value)}
        />
        <span className="SendFeedbackPage_Contents_Span">Add Screenshots</span>

        <Dragger>
          <p className="ant-upload-drag-icon">
            <CloudUploadOutlined className="Drag_Icon" />
          </p>
          <p className="ant-upload-text Drag_Text">
            Select screenshots to upload
          </p>
          <p className="ant-upload-hint Drag_hint">
            or drag and drop screenshots
          </p>
        </Dragger>

        <button
          className="SendFeedbackPage_Contents_button"
          onClick={handleSubmit}
        >
          Send Feedback
        </button>
      </div>
    </div>
  );
}

export default SendFeedbackPage;
