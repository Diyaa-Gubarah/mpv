import * as React from "react";

import styled from "styled-components";

type ButtonProps = {
  border?: string;
  color?: string;
  background?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
};

const Button = styled.div<ButtonProps>`
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.width};
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.background};
  }
`;

const createButton = (color: string) => {
  const CustomButton: React.FC<ButtonProps> = ({
    onClick,
    children,
    ...props
  }) => (
    <Button {...props} color={color} onClick={onClick}>
      {children}
    </Button>
  );

  return CustomButton;
};

export default createButton;

// import createButton from './createButton';

// const BlueButton = createButton('blue');
// const RedButton = createButton('red');

{
  /* <RedButton onClick={() => console.log('red button clicked')}>Click me!</RedButton> */
}
