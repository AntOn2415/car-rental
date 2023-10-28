import styled from "styled-components";
import { NumericFormat } from "react-number-format";

export const FilterContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 1225px;
  gap: 18px;
`;

export const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const ContainerInputDiv = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const P = styled.p`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const LabelInput = styled.label`
  position: absolute;
  left: 24px;
  top: 13px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const Input = styled(NumericFormat)`
  display: flex;
  width: 89px;
  padding: 14px 0 14px 70px;
  background-color: #f7f7fb;
  color: #121417;
  outline: none;
  border: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 18);

  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  outline: ${({ "data-error": error }) => (error ? "1px solid red" : "none")};
`;

export const InputTo = styled(Input)`
  width: 110px;
  padding-left: 49px;
  border-radius: 0px 14px 14px 0px;

  outline: ${({ "data-error": error }) => (error ? "1px solid red" : "none")};
`;

export const ContainerSvg = styled.div`
  position: absolute;
  top: 40px;
  left: 185px;
  height: 20px;
  stroke: #121417;
  fill: none;
  pointer-events: none;
  transition: transform 300ms ease;
  transform-origin: center;

  &[data-is-active="true"] {
    transform: rotate(180deg);
  }
`;

export const FormBtn = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: #3470ff;
  color: #fff;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);
  cursor: pointer;

  transition: background 300ms ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }

  &:disabled {
    background-color: #dcebf7;
    cursor: not-allowed;
  }
`;
