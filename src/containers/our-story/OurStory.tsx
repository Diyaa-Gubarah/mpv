import {
  Box,
  CustomImage,
  SideNav,
  Text,
  createButton,
} from "../../components";

import React from "react";
import images from "../../constants/images";
import styled from "styled-components";
import { withResponsive } from "../../hoc";

const Responsive = styled(Box)`
  @media only screen and (${`max-width:750px`}) {
    flex-direction: column;
    padding: 1em 0;

    & div {
      width: 90%;
      padding: 1em 0;
    }
  }
`;

type Props = {};

function OurStory({}: Props) {
  return (
    <Responsive color="#fff" al="center" gap="2em" padding="4em">
      <Box direction="column" gap="1em">
        <Text fontSize={"2em"} color="#000" fontWeight="bold">
          OUR STORY
        </Text>
        <Text fontSize="0.85em">
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
    </Responsive>
  );
}

export default OurStory;
