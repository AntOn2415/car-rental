import React from "react";
import { NavUl, NavLi, StyledLink, ImgContainerDiv, Img } from "./Navigation.styled";
import Logo from "images/logo.png";

export const Navigation = () => {
  return (
    <nav>
      <NavUl>
        <NavLi>
          <StyledLink to="/">
            <ImgContainerDiv>
              <Img src={Logo} alt="Auto Rental Logo" />
            </ImgContainerDiv>
          </StyledLink>
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
