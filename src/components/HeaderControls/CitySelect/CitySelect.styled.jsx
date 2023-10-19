import styled from "styled-components";

export const CitySelectDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-left: auto;
`;

export const Label = styled.label`
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

export const Select = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  border: solid 1px #3470ff;
  color: #3470ff;
  border-radius: 12px;
  outline: none;

  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    border: solid 1px #0b44cd;
    color: #0b44cd;
  }
`;
