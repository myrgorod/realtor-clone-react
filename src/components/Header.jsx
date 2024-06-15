import React from "react";
import { useLocation } from "react-router-dom";

import { StyledHeader } from "./Header.style";
import { StyledWrapper } from "./Header.style";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <StyledWrapper>
      <StyledHeader>
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
          />
        </div>
        <div>
          <ul className="menuList">
            <li>Home</li>
            <li>Offers</li>
            <li>Sign In</li>
          </ul>
        </div>
      </StyledHeader>
    </StyledWrapper>
  );
};

export default Header;
