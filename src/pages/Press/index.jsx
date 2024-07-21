import React, { useState } from "react";
import { useFetchPressData } from "./data";
import "./index.scss";

const Press = () => {
  const [selected, setSelected] = useState("Press");
  const { news, releases, status, error } = useFetchPressData();

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

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

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
              {news.map((item) => (
                <div key={item.Press_News_ID} className="news-item">
                  <p>{item.Press_At}</p>
                  <h3>{item.Title}</h3>
                  <p>{item.Intro}</p>
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
              {releases.map((item) => (
                <div key={item.Press_Releases_ID} className="release-item">
                  <p>{item.Press_At}</p>
                  <h3>{item.Title}</h3>
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