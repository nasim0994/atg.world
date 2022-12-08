import React from "react";
import "./Posts.css";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdPersonAdd } from "react-icons/md";
import Post from "../Post/Post";
import { HiPencil } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import JobPost from "../JobPost/JobPost";
import group1 from "../../Images/Rectangle 6.png";
import group2 from "../../Images/g3.png";
import group3 from "../../Images/g-2.png";

const Posts = () => {
  return (
    <div className="posts-container">
      <div className="post-category w-100 d-flex justify-content-between">
        <div className="">
          <ul className="d-flex gap-4 list-unstyled">
            <li className="active">All Posts(32)</li>
            <li>Article</li>
            <li>Event</li>
            <li>Education</li>
            <li>Job</li>
          </ul>
        </div>
        <div className="post-button d-flex align-items-center gap-3 pb-2">
          <button className="px-2 py-1 rounded-1">
            Write a Post <RiArrowDownSFill className="fs-4" />
          </button>

          <button className="px-2 py-1 rounded-1 d-flex align-items-center gap-2 bg-primary text-white">
            <MdPersonAdd /> Join Group
          </button>
        </div>
      </div>

      <div className="d-flex w-100 gap-5 mt-4">
        <div>
          <Post />
          {/* Since the 3 posts are the same, only the category name is different and the data will come from the database, so I did not design it separately  */}
          <Post />
          <Post />
          {/*  */}
          <JobPost />
        </div>

        <div className="right-side">
          <div className="d-flex justify-content-between w-100 border-bottom">
            <p className="d-flex gap-2 align-items-center">
              <MdOutlineLocationOn className="fs-5" />
              Noida, India
            </p>
            <p>
              <HiPencil className="fs-5" />
            </p>
          </div>

          <div className="mt-4">
            <small className="d-flex gap-2 align-items-center warning">
              <RiErrorWarningLine className="fs-2" />
              Your location will help us serve better and extend a personalised
              experience.
            </small>
          </div>

          {/* Only login user can show this section */}
          <div className="mt-5">
            <h6 className="text-uppercase">REcommended Groups</h6>
            <div className="d-flex align-items-center gap-1 justify-content-between mt-3">
              <div className="d-flex align-items-center gap-2">
                <img src={group1} alt="" />
                <p className="m-0">Leisure</p>
              </div>
              <button className="border-0 rounded-4 bg-black text-white px-3">
                Followed
              </button>
            </div>

            <div className="d-flex align-items-center gap-1 justify-content-between mt-3">
              <div className="d-flex align-items-center gap-2">
                <img src={group2} alt="" />
                <p className="m-0">Activism</p>
              </div>
              <button
                className="border-0 rounded-4 text-black px-3"
                style={{ background: "#ddd" }}
              >
                Follow
              </button>
            </div>

            <div className="d-flex align-items-center gap-1 justify-content-between mt-3">
              <div className="d-flex align-items-center gap-2">
                <img src={group3} alt="" />
                <p className="m-0">MBA</p>
              </div>
              <button
                className="border-0 rounded-4 text-black px-3"
                style={{ background: "#ddd" }}
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
