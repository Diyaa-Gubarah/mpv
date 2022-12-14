import { Box, Text } from "../index";

import React from "react";
import styled from "styled-components";

interface InputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email";
  placeholder?: string;
  width?: string;
}

const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 0.5em;
  border-radius: 0.24em;
  font-size: 1em;
  font-weight: bold;
  width: ${(props) => props.width || "100%"};
`;

const Input: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
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
      />
    </Box>
  );
};

export default Input;
