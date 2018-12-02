import React from "react";
import styled, { keyframes } from "styled-components";

const Sidenav = () => <StyledSidenav />;

export default Sidenav;

export const slideInRight = keyframes`
  0% {
    transform: translate(-250px);
  }
  100% {
    transform: translate(0px);
  }
`;

const StyledSidenav = styled.aside`
  background-color: #111a1f;
  width: 250px;
  animation: ${slideInRight} 1s;
`;
