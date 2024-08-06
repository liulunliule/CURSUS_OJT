import React, { useState, useEffect } from "react";
import "./index.scss";
import { FallOutlined } from "@ant-design/icons";
import { Button, Steps, message } from "antd";
import Basic from "./Basic";
import Curriculum from "./Curriculum";
import Media from "./Media";
import Price from "./Price";
import Publish from "./Publish";
import { useSelector, useDispatch } from "react-redux";
import { createNewCourse } from "../../redux/features/createCourseSlice";

function Create_new_course() {
  const [basicInfo, setBasicInfo] = useState({
    titlecourse: "",
    ShortDescription: "",
    Description: "",
    Whatlearn: "",
    courseLevel: "",
    audioLanguage: "",
    closeCaption: "",
    courseCategory: "",
  });

  const [mediaInfo, setMediaInfo] = useState({
    video:
      "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg", // Thumbnail URL
  });

  const [price, setPrice] = useState(0); // Default price is 0

  const [newCourse, setNewCourse] = useState({
    titilecourse: "",
    ShortDescription: "",
    Description: "",
    Whatlearn: "",
    price: 0,
    video: "", // Thumbnail URL
    author: "",
    userId: "",
    Level: "",
    audioLanguage: "",
    closeCaption: "",
    typecourse: "",
  });

  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();

  useEffect(() => {
    if (account) {
      setNewCourse((prev) => ({
        ...prev,
        titilecourse: basicInfo.titlecourse,
        ShortDescription: basicInfo.ShortDescription,
        Description: basicInfo.Description,
        Whatlearn: basicInfo.Whatlearn,
        price: price,
        video: mediaInfo.video,
        author: account.userName,
        userId: account.userId,
        Level: basicInfo.courseLevel,
        audioLanguage: basicInfo.audioLanguage,
        closeCaption: basicInfo.closeCaption,
        typecourse: basicInfo.courseCategory,
      }));
    }
  }, [basicInfo, mediaInfo, price, account]);

  const steps = [
    {
      title: "BASIC",
      content: <Basic basicInfo={basicInfo} setBasicInfo={setBasicInfo} />,
    },
    {
      title: "CURRICULUM",
      content: <Curriculum />,
    },
    {
      title: "MEDIA",
      content: <Media mediaInfo={mediaInfo} setMediaInfo={setMediaInfo} />,
    },
    {
      title: "PRICE",
      content: <Price setPrice={setPrice} price={price} />,
    },
    {
      title: "PUBLISH",
      content: <Publish newCourse={newCourse} />,
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = (values) => {
    // console.log("values: ", values);
    dispatch(createNewCourse(newCourse))
      .unwrap()
      .then(() => {
        message.success("Course created successfully!");
        setCurrent(0); // Reset or navigate as needed
      })
      .catch((error) => {
        message.error(`Failed to create course: ${error.message}`);
      });
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  return (
    <div className={`create_new_course ${isShowAll ? "active" : ""}`}>
      <div className="create_new_course-container">
        <div className="create_new_course_title">
          <FallOutlined /> Create New Course
        </div>
        <div className="create_new_course_steps">
          <Steps current={current} items={items} />
          <div className="create_new_course_steps-content">
            {steps[current].content}
          </div>
          <div
            className="create_new_course-cta"
            style={{
              marginTop: 46,
            }}
          >
            {current < steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => next()}
                className="create_new_course_btn-next"
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={handleSubmit}
                className="create_new_course_btn-next"
              >
                Submit for Review
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => prev()}
                className="create_new_course_btn-previous"
              >
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create_new_course;
