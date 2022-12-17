import styled, { css, keyframes } from "styled-components";

import React from "react";

interface FadeProps {
  children: React.ReactNode;
}

const fadeIn = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: gray;
  }
`;

const StyledDiv = styled.div`
  /* margin: 1em 0; */
  border-radius: 5px;
  transition: background-color 1s ease-in-out;
  animation: ${fadeIn} 1s ease-in-out infinite;
`;

const Fade: React.FC<FadeProps> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Fade;
