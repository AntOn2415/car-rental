import styled from "styled-components";
import autoDefault from "images/auto-default1.png";

export const CatalogLi = styled.li`
  display: flex;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
`;

export const ImageContainer = styled.div`
  position: relative;
  color: #343434;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%),
    url(${autoDefault}) lightgray 50% / cover no-repeat;
`;

export const ToggleEventBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;
  margin: 0;
  background: transparent;
  font-size: 60px;
  outline: none;
  border: none;
  cursor: pointer;

  stroke: ${props =>
    props["data-is-favorite"] ? "rgba(52, 112, 255, 1)" : "rgba(255, 255, 255, 0.8)"};
  fill: ${props => (props["data-is-favorite"] ? "rgba(52, 112, 255, 1)" : "transparent")};

  svg {
    use {
      transition: stroke 300ms ease, fill 300ms ease;
    }
  }

  &:hover svg use {
    fill: #fff;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const DefaultDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 14px;
`;

export const CarBriefInfo = styled.div`
  display: flex;
  margin-top: 14px;
`;

export const H2 = styled.h2`
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #121417;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const YearP = styled.p`
  color: #121417;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const PriceP = styled.p`
  color: #121417;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  margin-left: auto;
`;

export const CarSnapshotDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;
  height: 40px;
  margin-top: 8px;
  overflow: hidden;
`;

export const DetailP = styled.p`
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  padding-right: 6px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 12); /* 150% */

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 44px;
  padding: 12px 99px;
  margin-top: 28px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  cursor: pointer;

  transition: background 300ms ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
