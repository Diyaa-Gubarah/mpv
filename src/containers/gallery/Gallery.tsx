import { Box, SideNav, createButton } from "../../components";

import React from "react";

type Props = {};

const Button = createButton("red");

function Gallery({}: Props) {
  return (
    <Box>
      <p>Gallery</p>
      <p>Gallery</p>
      {/* <Button radius="2em" color="#d4d4d4" background="blue">
        kg jhgjgjgjjgghj
      </Button>
      <SideNav /> */}
    </Box>
  );
}

export default Gallery;
