import React from "react";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss";
import logo from "../../assets/img/Header/logo_dark.svg";

function ErrorPage() {
  return (
    <body class="coming_soon_style">
      <div class="error-page error-page-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="cmtk_group">
                <div class="ct-logo">
                  <a href="index.html">
                    <img src={logo}alt="" />
                  </a>
                </div>
                <div class="cmtk_dt">
                  <h1 class="title_404">404</h1>
                  <h4 class="thnk_title1">
                    The page you were looking for could not be found.
                  </h4>
                  <a href="/" class="bk_btn">
                    Go To Homepage
                  </a>
                </div>
                <div class="tc_footer_main">
                  <div class="tc_footer_left">
                    <ul>
                      <li>
                        <a href="about_us.html">About</a>
                      </li>
                      <li>
                        <a href="press.html">Press</a>
                      </li>
                      <li>
                        <a href="contact_us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="coming_soon.html">Advertise</a>
                      </li>
                      <li>
                        <a href="coming_soon.html">Developers</a>
                      </li>
                      <li>
                        <a href="terms_of_use.html">Copyright</a>
                      </li>
                      <li>
                        <a href="terms_of_use.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="terms_of_use.html">Terms</a>
                      </li>
                    </ul>
                  </div>
                  <div class="tc_footer_right">
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

      <script src="js/jquery-3.7.1.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="vendor/OwlCarousel/owl.carousel.js"></script>
      <script src="vendor/bootstrap-select/docs/docs/dist/js/bootstrap-select.js"></script>
      <script src="vendor/semantic/semantic.min.js"></script>
      <script src="js/custom.js"></script>
    </body>
  );
}

export default ErrorPage;
