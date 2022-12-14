import {
  Box,
  CustomImage,
  SideNav,
  Text,
  createButton,
} from "../../components";

import React from "react";
import images from "../../constants/images";

type Props = {};

function OurStory({}: Props) {
  return (
    <Box color="#fff" al="center" gap="2em" padding="2em 0">
      <Box direction="column" gap="1em">
        <Text fontSize={"3em"} color="#000" lineHeight={60} fontWeight="bold">
          OUR STORY
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          distinctio a quaerat labore, hic adipisci illo cupiditate? Harum
          possimus, quod pariatur reprehenderit totam quas, non ratione
          repellendus quaerat error rerum.
        </Text>
      </Box>
      <CustomImage
        alt="some image"
        src={images.main_bg}
        width="50%"
        height="50%"
      />
    </Box>
  );
}

export default OurStory;
