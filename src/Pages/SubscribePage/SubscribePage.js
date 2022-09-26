import React from "react";
import "./Subscribe.css";
const SubscribePage = () => {
  return (
    <div className="Subscribe-container">
      <p>Subscribe To Our NewsLetter !</p>
      <div className="form">
        <label className="label">
          <span className="">Enter your email address</span>
        </label>
        <div className="">
          <input
            type="text"
            placeholder="username@site.com"
            className="input "
          />
          <button className="btn ">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
