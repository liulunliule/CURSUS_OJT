import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { balloon, plane } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Paid_membership_page = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <div className="Paid_membership">
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
                          Paid Membership
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
                <h2>Paid Membership</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="membership_bg">
              <div className="membership_title">
                <div className="membership__left">
                  <h2>Baby Plan</h2>
                  <div className="membership_price">$49/month</div>
                  <div className="save_price">Save $79 when paid annually</div>
                </div>
                <div className="membership__right">
                  <img src={balloon} alt="" />
                </div>
              </div>
              <div className="membership_des">
                <p>For instructors launching their first digital products.</p>
              </div>
              <div className="panel-group" id="accordion0">
                <div className="panel-default">
                  <div className="panel-heading" id="headingOne">
                    <div className="panel-title">
                      <div
                        className={`link ${activeId === 1 ? "" : "collapsed"}`}
                        onClick={() => handleToggle(1)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Your own shop
                      </div>
                    </div>
                  </div>
                  {activeId === 1 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.le VHS.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingTwo">
                    <div className="panel-title">
                      <dev
                        className={`link ${
                          activeId === 1.2 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(1.2)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Online courses
                      </dev>
                    </div>
                  </div>
                  {activeId === 1.2 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingThree">
                    <div className="panel-title">
                      <dev
                        className={`link ${
                          activeId === 1.3 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(1.3)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Email marketing
                      </dev>
                    </div>
                  </div>
                  {activeId === 1.3 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.{" "}
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingfour">
                    <div className="panel-title">
                      <dev
                        className={`link ${
                          activeId === 1.4 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(1.4)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Messaging
                      </dev>
                    </div>
                  </div>
                  {activeId === 1.4 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.le VHS.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingfive">
                    <div className="panel-title">
                      <dev
                        className={`link ${
                          activeId === 1.5 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(1.5)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Zero charges comissions 10 sales
                      </dev>
                    </div>
                  </div>
                  {activeId === 1.5 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingsix">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 1.6 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(1.6)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        7-days-a-week support
                      </div>
                    </div>
                  </div>
                  {activeId === 1.6 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.{" "}
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default-1">
                  <div className="panel-heading">
                    <div className="panel-title-1">
                      <Link className="collapsed">
                        <FontAwesomeIcon
                          icon={faXmark}
                          style={{
                            color: "#686f7a",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Memberships
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="panel-default-1">
                  <div className="panel-heading">
                    <div className="panel-title-1">
                      <Link className="collapsed">
                        <FontAwesomeIcon
                          icon={faXmark}
                          style={{
                            color: "#686f7a",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Blog
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="panel-default-1">
                  <div className="panel-heading">
                    <div className="panel-title-1">
                      <Link className="collapsed">
                        <FontAwesomeIcon
                          icon={faXmark}
                          style={{
                            color: "#686f7a",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Affiliate marketings
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="panel-default-1">
                  <div className="panel-heading">
                    <div className="panel-title-1">
                      <Link className="collapsed">
                        <FontAwesomeIcon
                          icon={faXmark}
                          style={{
                            color: "#686f7a",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Third-party code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/secondlayout/checkout_page">
                <button className="prmb_btn">Purchase Membership</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="membership_bg">
              <div className="membership_title">
                <div className="membership__left">
                  <h2>Business Plan</h2>
                  <div className="membership_price">$99/month</div>
                  <div className="save_price">Save $189 when paid annually</div>
                </div>
                <div className="membership__right">
                  <img src={plane} alt="" />
                </div>
              </div>
              <div className="membership_des">
                <p>For instructors who are ready to grow their business.</p>
              </div>
              <div className="panel-group" id="accordion1">
                <div className="panel-default">
                  <div className="panel-heading" id="headingOne1">
                    <div className="panel-title">
                      <div
                        className={`link ${activeId === 2 ? "" : "collapsed"}`}
                        onClick={() => handleToggle(2)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Your own Shop
                      </div>
                    </div>
                  </div>
                  {activeId === 2 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.le VHS.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingTwo1">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 2.2 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(2.2)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Online courses
                      </div>
                    </div>
                  </div>
                  {activeId === 2.2 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingThree1">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 2.3 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(2.3)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Email marketing
                      </div>
                    </div>
                  </div>
                  {activeId === 2.3 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.{" "}
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingfour1">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 2.4 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(2.4)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Messaging
                      </div>
                    </div>
                  </div>
                  {activeId === 2.4 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.le VHS.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingfive1">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 2.5 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(2.5)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Zero charges comissions 30 sales
                      </div>
                    </div>
                  </div>
                  {activeId === 2.5 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingsix1">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 2.6 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(2.6)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        7-days-a-week support
                      </div>
                    </div>
                  </div>
                  {activeId === 2.6 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.{" "}
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingseven1">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 2.7 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(2.7)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Memberships
                      </div>
                    </div>
                  </div>
                  {activeId === 2.7 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.le VHS.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingeight1">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 2.8 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(2.8)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Blog
                      </div>
                    </div>
                  </div>
                  {activeId === 2.8 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingnine1">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 2.9 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(2.9)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Affiliate marketings
                      </div>
                    </div>
                  </div>
                  {activeId === 2.9 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.{" "}
                      </div>
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingten1">
                    <div className="panel-title">
                      <div
                        className={`link ${
                          activeId === 2.1 ? "" : "collapsed"
                        }`}
                        onClick={() => handleToggle(2.1)}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{
                            color: "#ed2a26",
                            width: "15px",
                            height: "100%",
                            margin: "0 0.5em",
                          }}
                        />{" "}
                        Third-party code
                      </div>
                    </div>
                  </div>
                  {activeId === 2.1 && (
                    <div>
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.{" "}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Link to="/secondlayout/checkout_page">
                <button className="prmb_btn">Purchase Membership</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="FAQtitle">
              <h2>Membership FAQ</h2>
              <p>Wait, what about…</p>
            </div>
            <div className="membership_faq_bg">
              <div className="panel-group mt-4" id="accordion2">
                <div className="panel-default">
                  <div className="panel-heading" id="headingOne2">
                    <div className="panel-title">
                      <div
                        className={`${
                          activeId === 3.3 ? "" : "collapsed"
                        } link`}
                        onClick={() => handleToggle(3.3)}
                      >
                        Is it easy to change plans?
                      </div>
                    </div>
                  </div>
                  {activeId === 3.3 && (
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.le VHS.
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingTwo2">
                    <div className="panel-title">
                      <div
                        className={`${
                          activeId === 3.4 ? "" : "collapsed"
                        } link`}
                        onClick={() => handleToggle(3.4)}
                      >
                        Can I cancel at any time?
                      </div>
                    </div>
                  </div>
                  {activeId === 3.4 && (
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingThree2">
                    <div className="panel-title">
                      <div
                        className={`${
                          activeId === 3.5 ? "" : "collapsed"
                        } link`}
                        onClick={() => handleToggle(3.5)}
                      >
                        Are there any credit card or PayPal fees?
                      </div>
                    </div>
                  </div>
                  {activeId === 3.5 && (
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingfour2">
                    <div className="panel-title">
                      <div
                        className={`${
                          activeId === 3.6 ? "" : "collapsed"
                        } link`}
                        onClick={() => handleToggle(3.6)}
                      >
                        Do I have to choose my plan before I start my trial?
                      </div>
                    </div>
                  </div>
                  {activeId === 3.6 && (
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.le VHS.
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingfive2">
                    <div className="panel-title">
                      <div
                        className={`${
                          activeId === 3.7 ? "" : "collapsed"
                        } link`}
                        onClick={() => handleToggle(3.7)}
                      >
                        Edututs+ isn’t for me. Can I have a refund?
                      </div>
                    </div>
                  </div>
                  {activeId === 3.7 && (
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingsix2">
                    <div className="panel-title">
                      <div
                        className={`${
                          activeId === 3.8 ? "" : "collapsed"
                        } link`}
                        onClick={() => handleToggle(3.8)}
                      >
                        How do I get my money?
                      </div>
                    </div>
                  </div>
                  {activeId === 3.8 && (
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingseven2">
                    <div className="panel-title">
                      <div
                        className={`${
                          activeId === 3.9 ? "" : "collapsed"
                        } link`}
                        onClick={() => handleToggle(3.9)}
                      >
                        Do I need a credit card to sign up?
                      </div>
                    </div>
                  </div>
                  {activeId === 3.9 && (
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.le VHS.
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingeight2">
                    <div className="panel-title">
                      <div
                        className={`${
                          activeId === 3.1 ? "" : "collapsed"
                        } link`}
                        onClick={() => handleToggle(3.1)}
                      >
                        Is Edututs+ safe and secure for online transactions?
                      </div>
                    </div>
                  </div>
                  {activeId === 3.1 && (
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  )}
                </div>
                <div className="panel-default">
                  <div className="panel-heading" id="headingnine2">
                    <div className="panel-title">
                      <div
                        className={`${
                          activeId === 3.11 ? "" : "collapsed"
                        } link`}
                        onClick={() => handleToggle(3.11)}
                      >
                        I still have questions. HELP!
                      </div>
                    </div>
                  </div>
                  {activeId === 3.11 && (
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paid_membership_page;
