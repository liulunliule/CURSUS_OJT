import React, { useState } from "react";
import "./index.scss";
import { companyImage } from "../../assets";
import { officeIndia } from "../../assets";
import { officeSF } from "../../assets";
import { officeBrazil } from "../../assets";

const CompanyDetails = () => {
  const [selected, setSelected] = useState("Company");

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
    <div className="company-page">
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

      <section className="hero" style={{ backgroundColor: "#f8f8f8", padding: "40px" }}>
        <h1 style={{ marginTop: "6px" }}>Expanding learning opportunities</h1>
      </section>

      <section className="origins">
        <div className="origins-content">
          <div className="origins-text">
            <h2>Our Origins</h2>
            <p>
              Cursus was founded in 2020 by computer science instructor with a
              vision to provide anyone, anywhere with access to the world’s best
              education. Now many instructors put their courses online for
              anyone to take and taught more learners in a few months than they
              could over an entire lifetime in the classroom. Today, Cursus has
              expanded to reach more than 40 million people and 2,300 businesses
              around the world. On Cursus you can find online courses,
              instructors, and certificates from Cursus.
            </p>
          </div>
          <div className="origins-image">
            <img src={companyImage} alt="Company Origins" />
          </div>
        </div>
      </section>

      <section className="offices">
        <h2>Our Offices</h2>
        <p>Cursus branches around the world</p>
        <div className="office-list">
          <div className="office-item">
            <img src={officeIndia} alt="Office in Punjab, India" />
            <h3>Punjab, India</h3>
            <h5>#1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road,</h5>
            <h5>141001, LDH, Punjab, India</h5>
            <h6>0161-1234567</h6>
          </div>
          <div className="office-item">
            <img src={officeSF} alt="Office in San Francisco, CA" />
            <h3>San Francisco, CA</h3>
            <h5>586 Lorem st. 5 floor,</h5>
            <h5>San Francisco, CA 94107</h5>
            <h6>+1-415-1234567</h6>
          </div>
          <div className="office-item">
            <img src={officeBrazil} alt="Office in São Paulo, Brazil" />
            <h3>São Paulo, Brazil</h3>
            <h5>Lorem ipsum 589,</h5>
            <h5>Vila Madalena, São Paulo - SP 01443-010</h5>
            <h6>+55-11-1234567</h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetails;
