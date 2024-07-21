import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchBlogs } from "./data";
import "./index.scss";

const OurBlog = () => {
  const [selected, setSelected] = useState("Blog");
  const { blogs, status, error } = useFetchBlogs();

  const handleSelect = (item) => {
    const paths = {
      About: "/secondLayout/about",
      Company: "/secondLayout/company",
      Blog: "/secondLayout/blog",
      Careers: "/secondLayout/careers",
      Press: "/secondLayout/press",
    };
    window.location.href = paths[item];
    setSelected(item);
  };

  return (
    <div className="blog-page">
      <header className="custom-header" style={{ backgroundColor: "#f8f8f8" }}>
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

      <section className="hero" style={{ backgroundColor: "#f8f8f8" }}>
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
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && blogs.map((blog) => (
              <div className="blog-item" key={blog.Blog_ID}>
                <img src={blog.Blog_Image} alt={`Blog ${blog.Blog_ID}`} />
                <div className="blog-info">
                  <p>{blog.Views} • {blog.Create_At}</p>
                  <h3>{blog.Blog_Title}</h3>
                  <p>{blog.Intro}</p>
                  <Link to="/secondLayout/blog-detail">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBlog;