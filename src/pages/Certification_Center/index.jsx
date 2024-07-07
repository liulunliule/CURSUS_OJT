import React, { useState } from "react";
import { certicon, instructor, logo1, plus, student } from "../../assets";
import "./index.scss";
import { Link } from "react-router-dom";
import Header_policy from "../../components/Header_privacy";
import FooterHomePage from "../../components/Footer";

function CertificationCenter() {
  const [activeTab, setActiveTab] = useState("development");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="CertificationCenter">
        <div className="Center">
          <div className="container">
            <div className="title">
              <h1>Certification Center</h1>
              <p>For Students and Instructors</p>
            </div>
            <ul className="certi_icon">
              <li>
                <img src={logo1} alt="" />
              </li>
              <li>
                <img src={plus} alt="" />
              </li>
              <li>
                <img src={certicon} alt="" />
              </li>
            </ul>
            <Link to="/secondLayout/certification_fill_form">
              <button className="certi_btn">Start Certification</button>
            </Link>
          </div>
        </div>

        <div className="findCertificate">
          <div className="container">
            <div className="title">
              <h2>Find Certificate</h2>
            </div>
            <form className="findfrom">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <input type="text" name="" id="" placeholder="# Number" />
                </div>
                <div className="col-lg-3 col-md-6">
                  <input type="text" name="" id="" placeholder="Full Name" />
                </div>
                <div className="col-lg-3 col-md-6">
                  <select>
                    <option value="">Select Category</option>
                    <option value="1">Development</option>
                    <option value="2">Finance &amp; Accounting</option>
                    <option value="3">Design</option>
                    <option value="4">Marketing</option>
                    <option value="5">Teaching &amp; Academics</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-6">
                  <button className="login-btn" type="submit">
                    Find Certificate
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="OurCertificate">
          <div className="container">
            <div className="title">
              <h2>Our Certification</h2>
              <p>
                We prepared tests for the most popular categories and get
                certificate
              </p>
            </div>
            <div className="catey-tabs">
              <ul
                className="nav nav-pills justify-content-center mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "development" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("development")}
                    role="tab"
                    aria-controls="pills-development"
                    aria-selected={activeTab === "development"}
                  >
                    Development
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "accounting" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("accounting")}
                    role="tab"
                    aria-controls="pills-accounting"
                    aria-selected={activeTab === "accounting"}
                  >
                    Finance &amp; Accounting
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "design" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("design")}
                    role="tab"
                    aria-controls="pills-design"
                    aria-selected={activeTab === "design"}
                  >
                    Design
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "marketing" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("marketing")}
                    role="tab"
                    aria-controls="pills-marketing"
                    aria-selected={activeTab === "marketing"}
                  >
                    Marketing
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "teaching" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("teaching")}
                    role="tab"
                    aria-controls="pills-teaching"
                    aria-selected={activeTab === "teaching"}
                  >
                    Teaching &amp; Academics
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "development" ? "show active" : ""
                  }`}
                  id="pills-development"
                  role="tabpanel"
                  aria-labelledby="pills-development-tab"
                >
                  <div className="certicates">
                    <div className="row">
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          WordPress
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          HTML CSS
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          MotoCMS 3
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Joomla
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          OpenCart
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Joomla Pro
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          WordPress Pro
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          WordPress Elementor
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          WordPress Elementor Pro
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          PrestaShop
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "accounting" ? "show active" : ""
                  }`}
                  id="pills-accounting"
                  role="tabpanel"
                  aria-labelledby="pills-accounting-tab"
                >
                  <div className="certicates">
                    <div className="row">
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Accounting
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Finance Fundamentals
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Bookkeeping
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Political Science
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Finance
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Cryptocurrency
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "design" ? "show active" : ""
                  }`}
                  id="pills-design"
                  role="tabpanel"
                  aria-labelledby="pills-design-tab"
                >
                  <div className="certicates">
                    <div className="row">
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Adobe Photoshop
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Adobe Illustrator
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Graphic Design
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          UI/UX
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          UX Research
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "marketing" ? "show active" : ""
                  }`}
                  id="pills-marketing"
                  role="tabpanel"
                  aria-labelledby="pills-marketing-tab"
                >
                  <div className="certicates">
                    <div className="row">
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Digital Marketing
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Content Marketing
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          SEO
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Social Media Marketing
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Email Marketing
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Branding
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "teaching" ? "show active" : ""
                  }`}
                  id="pills-teaching"
                  role="tabpanel"
                  aria-labelledby="pills-teaching-tab"
                >
                  <div className="certicates">
                    <div className="row">
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Education
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Mathematics
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Language Learning
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          History
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Psychology
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <a href="#" className="certilink">
                          Philosophy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="benefit">
          <div className="container">
            <div className="benefit_container">
              <div className="title">
                <h2>Who Can Get Benefit From This?</h2>
              </div>
              <div>
                <div className="who_get">
                  <div className="who_img">
                    <img src={instructor} alt="" />
                  </div>
                  <h4>Instructors</h4>
                </div>
                <div className="who_get">
                  <div className="who_img">
                    <img src={student} alt="" />
                  </div>
                  <h4>Students</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="willGet">
          <div className="container">
            <div className="title">
              <h2>What Will You Get?</h2>
              <p>
                Cursus company, which confirms your skills and knowledge of
                Certification
              </p>
            </div>
            <div className="knowledge_dts">
              <p>
                Morbi eget elit eget turpis varius mollis eget vel massa. Donec
                porttitor, sapien eget commodo vulputate, erat felis aliquam
                dolor, non condimentum libero dolor vel ipsum. Sed porttitor
                nisi eget nulla ullamcorper eleifend. Fusce tristique sapien
                nisi, vel feugiat neque luctus sit amet. Quisque consequat quis
                turpis in mattis. Maecenas eget mollis nisl. Cras porta dapibus
                est, quis malesuada ex iaculis at. Vestibulum egestas tortor in
                urna tempor, in fermentum lectus bibendum. In leo leo, bibendum
                at pharetra at, tincidunt in nulla. In vel malesuada nulla, sed
                tincidunt neque. Phasellus at massa vel sem aliquet sodales non
                in magna. Ut tempus ipsum sagittis neque cursus euismod. Vivamus
                luctus elementum tortor, ac aliquet dolor vehicula et. Nulla
                vehicula pharetra lacus ornare gravida. Vivamus mollis
                ullamcorper dui quis gravida. Aenean pulvinar pulvinar arcu a
                suscipit.
              </p>
            </div>
            <button className="knowledge_btn">Knowledge Base</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationCenter;
