import { Box, CustomImage, Text } from "../index";

import React from "react";
import images from "../../constants/images";
import { withResponsive } from "../../hoc";

const Responsive = withResponsive(() => (
  <Box direction="column" js="space-between" padding="2em 0">
    <Box direction="column" gap="0.5em" height="auto" width="auto">
      <CustomImage
        alt="logo"
        src={images.logo}
        height="40px"
        width="80px"
        objectFit="none"
      />
      <Text color="#fff" fontSize="0.67em" lineHeight={18}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos aliquid
        non, itaque rem accusamus suscipit eveniet unde quia ratione consectetur
        facere, architecto quibusdam rerum vero est ea, adipisci maxime quas.
      </Text>
      <div style={{ borderBottom: "1.5px dotted #fff" }} />
    </Box>
    <Box direction="column" flex={1} margin="1.5em auto">
      <Text color="#fff" fontSize="0.67em">
        Lorem ipsum dolor sit amet.
      </Text>
      <Text color="#fff" fontSize="0.67em">
        Lorem ipsum dolor sit amet.
      </Text>
    </Box>
    <Box direction="column" gap="0.5em" width="auto">
      <Text color="#fff" fontWeight="bold" fontSize="1.2em">
        Bounce Number.
      </Text>
      <Box gap="2em">
        <Box direction="column" width="auto">
          <Text color="#fff" fontWeight="bold" fontSize="1.2em">
            54
          </Text>
          <Text color="#fff" fontSize="0.95em">
            hjjhgjhghj
          </Text>
        </Box>
        <Box direction="column" width="auto">
          <Text color="#fff" fontWeight="bold" fontSize="1.2em">
            54
          </Text>
          <Text color="#fff" fontSize="0.95em">
            hjjhgjhghj
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
));

type Props = {};

function Footer({}: Props) {
  return (
    <Box url={images.main_bg} height="auto" shadow>
      <Responsive />
    </Box>
  );
}

export default Footer;
