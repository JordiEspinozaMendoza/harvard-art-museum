import { keyframes } from "styled-components";

export const fadeToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;
export const fadeToRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const flip = keyframes`
  50%{
    transform: rotateX(180deg);
  }
  100%{
    transform: rotateX(180deg) rotateY(180deg);
  }
`;
