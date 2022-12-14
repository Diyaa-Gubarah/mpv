import { Box, SideNav, createButton } from "../../components";

import React from "react";

type Props = {};

const Button = createButton("red");

function ContactUs({}: Props) {
  return (
    <Box>
      <p>ContactUs</p>
      <p>ContactUs</p>
      {/* <Button radius="2em" color="#d4d4d4" background="blue">
        kg jhgjgjgjjgghj
      </Button>
      <SideNav /> */}
    </Box>
  );
}

export default ContactUs;
