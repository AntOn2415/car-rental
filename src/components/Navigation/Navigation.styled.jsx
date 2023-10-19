import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ImgContainerDiv = styled.div`
  /* display: flex; */
`;
export const Img = styled.img`
  /* display: flex; */
  width: 100px;
  height: 100%;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const NavLi = styled.li`
  font-size: 24px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: #343434;
  padding: 20px 0;
  transition: color 300ms ease;

  :hover,
  :focus,
  :active {
    color: #0b44cd;
  }

  &.active {
    color: #3470ff;
  }
`;
