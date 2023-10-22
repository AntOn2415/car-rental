import styled from "styled-components";

export const Section = styled.section`
  padding-top: 50px;
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
  margin: 100px auto 150px auto;
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
  }
`;
