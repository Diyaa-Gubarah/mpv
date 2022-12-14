import React from "react";
import styled from "styled-components";

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
}

const Text = styled.span`
  color: ${(props: CustomTextProps) => props.color || "black"};
  font-size: ${(props: CustomTextProps) => props.fontSize || "1rem"};
  font-weight: ${(props: CustomTextProps) => props.fontWeight};
  line-height: ${(props: CustomTextProps) => props.lineHeight}px;
  width: ${(props: CustomTextProps) => props.width};
  text-align: ${(props: CustomTextProps) => props.ta};
  padding: ${(props: CustomTextProps) => props.padding};
  margin: ${(props: CustomTextProps) => props.margin};
`;

const CustomText: React.FC<CustomTextProps> = (props) => {
  return <Text {...props}>{props.children}</Text>;
};

export default CustomText;
