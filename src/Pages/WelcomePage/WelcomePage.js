import React from "react";

const WelcomePage = () => {
  return (
    <div>
      <div className="Banner-container">
        <div className="banner-content">
          <p>Grand Welcome</p>
          <h1> Sweet Home</h1>
          <p>
            Imagine a charming and picturesque Heritage village in the north
            part of the countryside, surrounded by the spectacular natural
            beauty. Experience a relaxing, exciting, comfortable stay in
            <span> Sweet Home</span> with its glamorous hospitality and its
            unique atmosphere.
          </p>
          <button className="btn ">View more..</button>
        </div>
        <div className="banner-img ">
          <img src="https://i.ibb.co/JqJZGbH/welcome.jpg" alt="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
