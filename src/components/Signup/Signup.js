import React, { useState } from "react";
import "./Signup.css";
import { AiOutlineClose } from "react-icons/ai";
import Login from "../Login/Login";
import SignupForm from "./SignupForm";

const Signup = () => {
  const [form, setForm] = useState(false);
  const handelChangeForm = () => {
    setForm(!form);
  };

  return (
    <div className="position-relative">
      <div
        class="modal fade"
        id="signupModal"
        aria-hidden="true"
        aria-labelledby="signupModalToggle"
        tabindex="-1"
      >
        <div class="modal-dialog  modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header px-0 py-3">
              <p className="text-center w-100 m-0" id="signupModalToggle">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
              <button
                type="button"
                class="close-btn"
                data-bs-dismiss="modal"
                // aria-label="Close"
              >
                <AiOutlineClose />
              </button>
            </div>

            {form ? (
              <Login handelChangeForm={handelChangeForm} />
            ) : (
              <SignupForm handelChangeForm={handelChangeForm} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
