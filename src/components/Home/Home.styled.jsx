import styled from "styled-components";
import { NavLink } from "react-router-dom";
import mapUA from "images/ukraine-map1.png";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 200px;
`;

export const HeroContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 300px;
  margin: auto;
  width: 100%;
  background-color: #fff;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  padding: 12px;
  font-size: 24px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;

  transition: background 300ms ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
