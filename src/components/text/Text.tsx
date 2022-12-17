import styled, { css } from "styled-components";

import React from "react";

interface CustomTextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: "normal" | "bold" | "bolder";
  lineHeight?: number;
  children: React.ReactNode;
  width?: string;
  ta?: "center" | "left" | "right" | "justify";
  padding?: string;
  margin?: string;
  type?: "text" | "button";
  onClick?: () => void;
  background?: string;
  size?: "sm" | "md" | "large" | "x-large";
}

const button = css`
  border-radius: 0.25em;
  &:hover {
    background-color: ${(props: CustomTextProps) => props.color};
    color: ${(props: CustomTextProps) => props.background};
    cursor: pointer;
  }
`;

const Text = styled.span`
  color: ${(props: CustomTextProps) => props.color || "black"};
  font-size: ${(props) => (props.size === "sm" ? "0.75em" : props.fontSize)};
  font-size: ${(props) => (props.size === "md" ? "1em" : props.fontSize)};
  font-size: ${(props) => (props.size === "large" ? "1.5em" : props.fontSize)};
  font-size: ${(props) => (props.size === "x-large" ? "2em" : props.fontSize)};
  font-weight: ${(props: CustomTextProps) => props.fontWeight};
  line-height: ${(props: CustomTextProps) => props.lineHeight}px;
  width: ${(props: CustomTextProps) => props.width};
  text-align: ${(props: CustomTextProps) => props.ta};
  padding: ${(props: CustomTextProps) => props.padding};
  margin: ${(props: CustomTextProps) => props.margin};

  ${(props: CustomTextProps) => props.type === "button" && button}
`;

const CustomText: React.FC<CustomTextProps> = (props) => {
  return <Text {...props}>{props.children}</Text>;
};

export default CustomText;
