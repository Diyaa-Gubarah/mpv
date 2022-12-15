import { Box, CustomIcon, Input, Text, TextArea } from "../../components";

import { FaMapMarkerAlt } from "react-icons/fa";
import { ListData } from "../../data";
import Map from "./Map";
import images from "../../constants/images";
import styled from "styled-components";
import { useState } from "react";

const ResponseMapWrapper = styled(Box)`
  padding-top: 1em;
  @media only screen and (${`max-width:760px`}) {
    font-size: 10px;
  }
`;

type Props = {};

function ContactUs({}: Props) {
  return (
    <ResponseMapWrapper flex={1} direction="column" gap="2em" height="auto">
      <Text fontSize={"3em"} color="#fff" fontWeight="bold">
        CONTACT US
      </Text>
      <Box url={images.main_bg} width="100%">
        <Map />
      </Box>
    </ResponseMapWrapper>
  );
}

export default ContactUs;
