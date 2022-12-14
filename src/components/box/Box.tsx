import styled, { css } from "styled-components";

import React from "react";

type JustifyType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type AlignType = "flex-start" | "flex-end " | "center" | "baseline" | "stretch";

interface BoxProps {
  // Customizable properties for the Box component
  direction?: "column" | "row" | "row-reverse";
  color?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
  gap?: string;
  fontSize?: string;
  url?: string;
  shadow?: boolean;
  responsive?: boolean;
  border?: string;
  js?: JustifyType;
  al?: AlignType;
  flex?: number;
  rounded?: string;
  position?: "absolute" | "relative";
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const responsive = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const positioning = css`
  top: ${(props: BoxProps) => props.top};
  left: ${(props: BoxProps) => props.left};
  bottom: ${(props: BoxProps) => props.bottom};
  right: ${(props: BoxProps) => props.right};
`;

const shadow = css`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      black 0%,
      transparent 100%
    ); /* This creates the gradient */
    opacity: 0.55;
  }
`;

const BoxWrapper = styled.div<BoxProps>`
  // Default styles for the Box component
  display: flex;
  height: 100%;
  padding: 0;
  font-size: 1rem;

  width: 100%;

  // Customizable styles based on the provided props
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.js};
  align-items: ${(props) => props.al};
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  font-size: ${(props) => props.fontSize};
  background-image: url(${(props) => props.url});
  border-radius: ${(props) => props.rounded};
  border: ${(props) => props.border};
  position: ${(props) => props.position || "relative"};
  background-size: cover;
  background-repeat: no-repeat;
  ${(props) => props.shadow && shadow}
  ${(props) => props.responsive && responsive}
  ${(props) => props.position && positioning}
`;

const Box: React.FunctionComponent<BoxProps> = ({ children, ...props }) => {
  return <BoxWrapper {...props}>{children}</BoxWrapper>;
};

export default Box;
