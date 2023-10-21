import styled from "styled-components";
import autoDefault from "images/auto-default1.png";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const ImageContainer = styled.div`
  color: #343434;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%),
    url(${autoDefault}) lightgray 50% / cover no-repeat;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
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

export const CarSnapshotDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;
  width: 380px;
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

export const HiddenH3 = styled.h3`
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

export const DescriptionP = styled.p`
  margin-top: 14px;
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(20 / 14);
`;

export const H3 = styled.h3`
  margin-top: 24px;
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 14);
`;

export const ExtraInfoDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;
  margin-top: 8px;
  overflow: hidden;
`;

export const ConditionsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;
  gap: 8px;
  margin-top: 8px;
`;

export const ConditionP = styled.p`
  display: flex;
  padding: 7px 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 12);
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
`;

export const ConditionSpan = styled.span`
  color: #3470ff;
`;

export const LinkA = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  margin-top: 24px;
  margin-right: auto;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  transition: background 300ms ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
