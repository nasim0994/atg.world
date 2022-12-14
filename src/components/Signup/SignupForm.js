import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import signupBanner from "../../Images/signup.png";

const SignupForm = ({ handelChangeForm }) => {
  return (
    <div class="modal-body px-4 pb-5">
      <div className="row">
        <div className="col-12 col-lg-6 ">
          <h3>Create Account</h3>
          <form>
            <div className="input-group">
              <div className="d-flex w-100">
                <input type="text" className="w-50" placeholder="First Name" />
                <input type="text" className="w-50" placeholder="Last Name" />
              </div>
              <input
                type="email"
                name=""
                id=""
                className="w-100"
                placeholder="Email"
              />
              <input
                type="email"
                name=""
                id=""
                className="w-100"
                placeholder="Password"
              />
              <input
                type="email"
                name=""
                id=""
                className="w-100"
                placeholder="Confirm Password"
              />
            </div>

            <div className="row">
              <div className="col-6 col-lg-12">
                <button
                  type="submit"
                  className="w-100 mt-3 btn btn-primary rounded-5"
                >
                  Create Account
                </button>
              </div>
              <div className="d-lg-none text-decoration-underline col-6 col-lg-12 d-flex align-items-center justify-content-end">
                or, Sign In
              </div>
            </div>
          </form>

          <div className="socialSignup mt-4">
            <button className="mb-2 d-flex align-items-center gap-2 justify-content-center">
              <BsFacebook className="fs-5 text-primary" />
              Sign up with Facebook
            </button>
            <button className="d-flex align-items-center gap-2 justify-content-center">
              <FcGoogle className="fs-5" />
              Sign up with Google
            </button>
          </div>

          <div className="d-lg-none text-center mt-4">
            <small style={{ fontSize: "16px" }}>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </small>
          </div>
        </div>

        <div className="d-none d-lg-block signup col-12 col-lg-6">
          <p className="text-end">
            Already have an account?{" "}
            <button
              onClick={handelChangeForm}
              className="text-primary border-0 bg-transparent fw-semibold"
            >
              Sign In
            </button>
          </p>
          <div className="mb-4">
            <img src={signupBanner} alt="" className="signup-banner" />
          </div>

          <small style={{ fontSize: "12px" }}>
            By signing up, you agree to our Terms & conditions, Privacy policy
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
