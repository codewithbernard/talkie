import { keyframes } from "styled-components";

const slideInRight = keyframes`
  0% {
    transform: translate(-250px);
  }
  100% {
    transform: translate(0px);
  }
`;

const fadeIn = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export { slideInRight, fadeIn };
