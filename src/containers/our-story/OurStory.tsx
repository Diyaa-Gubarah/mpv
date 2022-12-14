import { Box, SideNav, createButton } from "../../components";

import React from "react";

type Props = {};

const Button = createButton("red");

function OurStory({}: Props) {
  return (
    <Box>
      <p>OurStory</p>
      <p>OurStory</p>
      {/* <Button radius="2em" color="#d4d4d4" background="blue">
        kg jhgjgjgjjgghj
      </Button>
      <SideNav /> */}
    </Box>
  );
}

export default OurStory;
