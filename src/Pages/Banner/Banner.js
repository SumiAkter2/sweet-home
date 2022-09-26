import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="Banner-container">
        <div className="banner-content">
          <h1> Expect Nothing But The Best </h1>
          <p>
            Hotel for the elite passionate about luxury & comfort. Sweet Home is
            a lavish and comfortable hotels and residences in Dhaka, Bangladesh.
          </p>
          <button className="btn ">About More ...</button>
        </div>
        <div className="banner-img ">
          <img src="https://i.ibb.co/9ZKpt34/room5.png" alt="banner-img" />
        </div>
      </div>

      {/* something */}
      <div className="card-container">
        <div className="img-container ">
          <div>
            <img
              style={{ width: "150px", height: "150px" }}
              src="https://i.ibb.co/qMWdGV1/swimingpool2.png"
              alt="hotel-img"
            />
            <p className="text-center">Swimming pool</p>
          </div>
          <div>
            <img
              style={{ width: "150px", height: "150px" }}
              src="https://i.ibb.co/Z2Ny3PB/room3.png"
              alt="hotel-img"
            />
            <p className="text-center">Natural View</p>
          </div>
          <div>
            <img
              style={{ width: "150px", height: "150px" }}
              src="https://i.ibb.co/WFR6dhm/coridor2.png"
              alt="hotel-img"
            />
            <p className="text-center">Interior space</p>
          </div>
          <div>
            <img
              style={{ width: "150px", height: "150px" }}
              src="https://i.ibb.co/NrnZzgM/room2.png"
              alt="hotel-img"
            />
            <p className="">Luxurious suites</p>
          </div>

          <div>
            <img
              style={{ width: "150px", height: "150px" }}
              src="https://i.ibb.co/V91JZpN/coridor.png"
              alt="hotel-img"
            />
            <p className="">Corridor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
