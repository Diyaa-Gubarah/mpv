import * as React from "react";

import styled from "styled-components";

interface GridProps {
  // Props that the user can customize
  width?: string;
  height?: string;
  gap?: string;
  templateColumns?: string;
  templateRows?: string;
  justifyItems?: string;
  alignItems?: string;
  children: React.ReactNode;
}

// Create the styled component
const StyledGrid = styled.div<GridProps>`
  display: grid;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  gap: ${(props) => props.gap || "0"};
  grid-template-columns: ${(props) => props.templateColumns || "1fr"};
  grid-template-rows: ${(props) => props.templateRows || "1fr"};
  justify-items: ${(props) => props.justifyItems || "stretch"};
  align-items: ${(props) => props.alignItems || "stretch"};
`;

// Create the functional component
const Grid: React.FC<GridProps> = (props) => {
  return <StyledGrid {...props}>{props.children}</StyledGrid>;
};

export default Grid;
