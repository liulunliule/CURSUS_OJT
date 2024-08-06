import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../redux/features/certificationTestPageSlice";

const Certification_Test_Page = () => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState({ minutes: 59, seconds: 59 });
  const { questions, status, error } = useSelector(
    (state) => state.certificationTestPage
  );
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { minutes, seconds } = prevTime;
        if (seconds > 0) {
          return { minutes, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { minutes: minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="Certification_test">
      <div className="toolbar_certification">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="toolbar_title">
                <div className="titleleft">
                  <div className="toolbar_title_item">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="/secondLayout/certification_center">
                            Certification Center
                          </Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          WordPress Test View
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div className="titleright">
                  <Link
                    to="/secondLayout/certification_center"
                    className="blog_link"
                  >
                    <FontAwesomeIcon icon={faAnglesLeft} /> Back to
                    Certification Center
                  </Link>
                </div>
              </div>
              <div className="main_title">
                <h2>WordPress Test View</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="certi_form stickytime">
              <div className="test_timer_bg">
                <ul className="test_timer_left">
                  <li>
                    <div className="timer_time">
                      <h4>{questions.length}</h4>
                      <p>Questions</p>
                    </div>
                  </li>
                  <li>
                    <div className="timer_time">
                      <h4 id="timer">
                        {String(timeLeft.minutes).padStart(2, "0")}:
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </h4>
                      <p>Minutes</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="certi_form">
              <div className="">
                {status === "loading" && <div>Loading...</div>}
                {status === "failed" && <div>{error}</div>}
                {status === "succeeded" &&
                  questions.length > 0 &&
                  questions.map((ques, index) => (
                    <div className="ques_item">
                      <div className="ques_title">
                        <span>Ques {index + 1} :-</span>
                        {ques.Question}
                      </div>
                      <div className="UI form">
                        <div className="gr_ed flds">
                          {ques.Kind_Of_Answer === "single choice" ? (
                            ques.Answer.map((option, idx) => (
                              <div className="fld fltr-radid" key={idx}>
                                <div className="UI radid ckbox">
                                  <input
                                    type="radio"
                                    name={`question${ques.id}`}
                                    tabIndex="0"
                                    className="hidden"
                                  />
                                  <label>{option}</label>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="UI search focus mt-15">
                              <div className="UI form swdh30">
                                <div className="fld">
                                  <textarea
                                    rows="5"
                                    name="answer"
                                    id="id_answer"
                                    placeholder="Pls explain"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <Link to="/secondLayout/Certification_test_result">
                <button className="test_submit_btn" type="submit">
                  Submit Test
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification_Test_Page;
