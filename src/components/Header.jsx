import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledHeader } from "./Header.style";
import { StyledWrapper } from "./Header.style";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <StyledHeader>
        <div>
          <img
            onClick={() => navigate("/")}
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
          />
        </div>
        <div>
          <ul className="menuList">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/offers")}>Offers</li>
            <li onClick={() => navigate("/sign-in")}>Sign In</li>
          </ul>
        </div>
      </StyledHeader>
    </StyledWrapper>
  );
};

export default Header;
