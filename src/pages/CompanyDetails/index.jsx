import React, { useState } from "react";
import { useFetchOffices } from "./data";
import "./index.scss";

const CompanyDetails = () => {
  const [selected, setSelected] = useState("Company");
  const { offices, status, error } = useFetchOffices();

  const handleSelect = (item) => {
    window.location.href = `/secondLayout/${item.toLowerCase()}`;
    setSelected(item);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

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
            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/about/company.jpg" alt="Company Origins" />
          </div>
        </div>
      </section>

      <section className="offices">
        <h2>Our Offices</h2>
        <p>Cursus branches around the world</p>
        <div className="office-list">
          {Array.isArray(offices) && offices.map((office) => (
            <div key={office.Offices_ID} className="office-item">
              <img src={office.Offices_Image} alt={`Office in ${office.Nation}`} />
              <h3>{office.Nation}</h3>
              <h5>{office.Address.split(",")[0]}</h5>
              <h5>{office.Address.split(",").slice(1).join(",")}</h5>
              <h6>{office.Hotline}</h6>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CompanyDetails;