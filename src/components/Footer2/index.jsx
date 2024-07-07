import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { Logo_footer } from "../../assets";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer2() {
  const currentYear = new Date().getFullYear();
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);

  return (
    <footer className={`footer footer2 ${!isShowAll ? "active" : ""}`}>
      <div className="container footer2-wrap">
        <div className="footer-container row">
          <div className="footer2-column">
            <ul>
              <div className="footer2-column-3">
                <div className="footer2-column-1">
                  <li>
                    <Link to="/secondlayout/term">Copyright Policy</Link>
                  </li>
                  <li>
                    <Link to="/secondlayout/policy">Terms</Link>
                  </li>
                  <li>
                    <Link to="/secondLayout/term">Privacy Policy</Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <div className="footer-column col-md-6"></div>
        </div>
        <div className="footer2-content">
          <div className="footer-left col-md-10">
            <img src={Logo_footer} alt="Cursus Logo" className="logo_footer" />
            <p className="text_footer">
              &copy; {currentYear} <b>Cursus</b>. All Rights Reserved.
            </p>
          </div>
          <div className="footer-right col-md-2">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "white" }}
              className="footer-right-icon"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "white" }}
              className="footer-right-icon"
            />
            <FontAwesomeIcon
              icon={faGooglePlusG}
              style={{ color: "white" }}
              className="footer-right-icon"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "white" }}
              className="footer-right-icon"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "white" }}
              className="footer-right-icon"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ color: "white" }}
              className="footer-right-icon"
            />
            <FontAwesomeIcon
              icon={faPinterestP}
              style={{ color: "white" }}
              className="footer-right-icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
