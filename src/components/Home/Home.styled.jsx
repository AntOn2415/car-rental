import styled from "styled-components";
import { NavLink } from "react-router-dom";
import mapUA from "images/ukraine-map1.png";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HeroContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 300px;
  margin: auto;
  width: 100%;
  background: url(${mapUA}) lightgray 50% / cover no-repeat;
`;
export const HiddenH1 = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;
export const ImgContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const LinkStyled = styled(NavLink)`
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  line-height: 1.364;
  color: #3470ff;

  transition: color 300ms ease;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
