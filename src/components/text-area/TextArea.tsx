import * as React from "react";

import { Box, Text } from "../index";

import styled from "styled-components";

const StyledTextarea = styled.textarea`
  border: 1px solid #ccc;
  padding: 1.25em 1em;
  border-radius: 0.24em;
  font-size: 0.75em;
  line-height: 16px;
  font-weight: 500;
  width: 100%;
  resize: none;
  flex: 1;
  overflow: auto;
`;

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  placeholder,
  onChange,
  name,
}: TextareaProps) => {
  return (
    <Box direction="column" gap="0.5em" height="auto">
      <Text color="#fff" fontSize="0.70em" fontWeight="bold">
        {name}
      </Text>
      <StyledTextarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default Textarea;
