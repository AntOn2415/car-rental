import styled from "styled-components";

export const CitySelectDiv = styled.div`
  position: relative;
  margin-bottom: 50px;
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

export const ContainerSvg = styled.div`
  position: absolute;
  top: 10px;
  left: 130px;
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
