import React, { useState } from "react";
import "./index.scss";
import {
  workfromanywhere,
  workandtravel,
  flexiblehours,
  purchasingleave,
  socialevents,
  wellnessprogram,
  mentoringprogram,
  fundraising,
} from "../../assets";
import { Link } from "react-router-dom";

const CareersPage = () => {
  const [selected, setSelected] = useState("Careers");
  const [currentQuote, setCurrentQuote] = useState(0);

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

  const handleQuoteChange = (direction) => {
    if (direction === "next" && currentQuote < 3) {
      setCurrentQuote(currentQuote + 1);
    } else if (direction === "prev" && currentQuote > 0) {
      setCurrentQuote(currentQuote - 1);
    }
  };

  const quotes = [
    {
      title: "We are learners",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit ac, sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
    {
      title: "We are navigators",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit ac, sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
    {
      title: "We are global",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit ac, sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
    {
      title: "We make an impact",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit ac, sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
  ];

  return (
    <div className="careers-page">
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
        <h1>We're a passionate, creative, and global company, come work with us.</h1>
      </section>

      <section className="video-container">
        <div className="video-half">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TKnufs85hXk?si=bp_CAVNtBJXtTtu3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="info-half">
          <h1>Working at Cursus</h1>
          <div className="video-container-item">
            <p>
              Phasellus ex mauris, rhoncus quis posuere sit amet, ultricies nec
              lorem. Vivamus vestibulum porta urna, in placerat lectus facilisis
              sit amet. Vestibulum non mauris augue. Maecenas arcu magna,
              aliquam imperdiet tempor nec, lobortis ac erat. Aliquam vel magna
              tortor. Cras ornare, enim eu tristique tristique, orci nisl
              blandit mi, at dignissim velit leo nec metus.
            </p>
            <Link to="/secondLayout/apply-job" className="learn-more">
              Check Out Our Open Roles
            </Link>
          </div>
        </div>
      </section>

      <section className="quotes">
        <button
          className="arrow left"
          onClick={() => handleQuoteChange("prev")}
          disabled={currentQuote === 0}
        >
          &lt;
        </button>
        <div className="quote">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>{quotes[currentQuote].title}</h3>
          </div>
          <p>{quotes[currentQuote].text}</p>
        </div>
        <button
          className="arrow right"
          onClick={() => handleQuoteChange("next")}
          disabled={currentQuote === quotes.length - 1}
        >
          &gt;
        </button>
      </section>

      <section className="benefits">
        <h2>Benefits</h2>
        <p>
          Cursus culture is something special, and to complement and support
          that culture we have some amazing benefits.
        </p>
        <div className="benefit-list">
          {[
            { icon: workfromanywhere, title: "Work from anywhere" },
            { icon: workandtravel, title: "Work and Travel" },
            { icon: flexiblehours, title: "Flexible Hours" },
            { icon: purchasingleave, title: "Purchasing Leave" },
            { icon: socialevents, title: "Social Events" },
            { icon: wellnessprogram, title: "Wellness Program" },
            { icon: mentoringprogram, title: "Mentoring Program" },
            { icon: fundraising, title: "Fundraising" },
          ].map((benefit, index) => (
            <div key={index} className="benefit-item">
              <img src={benefit.icon} alt={benefit.title} />
              <h3>{benefit.title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget enim in turpis consequat tempor sed id neque. Nam at felis
                et elit auctor accumsan.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="open-roles">
        <h2>Open Roles</h2>
        <p>
          Cursus is a fast-growing company and we're expanding both our Punjab
          office and international offices.
        </p>
        <div className="role-lists-container">
          <div className="role-list role-list1">
            {[
              { title: "Algorithm Engineer", location: "India" },
              { title: "Chief Technology Officer", location: "India" },
              {
                title: "Customer Growth & Marketing Analyst",
                location: "India",
              },
            ].map((role, index) => (
              <div key={index} className="role-item">
                <h3>{role.title}</h3>
                <p>{role.location}</p>
                <Link to="/secondLayout/apply-job" className="learn-more">
                  Learn More and Apply
                </Link>
              </div>
            ))}
          </div>
          <div className="role-list role-list2">
            {[
              { title: "Data Engineer", location: "India" },
              {
                title: "iOS Developer - Edututs+",
                location: "San Francisco, CA",
              },
              { title: "Senior UX Designer", location: "India" },
            ].map((role, index) => (
              <div key={index} className="role-item">
                <h3>{role.title}</h3>
                <p>{role.location}</p>
                <Link to="/secondLayout/apply-job" className="learn-more">
                  Learn More and Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
