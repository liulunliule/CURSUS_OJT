import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
// import { hanldeGetResult } from "./dataResult";
import { useDispatch, useSelector } from "react-redux";
import { fetchResult } from "../../redux/features/certificationTestResultSlice";

const Certification_test_result = () => {
  const dispatch = useDispatch();
  const { result, status, error } = useSelector(
    (state) => state.certificationTestResult
  );

  useEffect(() => {
    dispatch(fetchResult());
  }, [dispatch]);
  return (
    <div className="test_result">
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
                          Result{" "}
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
                <h2>Result</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="certi_form stickytime">
              <div className="test_result_bg">
                {status === "loading" && (
                  <div>
                    <h1>Waitting for result...</h1>
                  </div>
                )}
                {status === "failed" && (
                  <div>
                    <h1>Failed to load the result</h1>
                  </div>
                )}
                {status === "succeeded" && result && (
                  <div>
                    <ul className="test_result_left">
                      <li>
                        <div className="result_dt">
                          <div className="right_ans">
                            <FontAwesomeIcon
                              icon={faCheck}
                              style={{
                                // color: "#fff",
                                width: "35px",
                                height: "100%",
                              }}
                            />
                          </div>
                          <p>
                            Right<span>({result.Right})</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="result_dt">
                          <div className="wrong_ans">
                            <FontAwesomeIcon
                              icon={faXmark}
                              style={{
                                // color: "#fff",
                                width: "35px",
                                height: "100%",
                              }}
                            />
                          </div>
                          <p>
                            Wrong<span>({result.Wrong})</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="result_dt">
                          <h4>{result.Right}</h4>
                          <p>Out of {result.totalMark}</p>
                        </div>
                      </li>
                    </ul>
                    <div className="result_content">
                      <h2>Congratulation! Joginder</h2>
                      <p>You are eligible for this certificate</p>
                      <Link to="/certificate">
                        <button className="download_btn" type="submit">
                          Download Certificate
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification_test_result;
