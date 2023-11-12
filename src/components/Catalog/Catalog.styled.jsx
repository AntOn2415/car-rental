import styled from "styled-components";

export const Section = styled.section`
  padding-top: 50px;
  padding-left: 220px;
`;

export const Btn = styled.button`
  display: flex;
  padding: 0;
  border: none;
  background: none;
  color: #3470ff;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  text-decoration-line: underline;
  margin: 0 auto 150px auto;
  cursor: pointer;

  transition: color 300ms ease;

  &:hover,
  &:focus,
  &:active {
    color: #0b44cd;
  }
  &:disabled {
    color: #dcebf7;
    cursor: not-allowed;
    text-decoration-line: none;
  }
`;

export const P = styled.p`
  text-align: center;
  margin-top: 150px;
  color: #343434;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(44 / 40);
`;
