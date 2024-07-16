import React, { useState } from "react";
import "./index.scss";
import { teamPhoto } from "../../assets";
import { story } from "../../assets";
import { Mobile } from "../../assets";
import { Academic } from "../../assets";
import { Sharable } from "../../assets";
import { Inclusive } from "../../assets";

const AboutPage = () => {
  const [selected, setSelected] = useState("About");

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
    <div className="about-page">
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
        <h1>Improving Lives Through Learning</h1>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <p>On Cursus, you have access to:</p>
        <div className="feature-list">
          <div className="feature-item">
            <i className="icon mobile-learning"></i>
            <img src={Mobile} alt="Mobile" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              <h3>Mobile learning</h3>
            </div>
            <p>
              Quisque nec volutpat sem. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </p>
          </div>
          <div className="feature-item">
            <i className="icon support"></i>
            <img src={Academic} alt="Academic" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              <h3>Academic & Technical Support</h3>
            </div>
            <p>
              Quisque nec volutpat sem. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </p>
          </div>
          <div className="feature-item">
            <i className="icon certificates"></i>
            <img src={Sharable} alt="Sharable" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              <h3>Sharable Certificates</h3>
            </div>
            <p>
              Quisque nec volutpat sem. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </p>
          </div>
          <div className="feature-item">
            <i className="icon inclusive"></i>
            <img src={Inclusive} alt="Inclusive" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              <h3>An Inclusive Experience</h3>
            </div>
            <p>
              Quisque nec volutpat sem. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </section>

      <section className="our-story">
        <div className="our-story-content">
          <div className="our-story-text">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur vel dolor id ultrices. Proin a magna at mi pretium
              pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis
              augue. Nam vitae purus placerat, hendrerit nisl id, finibus magna.
              Etiam pharetra gravida ornare. Donec sagittis, ipsum in egestas
              egestas, dui lorem sollicitudin justo, ut ullamcorper velit neque
              eu velit. Ut et fringilla elit. Mauris augue augue, auctor a
              blandit ac, convallis eget neque. Curabitur in ante ante. Nullam
              laoreet tempus erat at ornare. In nisl nisi, dapibus eget
              facilisis sit amet, commodo quis nibh.
            </p>
          </div>
          <div className="our-story-image">
            <img src={story} alt="Story" />
          </div>
        </div>
      </section>

      <section className="global-reach">
        <h2>Our Global Reach</h2>
        <p>
          Cursus is the leading global marketplace for teaching and learning,
          connecting millions of students to the skills they need to succeed.
        </p>
        <div className="reach-stats">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <h3>25k</h3>
            </div>
            <p>Instructors</p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <h3>95k</h3>
            </div>
            <p>Courses</p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <h3>40M</h3>
            </div>
            <p>Course enrollments</p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <h3>50+</h3>
            </div>
            <p>Languages</p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <h3>595+</h3>
            </div>
            <p>Membership Partners</p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <h3>295</h3>
            </div>
            <p>Countries</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          A perfect blend of creativity and technical wizardry. The best people
          formula for great websites!
        </p>
        <img src={teamPhoto} alt="Our Team" />
        <p className="team-description">
          Morbi eget elit eget turpis varius mollis eget vel massa. Donec
          porttitor, sapien eget commodo vulputate, erat felis aliquam dolor,
          non condimentum libero dolor vel ipsum. Sed porttitor nisi eget nulla
          ullamcorper eleifend. Fusce tristique sapien nisi, vel feugiat neque
          luctus sit amet. Quisque consequat quis turpis in mattis. Maecenas
          eget mollis nisl. Cras porta dapibus est, quis malesuada ex iaculis
          at. Vestibulum egestas tortor in urna tempor, in fermentum lectus
          bibendum. In leo leo, bibendum at pharetra at, tincidunt in nulla. In
          vel malesuada nulla, sed tincidunt neque. Phasellus at massa vel sem
          aliquet sodales non in magna. Ut tempus ipsum sagittis neque cursus
          euismod. Vivamus luctus elementum tortor, ac aliquet dolor vehicula
          et.
        </p>
        <button className="join-team">Join Our Team</button>
      </section>
    </div>
  );
};

export default AboutPage;
