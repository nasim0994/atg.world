import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Images/whole.png";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";
import Signup from "../Signup/Signup";

const Header = () => {
  return (
    <nav class="navbar bg-white navbar-expand-lg">
      <div class="container">
        <div className="row w-100">
          <div className="col-4">
            <Link to="/" className="d-none d-lg-block">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="col-4 search position-relative d-none d-lg-block">
            <IoMdSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
          <div className="col-12 col-lg-4 user d-flex justify-content-end">
            {/* Here is conditional, if there is a user, the information of the user will be displayed, if not, the signup will be displayed */}
            {/* Since there is no user now, I saw Signup */}
            <Signup />
            <a
              class="btn"
              data-bs-toggle="modal"
              href="#signupModal"
              role="button"
            >
              Create account. <span className="">It’s free!</span>{" "}
              <RiArrowDownSFill className="fs-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
