import React from "react";
import "./Banner.css";
import { IoMdArrowBack } from "react-icons/io";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="d-lg-none px-3 d-flex justify-content-between text-white pt-3">
        <IoMdArrowBack className="fs-4" />
        <button className="bg-transparent border-1 border-white rounded-2 text-white px-2 py-1">
          Join Group
        </button>
      </div>
      <div className="banner-content">
        <h2>Computer Engineering</h2>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Banner;
