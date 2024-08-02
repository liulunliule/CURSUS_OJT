import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

function Certification_fill_form() {
    const [activeId, setActiveId] = useState(null);

    const handleToggle = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div>
            <div className="CertificationFillForm">
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
                                                        Certification Fill Form
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
                                            <FontAwesomeIcon
                                                icon={faAnglesLeft}
                                            />{" "}
                                            Back to Certification Center
                                        </Link>
                                    </div>
                                </div>
                                <div className="main_title">
                                    <h2>Certification Fill Form</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-lg-center justify-content-md-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="certi_form">
                                <div className="fill_form">
                                    <h2>Fill in before you start:</h2>
                                    <form>
                                        <div className="input_text">
                                            <input
                                                className="prompt srch_explore"
                                                type="text"
                                                name="fullname"
                                                value=""
                                                id="id_fullname"
                                                required=""
                                                maxlength="64"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="input_text">
                                            <input
                                                className="prompt srch_explore"
                                                type="email"
                                                name="emailaddress"
                                                value=""
                                                id="id_email"
                                                required=""
                                                maxlength="64"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <div className="input_text">
                                            <input
                                                className="prompt srch_explore"
                                                type="text"
                                                name="phonenumber"
                                                value=""
                                                id="id_phonenumber"
                                                required=""
                                                maxlength="10"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div className="fill_form_category">
                                            <h4>Select Category</h4>
                                            <div
                                                className="panel-groupaccordion"
                                                id="accordiontest"
                                            >
                                                <div className="panel panel-default">
                                                    <div
                                                        className="panel-heading"
                                                        id="headingOne"
                                                    >
                                                        <div className="panel-title">
                                                            <div
                                                                to="#"
                                                                className={`link ${
                                                                    activeId ===
                                                                    1
                                                                        ? ""
                                                                        : "collapsed"
                                                                }`}
                                                                onClick={() =>
                                                                    handleToggle(
                                                                        1
                                                                    )
                                                                }
                                                            >
                                                                Development
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {activeId === 1 && (
                                                        <div>
                                                            <div className="panel-body">
                                                                <div className="gr_ed flds">
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                WordPress
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                HTML
                                                                                CSS
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Full
                                                                                Time
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                MotoCMS
                                                                                3
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Joomla
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Full
                                                                                Time
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                OpenCart
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Joomla
                                                                                Pro
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                WordPress
                                                                                Pro
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                WordPress
                                                                                Elementor
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                WordPress
                                                                                Elementor
                                                                                Pro
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                PrestaShop
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        // <div
                                                        //   id="collapseOne"
                                                        //   className="panel-collapse collapse"
                                                        //   aria-labelledby="headingOne"
                                                        //   data-bs-parent="#accordiontest"
                                                        // >
                                                        // </div>
                                                    )}
                                                </div>
                                                <div className="panel panel-default">
                                                    <div
                                                        className="panel-heading"
                                                        id="headingTwo"
                                                    >
                                                        <div className="panel-title">
                                                            <div
                                                                to="#"
                                                                className={`link ${
                                                                    activeId ===
                                                                    2
                                                                        ? ""
                                                                        : "collapsed"
                                                                }`}
                                                                onClick={() =>
                                                                    handleToggle(
                                                                        2
                                                                    )
                                                                }
                                                            >
                                                                Finance &amp;
                                                                Accounting
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {activeId === 2 && (
                                                        <div className="panel-body">
                                                            <div className="UI form">
                                                                <div className="gr_ed flds">
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Accounting
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Finance
                                                                                Fundamentals
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Bookkeeping
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Political
                                                                                Science
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Finance
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Cryptocurrency
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="panel panel-default">
                                                    <div
                                                        className="panel-heading"
                                                        id="headingThree"
                                                    >
                                                        <div className="panel-title">
                                                            <div
                                                                to="#"
                                                                className={`link ${
                                                                    activeId ===
                                                                    3
                                                                        ? ""
                                                                        : "collapsed"
                                                                }`}
                                                                onClick={() =>
                                                                    handleToggle(
                                                                        3
                                                                    )
                                                                }
                                                            >
                                                                Design
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {activeId === 3 && (
                                                        <div className="panel-body">
                                                            <div className="UI form">
                                                                <div className="gr_ed flds">
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Adobe
                                                                                Photoshop
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Adobe
                                                                                Illustrator
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Adobe
                                                                                After
                                                                                Effects
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Adobe
                                                                                InDesign
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Unity
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Drawing
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Game
                                                                                Development
                                                                                Fundamentals
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                3D
                                                                                Modeling
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Motion
                                                                                Graphics
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                2D
                                                                                Animation
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                T-Shirt
                                                                                Design
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="panel panel-default">
                                                    <div
                                                        className="panel-heading"
                                                        id="headingfour"
                                                    >
                                                        <div className="panel-title">
                                                            <div
                                                                to="#"
                                                                className={`link ${
                                                                    activeId ===
                                                                    4
                                                                        ? ""
                                                                        : "collapsed"
                                                                }`}
                                                                onClick={() =>
                                                                    handleToggle(
                                                                        4
                                                                    )
                                                                }
                                                            >
                                                                Marketing
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {activeId === 4 && (
                                                        <div className="panel-body">
                                                            <div className="UI form">
                                                                <div className="gr_ed flds">
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Google
                                                                                Ads
                                                                                (Adwords)
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Google
                                                                                Ads
                                                                                (AdWords)
                                                                                Certification
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Social
                                                                                Marketing
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Email
                                                                                Marketing
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Business
                                                                                Strategy
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                SEO
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                PPC
                                                                                Advertising
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Blogging
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="panel panel-default">
                                                    <div
                                                        className="panel-heading"
                                                        id="headingfive"
                                                    >
                                                        <div className="panel-title">
                                                            <div
                                                                to="#"
                                                                className={`link ${
                                                                    activeId ===
                                                                    5
                                                                        ? ""
                                                                        : "collapsed"
                                                                }`}
                                                                onClick={() =>
                                                                    handleToggle(
                                                                        5
                                                                    )
                                                                }
                                                            >
                                                                Teaching &amp;
                                                                Academics
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {activeId === 5 && (
                                                        <div className="panel-body">
                                                            <div className="UI form">
                                                                <div className="gr_ed flds">
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Math
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Humanities
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Engineering
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Science
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Social
                                                                                Science
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                English
                                                                                Language
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld ">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                German
                                                                                Language
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Sign
                                                                                Language
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                French
                                                                                Language
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                Spanish
                                                                                Language
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                English
                                                                                Grammar
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fld">
                                                                        <div className="UI radid ckbox">
                                                                            <input
                                                                                type="radio"
                                                                                name="example2"
                                                                                tabindex="0"
                                                                                className="hidden"
                                                                            />
                                                                            <label>
                                                                                IELTS
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="signup__forgotPass">
                                            By signing up, you agree to our
                                            <Link to="/secondLayout/policy">
                                                {" "}
                                                Privacy Policy
                                            </Link>{" "}
                                            and{" "}
                                            <Link to="/secondLayout/term">
                                                {" "}
                                                Terms and Conditions
                                            </Link>
                                            .
                                        </div>

                                        <Link to="/secondLayout/Certification_test_page">
                                            <button
                                                className="Go-btn"
                                                type="submit"
                                            >
                                                Lets Go
                                            </button>
                                        </Link>
                                        <p className="questrm">
                                            Please be ready to answer{" "}
                                            <span>20 questions</span> within{" "}
                                            <span>1 hours</span>.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certification_fill_form;
