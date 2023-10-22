import styled from "styled-components";

export const FilterContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
