import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import signupBanner from "../../Images/signup.png";

const Login = ({ handelChangeForm }) => {
  return (
    <div class="modal-body px-4 pb-5">
      <div className="d-flex gap-4">
        <div className="w-50">
          <h3>Sign In</h3>
          <form>
            <div className="input-group">
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
            </div>

            <div>
              <button
                type="submit"
                className="w-100 mt-3 btn btn-primary rounded-5"
              >
                Sign In
              </button>
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

          <div className="mt-4 text-center">
            <small>Forgot Password?</small>
          </div>
        </div>
        <div className="w-50 signup">
          <p className="text-end">
            Don’t have an account yet?
            <button
              onClick={handelChangeForm}
              className="text-primary border-0 bg-transparent fw-semibold"
            >
              Create new for free!
            </button>
          </p>
          <div className="mb-4 ">
            <img src={signupBanner} alt="" className="signup-banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
