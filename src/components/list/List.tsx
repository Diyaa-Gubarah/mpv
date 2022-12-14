import React from "react";
import styled from "styled-components";

type ListProps<T> = {
  data: T[];
  direction: "horizontal" | "vertical";
  scrollable: boolean;
  Item: React.FunctionComponent<any>;
};

const List: React.FC<ListProps<{}>> = ({
  data,
  direction,
  scrollable,
  Item,
}) => {
  return (
    <StyledList direction={direction} scrollable={scrollable}>
      {data.map((d, i) => {
        return <Item data={d} count={data.length} key={i.toString()} />;
      })}
    </StyledList>
  );
};

const StyledList = styled.div<{
  direction: "horizontal" | "vertical";
  scrollable: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  overflow: ${({ scrollable }) => (scrollable ? "scroll" : "visible")};
  /* Hide the scrollbar */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    /* Chrome/Safari */
    display: none;
  }
`;

export default List;
