import React from "react";
import {
  NavUl,
  NavLi,
  StyledLinkLogo,
  StyledLink,
  ImgContainerDiv,
  Img,
} from "./Navigation.styled";
import Logo from "images/logo.png";

const Navigation = () => {
  return (
    <nav>
      <NavUl>
        <NavLi>
          <StyledLinkLogo to="/">
            <ImgContainerDiv>
              <Img src={Logo} alt="Auto Rental Logo" />
            </ImgContainerDiv>
          </StyledLinkLogo>
        </NavLi>
        <NavLi>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </NavLi>
      </NavUl>
    </nav>
  );
};

export default Navigation;
