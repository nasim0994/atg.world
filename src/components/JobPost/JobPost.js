import React from "react";
import "./JobPost.css";
import user2 from "../../Images/posts/user2.png";
import { AiOutlineEye } from "react-icons/ai";
import { BsShareFill, BsThreeDots } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const JobPost = () => {
  return (
    <div className="mt-4 d-flex w-100 gap-5">
      <div className="post rounded-1">
        <div className="p-3 post-details">
          <h5>💼️ Job</h5>
          <div className="d-flex gap-1 justify-content-between">
            <h2>Software Developer</h2>
            <BsThreeDots className="fs-4" />
          </div>
          <div className="d-flex gap-4">
            <p>Innovaccer Analytics Private Ltd.</p>
            <p className="d-flex gap-2 align-items-center">
              <MdOutlineLocationOn className="fs-5" />
              Noida, India
            </p>
          </div>
          <button className="job-apply-btn">Apply on Timesjobs</button>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="user d-flex justify-content-between align-items-center gap-2">
              <img src={user2} alt="" />
              <h5 className="fw-semibold">Joseph Gray</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-5">
              <p className="m-0 fs-6 d-flex gap-2 align-items-center">
                <AiOutlineEye />
                1.4k views
              </p>
              <button
                className="border-0 rounded-1 d-flex align-items-center justify-content-center"
                style={{ width: "42px", height: "36px" }}
              >
                <BsShareFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
