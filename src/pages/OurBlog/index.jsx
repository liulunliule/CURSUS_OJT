/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { blogImage1 } from "../../assets";
import { blogImage2 } from "../../assets";
import { blogImage3 } from "../../assets";
import { blogImage4 } from "../../assets";

const OurBlog = () => {
  const [selected, setSelected] = useState("Blog");

  const handleSelect = (item) => {
    if (item === "About") {
      window.location.href = "/secondLayout/about";
    } else if (item === "Company") {
      window.location.href = "/secondLayout/company";
    } else if (item === "Blog") {
      window.location.href = "/secondLayout/blog";
    } else if (item === "Careers") {
      window.location.href = "/secondLayout/careers";
    } else if (item === "Press") {
      window.location.href = "/secondLayout/press";
    }
    setSelected(item);
  };

  return (
    <div className="blog-page">
      <header className="custom-header">
        <nav className="custom-nav">
          <ul className="custom-ul">
            {["About", "Blog", "Company", "Careers", "Press"].map((item) => (
              <li
                key={item}
                className={`custom-li ${selected === item ? "selected" : ""}`}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Insights, ideas, and stories</h1>
      </section>

      <section className="content">
        <div className="content-main">
          <div className="sidebar">
            <div className="left">
              <div className="search">
                <input type="text" placeholder="Search" />
              </div>
              <div className="labels">
                <h3>Labels</h3>
              </div>
              <div className="archive">
                <h3>Archive</h3>
              </div>
              <div className="follow-buttons">
                <button className="follow1">Follow our Facebook page</button>
                <button className="follow2">Follow our X page</button>
              </div>
              <a href="#" className="learn-more">
                Learn More
              </a>
              <a href="#" className="help-center">
                Cursus Help Center
              </a>
            </div>
          </div>

          <div className="blog-list">
            <div className="blog-item">
              <img src={blogImage1} alt="Blog 1" />
              <div className="blog-info">
                <p>109k views • March 10, 2020</p>
                <h3>Blog Title Here</h3>
                <p>
                  Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam
                  metus odio, iaculis eu nunc et, interdum mollis arcu.
                  Pellentesque viverra faucibus diam. In sit amet laoreet dolor
                  interdum mollis arcu.
                </p>
                <Link to="/secondLayout/blog-detail">Read More</Link>
              </div>
            </div>
            <div className="blog-item">
              <img src={blogImage2} alt="Blog 2" />
              <div className="blog-info">
                <p>109k views • March 10, 2020</p>
                <h3>Blog Title Here</h3>
                <p>
                  Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam
                  metus odio, iaculis eu nunc et, interdum mollis arcu.
                  Pellentesque viverra faucibus diam. In sit amet laoreet dolor
                  interdum mollis arcu.
                </p>
                <Link to="/secondLayout/blog-detail">Read More</Link>
              </div>
            </div>
            <div className="blog-item">
              <img src={blogImage3} alt="Blog 3" />
              <div className="blog-info">
                <p>109k views • March 10, 2020</p>
                <h3>Blog Title Here</h3>
                <p>
                  Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam
                  metus odio, iaculis eu nunc et, interdum mollis arcu.
                  Pellentesque viverra faucibus diam. In sit amet laoreet dolor
                  interdum mollis arcu.
                </p>
                <Link to="/secondLayout/blog-detail">Read More</Link>
              </div>
            </div>
            <div className="blog-item">
              <img src={blogImage4} alt="Blog 4" />
              <div className="blog-info">
                <p>109k views • March 10, 2020</p>
                <h3>Blog Title Here</h3>
                <p>
                  Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam
                  metus odio, iaculis eu nunc et, interdum mollis arcu.
                  Pellentesque viverra faucibus diam. In sit amet laoreet dolor
                  interdum mollis arcu.
                </p>
                <Link to="/secondLayout/blog-detail">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBlog;
