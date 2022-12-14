import * as React from "react";

import styled from "styled-components";

const StyledTextarea = styled.textarea`
  border: 1px solid #ccc;
  padding: 0.5em;
  border-radius: 0.24em;
  font-size: 1em;
  font-weight: bold;
  width: 100%;
  resize: none;
`;

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  placeholder,
  onChange,
}: TextareaProps) => {
  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
