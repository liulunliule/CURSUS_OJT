import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const ApplyJob = () => {
  return (
    <div className="apply-job">
      <div className="apply-job-title">
        <h1>Data Engineer</h1>
        <Link to="/secondLayout/careers" className="back-to-career">
          Back to Career
        </Link>
      </div>

      <div className="job-content">
        <button type="apply" className="apply-btn">Apply For This Job</button>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat maximus pellentesque. Integer sem enim, luctus at nibh at, condimentum sagittis sapien. Sed tempus ipsum erat, sit amet efficitur velit interdum eu. Vestibulum hendrerit id dolor eu scelerisque. Phasellus ex dui, consequat nec feugiat eu, dapibus eget ante. Sed sodales interdum dui, at euismod mi feugiat hendrerit. Suspendisse auctor libero in tempor mollis. Nulla et dolor velit. Aliquam sit amet luctus quam.
        </p>
        <h2>What you'll be doing</h2>
        <p>
        Nam a egestas libero, eget eleifend turpis. Sed id ipsum a ipsum aliquam laoreet sit amet sit amet nibh. Proin dapibus, libero sed posuere rhoncus, orci mi cursus enim, at accumsan eros massa lacinia mi. Nunc eget finibus felis, volutpat malesuada sem. Aliquam ac nisl pellentesque, varius neque sit amet, porttitor nunc. Nullam elit tellus, dapibus non eleifend sed, hendrerit eget velit. Aliquam ut felis dictum, tincidunt magna vitae, aliquam massa. In porttitor tristique quam, non dignissim sapien pharetra ultrices. Cras non ante non velit mollis mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.
        </p>
        <p>
        Etiam lobortis dictum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ultricies efficitur dui, suscipit tempus elit condimentum quis. Duis sed vestibulum tortor, eget cursus odio.
        </p>
        <h2>What we're looking for</h2>
          <p>1. Work closely with other data engineers to enhance infrastructure, improve reliability, and strengthen database performance</p>
          <p>2. Collaborate with data scientists, product managers, marketers and other data-driven internal stakeholders to identify and develop opportunities that enhance data access and usage</p>
          <p>3. Contribute to the ongoing development of the data warehouse ecosystem</p>
          <p>4. Become the expert on all aspects of Edututs+'s data reporting and analytics infrastructure</p>
          <p>5. Develop and maintain data definitions for internally available data sources</p>
        <h2>Who should apply?</h2>
        <p>
        Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.
        </p>
        <h2>What next?</h2>
        <p>
        Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.
        </p>
      </div>

      <form className="application-form">
        <h3>Submit Your Application</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Resume/CV</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Links</label>
          <input type="text" placeholder="LinkedIn URL" />
          <input type="text" placeholder="X URL" />
          <input type="text" placeholder="Portfolio URL" />
          <input type="text" placeholder="Other Website URL" />
        </div>
        <div className="form-group">
          <label>Additional Information</label>
          <textarea placeholder="Add a cover letter or anything else you want to share."></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyJob;