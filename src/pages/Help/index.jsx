import React, { useState } from "react";
import "./index.scss";
import Search from "../../assets/img/searchIcon.png";
import Wallet from "../../assets/img/wallet.png";
import Start from "../../assets/img/start.png";
import { useSelector } from "react-redux";

const Help = () => {
  const [activeTab, setActiveTab] = useState("nav-instructor");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // Cập nhật state activeTab với tabId được click
  };
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <div className={`wrapper12 _help ${isShowAll ? "active" : ""}`}>
      <div className="help-background">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="helpSection">
                <div className="row justify-content-md-center">
                  <div className="col-md-6">
                    <div className="help_title">
                      <h2>How may we help you?</h2>
                      <div>
                        <div className="search-focus">
                          <div className="search-input">
                            <img src={Search} className="search_icon" />
                            <input
                              className="explore-search"
                              type="text"
                              placeholder="Search for solutions"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="instu-tab">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="instu-section">
                <div className="ins-or-stu">
                  <nav>
                    <div
                      className="nav nav-tabs tab_crse"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        className={`nav-item nav-link ${
                          activeTab === "nav-instructor" ? "active" : ""
                        }`}
                        id="nav-instructor-tab"
                        data-bs-toggle="tab"
                        href="#nav-instructor"
                        role="tab"
                        aria-selected={activeTab === "nav-instructor"}
                        onClick={() => handleTabClick("nav-instructor")}
                      >
                        Instructor
                      </a>
                      <a
                        className={`nav-item nav-link ${
                          activeTab === "nav-student" ? "active" : ""
                        }`}
                        id="nav-student-tab"
                        data-bs-toggle="tab"
                        href="#nav-student"
                        role="tab"
                        aria-selected={activeTab === "nav-student"}
                        onClick={() => handleTabClick("nav-student")}
                      >
                        Student
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="instu-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="course_tab_content">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "nav-instructor" ? "active show" : ""
                    }`}
                    id="nav-instructor"
                    role="tabpanel"
                    aria-labelledby="nav-instructor-tab"
                  >
                    <div className="instr-cont">
                      <div className="ins-topic">
                        <h3>Select a topic to search for help</h3>
                      </div>
                      <div className="helpCont">
                        <div className="row">
                          {content.map((d) => (
                            <div className="col-md-4">
                              <a href="#" className="help-props">
                                <div className="value_props100">
                                  <div className="value_icon">
                                    <img src={d.icon} />
                                  </div>
                                  <div className="value_contents">
                                    <h4>{d.slogan}</h4>
                                    <p>{d.desc}</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="faqs">
                      <div className="ins-topic">
                        <h3>Frequently Asked Questions</h3>
                      </div>
                      <div className="faq-section">
                        <div className="row">
                          {questions.map((d) => (
                            <div className="col-md-4">
                              <a href="#" className="value_props1000">
                                {d.faq}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "nav-student" ? "active show" : ""
                    }`}
                    id="nav-student"
                    role="tabpanel"
                    aria-labelledby="nav-student-tab"
                  >
                    <div className="instr-cont">
                      <div className="ins-topic">
                        <h3>Select a topic to search for help</h3>
                      </div>
                      <div className="helpCont">
                        <div className="row">
                          {content1.map((d) => (
                            <div className="col-md-4">
                              <a href="#" className="help-props">
                                <div className="value_props100">
                                  <div className="value_icon">
                                    <img src={d.icon} />
                                  </div>
                                  <div className="value_contents">
                                    <h4>{d.slogan}</h4>
                                    <p>{d.desc}</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="faqs">
                      <div className="ins-topic">
                        <h3>Frequently Asked Questions</h3>
                      </div>
                      <div className="faq-section">
                        <div className="row">
                          {questions1.map((d) => (
                            <div className="col-md-4">
                              <a href="#" className="value_props1000">
                                {d.faq}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const content = [
  {
    slogan: "Payments",
    desc: "Understand the revenue share and how to receive payments",
    icon: Wallet,
  },
  {
    slogan: "Selling & Promotion",
    desc: "Learn about the announcement and promotional tools",
    icon: Wallet,
  },
  {
    slogan: "Quality Standards",
    desc: "Learn what it takes to create a high quality course",
    icon: Wallet,
  },
  {
    slogan: "Course Building",
    desc: "Build your course curriculum and landing page",
    icon: Wallet,
  },
  {
    slogan: "Course Management",
    desc: "Maintain your course and engage with students",
    icon: Wallet,
  },
  {
    slogan: "Trust & Safety",
    desc: "Policy and copyright questions and guidance",
    icon: Wallet,
  },
];

const questions = [
  {
    faq: "Promote Your Course With Coupons and Referral Links",
  },
  {
    faq: "Cursus Course Quality Checklist",
  },
  {
    faq: "Instructor Revenue Share",
  },
  {
    faq: "Instructor Promotional Agreements and Cursus Deals",
  },
  {
    faq: "How to Become an Instructor: FAQ",
  },
  {
    faq: "How to Select Your Payout Method and Become a Premium Instructor",
  },
];

const content1 = [
  {
    slogan: "Getting Started",
    desc: "Learn how Cursus works and how to start learning",
    icon: Start,
  },
  {
    slogan: "Account/Profile",
    desc: "Manage your account settings",
    icon: Start,
  },
  {
    slogan: "Troubleshooting",
    desc: "Experiencing a bug? Check here",
    icon: Start,
  },
  {
    slogan: "Course Taking",
    desc: "Everything about taking a course on Udemy",
    icon: Start,
  },
  {
    slogan: "Purchase/Refunds",
    desc: "Learn about coupons, how to send gifts, and refunds",
    icon: Start,
  },
  {
    slogan: "Mobile",
    desc: "On the go? Learn about our mobile app",
    icon: Start,
  },
];

const questions1 = [
  {
    faq: "Lifetime Access",
  },
  {
    faq: "Cursus FAQ",
  },
  {
    faq: "Downloading Courses",
  },
  {
    faq: "Certificate of Completion",
  },
  {
    faq: "Refund a Course",
  },
  {
    faq: "How to Solve Payment Issues",
  },
];
export default Help;
