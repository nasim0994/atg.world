import React from "react";
import "./Post.css";
import post1 from "../../Images/posts/post1.png";
import user1 from "../../Images/posts/user1.png";
import { AiOutlineEye } from "react-icons/ai";
import { BsShareFill, BsThreeDots } from "react-icons/bs";

const Post = () => {
  return (
    <div className="post rounded-1 mb-3">
      <img src={post1} alt="" className="w-100" />
      <div className="p-3 post-details">
        <h5>✍️ Article</h5>
        <div className="d-flex gap-1">
          <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
          <BsThreeDots className="fs-4" />
        </div>
        <p>
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="user d-flex justify-content-between align-items-center gap-2">
            <img src={user1} alt="" />
            <h5 className="fw-semibold">Sarthak Kamra</h5>
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
  );
};

export default Post;
