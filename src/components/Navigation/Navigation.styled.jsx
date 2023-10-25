import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ImgContainerDiv = styled.div`
  /* display: flex; */
`;
export const Img = styled.img`
  width: 160px;
  height: 100%;
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const NavLi = styled.li`
  font-size: 16px;
`;

export const StyledLinkLogo = styled(NavLink)`
  display: flex;
  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #343434;
  border-radius: 12px;
  height: 20px;
  width: 140px;
  padding: 10px;
  transition: color 300ms ease;

  &:hover,
  &:focus,
  &:active {
    color: #0b44cd;
    background: #dcebf7;
  }

  &.active {
    color: #3470ff;
    background: #dcebf7;
  }
`;
