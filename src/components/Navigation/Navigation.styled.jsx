import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ImgContainerDiv = styled.div`
  /* display: flex; */
`;
export const Img = styled.img`
  width: 140px;
  height: 100%;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const NavLi = styled.li`
  font-size: 16px;
`;

export const StyledLinkLogo = styled(NavLink)`
  display: flex;
  padding: 11px 0;
  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #343434;
  padding: 29px 0;
  transition: color 300ms ease;

  &:hover,
  &:focus,
  &:active {
    color: #0b44cd;
  }

  &.active {
    color: #3470ff;
  }
`;
