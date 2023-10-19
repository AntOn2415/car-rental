import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: auto;
  width: 100%;
  height: 100vh;
`;

export const Btn = styled.button`
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
`;
