import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  max-width: 1440px;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

export const Li = styled.li`
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 228px;
`;
export const Li2 = styled.li`
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 228px;

  :nth-of-type(2n) {
    flex-direction: row-reverse;
  }
`;

export const Number = styled.p`
  margin-bottom: 14px;

  color: #3470ff;
  font-size: 104px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -4px;
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  color: #343434;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(44 / 40);
  text-transform: uppercase;
`;

export const H3 = styled.h3`
  margin-bottom: 8px;
  width: 264px;
  padding: 6px 18px;
  border-radius: 14px;
  background: #dcebf7;
  color: #3470ff;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(44 / 40);
  text-transform: uppercase;
`;

export const H3All = styled(H3)`
  width: 264px;
  padding: 6px 18px;
  color: #343434;
  background: transparent;
  font-style: normal;
  font-weight: 700;
  line-height: calc(44 / 40);
  text-transform: uppercase;
`;

export const P = styled.p`
  padding: 6px 18px;
  margin-top: 14px;
  border-radius: 14px;
  text-align: center;
  background: #dcebf7;
  color: #3470ff;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(44 / 40);
`;

export const TextDescription = styled.p`
  width: 275px;
  color: rgba(17, 17, 17, 0.9);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const Img = styled.img`
  width: 604px;
  height: 700px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  padding: 10px 24px 10px 36px;
  width: 160px;
  border-radius: 12px;
  background: #3470ff;
  flex-shrink: 0;
  text-decoration: none;
  color: #fff;
  font-size: 16px;

  transition: background 300ms ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
