import * as React from "react";

import styled, { css } from "styled-components";

import { useLocation } from "react-router";

const usePathname = () => {
  const location = useLocation();
  return location.hash;
};

const current = css`
  color: var(--link-color);
  border-bottom: 2px solid var(--link-color);
`;

interface Props {
  href: string;
  children: React.ReactNode;
  match?: boolean;
  id?: string;
  underline?: boolean;
}

const CustomLink: React.FunctionComponent<Props> = ({
  href,
  children,
  underline = false,
}) => {
  const currentURL = usePathname();

  return (
    <StyledLink href={href} match={currentURL === href} underline={underline}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled.a<Props>`
  padding: 0.25em 0;
  text-decoration: ${(props) => props.underline ? "underline" : 'none'};
  font-style: normal;
  font-weight: 700;
  font-size: 0.9em;
  color: var(--link-color);

  &:hover {
    font-weight: bolder;
    cursor: pointer;
  }

  ${(props) => props.match && current}
`;

export default React.memo(CustomLink);
