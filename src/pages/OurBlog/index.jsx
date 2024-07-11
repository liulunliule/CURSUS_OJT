import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { blogImage1, blogImage2, blogImage3, blogImage4 } from "../../assets";

const OurBlog = () => {
  const [selected, setSelected] = useState("Blog");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://668f4a0880b313ba09178dee.mockapi.io/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map(blog => {
          switch(blog.Blog_ID) {
            case 1:
              return { ...blog, Blog_Image: blogImage1 };
            case 2:
              return { ...blog, Blog_Image: blogImage2 };
            case 3:
              return { ...blog, Blog_Image: blogImage3 };
            case 4:
              return { ...blog, Blog_Image: blogImage4 };
            default:
              return blog;
          }
        });
        setBlogs(updatedData);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

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
            {blogs.map((blog) => (
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