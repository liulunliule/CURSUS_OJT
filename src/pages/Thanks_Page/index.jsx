import React from "react";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss";
import logo from "../../assets/img/Header/logo_dark.svg";

function ThanksPage() {
  return (
    <div className="thanks-page thanks-page-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="thanks-content-group">
              <div className="thanks-logo">
                <a href="index.html">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <div className="thanks-message">
                <h1 className="thanks-title">Thank You</h1>
                <h4 className="thanks-subtitle">Your Order is Confirmed!</h4>
                <p className="thanks-description">
                  Top Print Your Booking Order No.
                  <span> #ABE-ME-12345678</span> (Invoice) -{" "}
                  <a href="#">Click Here</a>
                </p>
              </div>
              <div className="thanks-footer">
                <div className="thanks-footer-left">
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Advertise</a>
                    </li>
                    <li>
                      <a href="#">Developers</a>
                    </li>
                    <li>
                      <a href="#">Copyright</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                  </ul>
                </div>
                <div className="thanks-footer-right">
                  <p>
                    © 2024 <strong>Cursus</strong>. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanksPage;
