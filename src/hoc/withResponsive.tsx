import * as React from "react";

import { Box } from "../components";

function withResponsive<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.FunctionComponent<P>
): React.FunctionComponent<P> {
  return function (props: P) {
    return (
      <Box
        flex={1}
        direction="column"
        js="space-between"
        responsive
        padding="0 1em"
      >
        <WrappedComponent {...props} />
      </Box>
    );
  };
}

export default withResponsive;
