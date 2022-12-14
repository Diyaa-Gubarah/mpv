/**
 * https://css-tricks.com/hash-tag-links-padding/
 */

import styled from "styled-components";

type Props = {
  padding?: string;
};

const EmptySpan = styled.span<Props>`
  content: "&nbsp";
  padding-bottom: ${(props) => props.padding};
  display: inline;
`;

export default EmptySpan;
