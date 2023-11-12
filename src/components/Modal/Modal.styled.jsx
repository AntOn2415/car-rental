import styled, { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const zoomIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const zoomOut = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;

const getAnimationStyles = (props, duration = "300ms") => {
  if (props["data-animation"] === "fadeIn") {
    return css`
      animation: ${fadeIn} ${duration} forwards;
    `;
  } else if (props["data-animation"] === "fadeOut") {
    return css`
      animation: ${fadeOut} ${duration} forwards;
    `;
  } else if (props["data-animation"] === "zoomIn") {
    return css`
      animation: ${zoomIn} ${duration} forwards;
    `;
  } else if (props["data-animation"] === "zoomOut") {
    return css`
      animation: ${zoomOut} ${duration} forwards;
    `;
  }
  return "";
};

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(1px);
  z-index: 998;
  overflow-y: scroll;
  overflow: hidden;
  ${getAnimationStyles};
`;

export const ModalDiv = styled.div`
  position: absolute;
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background: #fff;
  overflow: scroll;
  ${getAnimationStyles};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  background: inherit;
  font-size: 60px;
  stroke: #121417;
  outline: none;
  border: none;
  transition: stroke 300ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: #3470ff;
  }
`;
