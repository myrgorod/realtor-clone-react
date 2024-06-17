import React, { useState } from "react";
import { StyledSignIn } from "./SignIn.style";

import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }
  return (
    <StyledSignIn>
      <h1>Forgot Password</h1>
      <div className="container">
        <div className="sign-img">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key"
          />
        </div>
        <div className="sign-form">
          <form className="form-container">
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />

            <div className="link-container">
              <p>
                Don't have an account? &nbsp;{" "}
                <Link to="/sign-up">Register</Link>
              </p>
              <p>
                <Link to="/sign-in">Sign In instead</Link>
              </p>
            </div>
            <button className="button-submit" type="submit">
              Send reset password
            </button>
            <div className="line-text">
              <p>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </StyledSignIn>
  );
};

export default ForgotPassword;
