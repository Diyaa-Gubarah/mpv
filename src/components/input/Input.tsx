import { Box, Text } from "../index";
import styled, { css } from "styled-components";

import React from "react";

const asTextArea = css`
  height: max-content;
`;

interface InputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email";
  placeholder?: string;
  width?: string;
  multiple?: boolean;
}

const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 0.5em 0.5em;
  border-radius: 0.24em;
  font-size: 0.75em;
  font-weight: 500;
  width: ${(props) => props.width || "100%"};
  min-height: ${(props) => props.multiple && "40px"};
`;

const Input: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  multiple,
}) => {
  return (
    <Box direction="column" gap="0.5em" height="auto">
      <Text color="#fff" fontSize="0.70em" fontWeight="bold">
        kjhkhkjhk
      </Text>
      <StyledInput
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        multiple={multiple}
      />
    </Box>
  );
};

export default Input;
