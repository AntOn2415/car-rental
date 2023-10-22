import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% {
    transform: rotate(-100deg);
  }
  100% {
    transform: rotate(1700deg);
  }
`;

export const bounce = keyframes`
  0%, 20%, 50%, 70%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
  80% {
    transform: translateY(-8px);
  }
`;

export const shadowAnim = keyframes`
  0%, 20%, 50%, 70%, 100% {
    transform: translateY(0);
    opacity: 0.8;
    width: 40px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.6);
  }
  40% {
    transform: translateY(6px);
    opacity: 0.4;
    width: 55px;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  }
  60% {
    transform: translateY(3px);
    opacity: 0.6;
    width: 47px;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.4);
  }
  80% {
    transform: translateY(1px);
    opacity: 0.6;
    width: 47px;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.4);
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  width: 60px;
  top: 150px;
`;

export const Text = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-family: sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px #323232;
`;

export const BounceAnim = styled.div`
  animation: ${bounce} 1.5s infinite;
  display: inline-block;
`;

export const RotateAnim = styled.div`
  animation: ${spin} 1.5s infinite;
  display: inline-block;
  width: 60px;
  height: 60px;
  transform-origin: 50% 50%;
`;

export const Tyre = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 110%;
  position: relative;
  box-shadow: 0 0 0 8px #fff, 0 0 0 19px #3470ff;
  margin: 0 auto;
  top: calc(50% - 10px);
`;

export const P = styled.div`
  position: absolute;
  top: 40%;
  left: -75%;
  transform: rotate(-90deg);
  font-size: 7px;
  font-weight: 600;
  color: #fff;
`;
export const P1 = styled.div`
  position: absolute;
  top: 10%;
  left: -75%;
  transform: rotate(-80deg);
  font-size: 7px;
  font-weight: 600;
  color: #fff;
`;

export const P2 = styled.div`
  position: absolute;
  top: -20%;
  left: -70%;
  transform: rotate(-65deg);
  font-size: 7px;
  font-weight: 600;
  color: #fff;
`;

export const P3 = styled.div`
  position: absolute;
  top: -45%;
  left: -55%;
  transform: rotate(-40deg);
  font-size: 7px;
  font-weight: 600;
  color: #fff;
`;

export const P4 = styled.div`
  position: absolute;
  top: -60%;
  left: -38%;
  transform: rotate(-40deg);
  font-size: 7px;
  font-weight: 600;
  color: #fff;
`;

export const P5 = styled.div`
  position: absolute;
  top: -73%;
  left: -28%;
  transform: rotate(-35deg);
  font-size: 7px;
  font-weight: 600;
  color: #fff;
`;

export const P6 = styled.div`
  position: absolute;
  top: -85%;
  left: -6%;
  transform: rotate(-20deg);
  font-size: 7px;
  font-weight: 600;
  color: #fff;
`;

export const WhiteCircle = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 100%;
  background: #3470ff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Shadow = styled.div`
  margin: 0 auto;
  height: 1px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.4);
  border-radius: 30%;
  position: relative;
  top: -4px;
  animation: ${shadowAnim} 1.5s infinite;
`;

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 999;
  background-color: transparent;
`;
