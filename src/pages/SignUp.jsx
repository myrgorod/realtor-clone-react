import React, { useState } from "react";
import { StyledSignIn } from "./SignIn.style";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(e.target.value);
  }
  return (
    <StyledSignIn>
      <h1>Sign Up</h1>
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
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full name"
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <IoMdEye
                  className="icon"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <IoMdEyeOff
                  className="icon"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </div>
            <div className="link-container">
              <p>
              Have an account? &nbsp;{" "}
                <Link to="/sign-in">Sign In</Link>
              </p>
              <p>
                <Link to="/forgot-password">Forgot password?</Link>
              </p>
            </div>
            <button className="button-submit" type="submit">
              Sign Up
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

export default SignUp;
