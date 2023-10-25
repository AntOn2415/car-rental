import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 220px;
`;

export const CatalogUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 150px auto;
  color: #3470ff;

  transition: color 300ms ease;

  &:hover,
  &:focus,
  &:active {
    color: #0b44cd;
  }
`;
