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
import { globe } from "../../assets";
import { Logo_footer } from "../../assets";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FooterHomePage() {
  const currentYear = new Date().getFullYear();
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <footer className={`footer ${!isShowAll ? "active" : ""}`}>
      <div className="container">
        <div className="footer-container row ">
          <div className="footer-column col-md-3">
            <ul>
              <li>
                <Link to="/secondlayout/about">About</Link>
              </li>
              <li>
                <Link to="/secondlayout/blog">Blog</Link>
              </li>
              <li>
                <Link to="/secondlayout/careers">Careers</Link>
              </li>
              <li>
                <Link to="/secondlayout/press">Press</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column col-md-3">
            <ul>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                <Link to="/coming-soon">Advertise</Link>
              </li>
              <li>
                <Link to="/coming-soon">Developers</Link>
              </li>
              <li>
                <Link to="/secondlayout/contact_us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column col-md-3">
            <ul>
              <li>
                <Link to="/secondlayout/term">Copyright Policy</Link>
              </li>
              <li>
                <Link to="/secondlayout/policy">Terms</Link>
              </li>
              <li>
                <Link to="/secondLayout/term">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/all_categories_page">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column col-md-3">
            <ul>
              <li>
                <button className="footer-button">Teach on Cursus</button>
              </li>
              <li className="footer-button-language-golobe">
                <button className="footer-button-language">
                  <img src={globe} alt="Golobe" className="golobe" /> Language
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content">
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

export default FooterHomePage;
