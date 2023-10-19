import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-left: auto;
`;

export const LinkDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 160px;
  border-radius: 12px;
  background: #3470ff;

  transition: background 300ms ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const IconWrapperDiv = styled.div`
  position: absolute;
  top: 25%;
  left: 10px;
  transition: color 300ms ease;
  color: #fff;
  font-size: 20px;
`;

export const LinkA = styled.a`
  padding: 10px 24px 10px 36px;
  flex-shrink: 0;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  z-index: 999;
`;
