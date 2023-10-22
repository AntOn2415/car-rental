import styled from "styled-components";
import { NumericFormat } from "react-number-format";

export const FilterContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
`;

export const ContainerDiv = styled.div`
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

export const Select = styled.select`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 8px;
  border-radius: 14px;
  background: #f7f7fb;
  outline: none;
`;

export const Option = styled.option`
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const ContainerInputDiv = styled.div`
  display: flex;
  gap: 8;
`;

export const Input = styled(NumericFormat)`
  width: 160px;
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
`;

export const InputTo = styled(Input)`
  padding-left: 50px;
  border-radius: 0px 14px 14px 0px;
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
