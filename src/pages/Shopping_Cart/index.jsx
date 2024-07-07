import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { line } from "../../assets";

const Shopping_Cart = () => {
  return (
    <div className="Shopping_cart">
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
                          Shopping Cart
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
                <h2>Shopping Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="CourseInCard">
              <Link
                to="/course_detail/course_detail_about"
                className="CourseInCard_img"
              >
                <img
                  className="cart_img"
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg"
                  alt=""
                />
              </Link>
              <div className="CourseInCard_content">
                <div className="CourseInCard_content_X">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{
                      color: "#afafaf !important",
                      width: "15px",
                      height: "100%",
                    }}
                  />
                </div>
                <Link
                  to="/course_detail/course_detail_about"
                  className="CourseInCard_title"
                >
                  The Web Developer Bootcamp
                </Link>
                <Link to="/detail_category_page" className="CourseInCard_cate">
                  Web Development | Python
                </Link>
                <div className="auth">
                  <p>
                    By <Link to="/instructor_profile">John Doe</Link>
                  </p>
                  <div className="price">$10</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="checkout_chk_bg stickytime">
              <div class="checkout_title">
                <h4>Total</h4>
                <img src={line} alt="" />
              </div>
              <div class="order_dt_section">
                <div class="order_title">
                  <h4>Orignal Price</h4>
                  <div class="order_price">$15</div>
                </div>
                <div class="order_title">
                  <h6>Discount Price</h6>
                  <div class="order_price">$5</div>
                </div>
                <div class="order_title">
                  <h2>Total</h2>
                  <div class="order_price5">$10</div>
                </div>
                <div class="coupon_code">
                  <p>Learn now is applied.</p>
                  <div class="coupon_input">
                    <div class="UI search coupon_input_content">
                      <div class="UI input panel-body_text_item">
                        <input
                          class="prompt srch_explore"
                          type="text"
                          name="couponcode"
                          value=""
                          id="id_coupon_code"
                          required=""
                          maxlength="6"
                          placeholder="Enter Coupon Code"
                        />
                      </div>
                      <button class="code-apply-btn" type="submit">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/secondLayout/checkout_page" class="Checkout">
                  Checkout Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping_Cart;
