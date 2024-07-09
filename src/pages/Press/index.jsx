import React, { useState } from "react";
import "./index.scss";

const Press = () => {
  const [selected, setSelected] = useState("Press");

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
    <div className="press-page">
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
        <h1>What others are saying</h1>
      </section>

      <div className="content">
        <div className="sidebar">
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
        <div className="right-section">
          <div className="news-section">
            <h2>Cursus in the News</h2>
            <p>
              For media interviews and inquiries, please send an email to{" "}
              <a href="mailto:press@cursus.com">press@cursus.com</a>
            </p>
            <div className="news-items">
              {Array(3)
                .fill()
                .map((_, idx) => (
                  <div key={idx} className="news-item">
                    <p>March 10, 2020</p>
                    <h3>Press News Title</h3>
                    <p>
                      Donec eget arcu vel mauris lacinia vestibulum id eu elit.
                      Nam metus odio, iaculis eu nunc et, interdum mollis arcu.
                      Pellentesque viverra faucibus diam. In sit amet laoreet
                      dolor, vitae fringilla quam...
                    </p>
                    <a href="#">Read More</a>
                  </div>
                ))}
            </div>
            <a className="see-more" href="#">
              See More News
            </a>
          </div>
          <div className="releases-section">
            <h2>Press Releases</h2>
            <p>For Release from Cursus</p>
            <div className="release-items">
              {Array(5)
                .fill()
                .map((_, idx) => (
                  <div key={idx} className="release-item">
                    <p>March 10, 2020</p>
                    <h3>Press Release Title</h3>
                  </div>
                ))}
            </div>
            <a className="see-more" href="#">
              See More Press Releases
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
