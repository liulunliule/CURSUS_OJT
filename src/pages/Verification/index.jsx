import React from "react";
import "./index.scss";
import Verified from "../../assets/img/verification.png";
import dashboard from "../../assets/img/dashboard.png";
import { useSelector } from "react-redux";

const Verification = () => {
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
    return (
        <div className={`wrapper12 ${isShowAll ? "active" : ""}`}>
            <div className="sa4d25_sa">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="noti-title100">
                                <img src={Verified} className="" />
                                Verification
                            </h2>
                        </div>
                    </div>

                    <div className="row ver-sec">
                        <div className="col-xl-6 col-lg-8 col-md-8">
                            <div className="ver-cont">
                                <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/verified-account.svg" />
                                <h4>Verification with Edututs+</h4>
                                <p>
                                    Praesent sed sapien gravida, tempus nunc
                                    nec, euismod turpis. Mauris quis scelerisque
                                    arcu. Quisque et aliquet nisl, id placerat
                                    est. Morbi quis imperdiet nulla.
                                </p>
                                <ul className="ver-alert">
                                    <li>
                                        <div className="req_group">
                                            <div className="dash_thingy">
                                                <img src={dashboard} />
                                            </div>
                                            <div className="edututs_required">
                                                <span>
                                                    <strong>
                                                        14 subscribers
                                                    </strong>
                                                </span>
                                                <span>500 required</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="req_group">
                                            <div className="dash_thingy">
                                                <img src={dashboard} />
                                            </div>
                                            <div className="edututs_required">
                                                <span>
                                                    <strong>
                                                        10 public watch hours
                                                    </strong>
                                                </span>
                                                <span>1,500 required</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="verify_text">
                                    <img src={Verified} className="" />
                                    We'll send you an email when you're eligible
                                    to apply
                                </div>

                                <div className="form_ver">
                                    <h4>Verify Your ID</h4>
                                    <form>
                                        <div className="random_title">
                                            <label>Course Title*</label>
                                            <div class="input_tab_box">
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    name="fullname"
                                                    maxlength="60"
                                                    id="full[name]"
                                                    value=""
                                                />
                                            </div>
                                        </div>
                                        <div className="random_doc">
                                            <label>Upload Document*</label>
                                            <div className="inputGroup">
                                                <div className="customFile">
                                                    <input
                                                        type="file"
                                                        class="custom-file-input"
                                                        id="inputGroupFile06"
                                                    />
                                                    <label
                                                        class="custom-file-label"
                                                        for="inputGroupFile06"
                                                    >
                                                        No Choose
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            class="verify_submit_btn"
                                            type="submit"
                                        >
                                            Submit Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verification;
