import React from "react";
import { FcGoogle } from "react-icons/fc";
import { StyledOAuth } from "./OAuth.style";

const OAuth = () => {
  return (
    <StyledOAuth>
      <FcGoogle />
      Continue with Google
    </StyledOAuth>
  );
};

export default OAuth;
