import { Box, List, Text } from "../../components";

import images from "../../constants/images";
import styled from "styled-components";

const ResponsiveGallery = styled.div`
  min-width: 70vw;
  height: 59vh;
  margin: 0 0.5em;

  @media only screen and (${`max-width:760px`}) {
    min-width: 60vw;
    height: 45vh;
  }
`;

const ShadowText = styled(Box)`
  z-index: 1;
  opacity: 0.5;
`;

const data = [
  { id: 1, url: images.main_bg },
  { id: 2, url: images.main_bg },
  { id: 3, url: images.main_bg },
];

type Props = {};

function Gallery({}: Props) {
  return (
    <Box color="#444444" padding="3em 0">
      <Box direction="column">
        <ShadowText
          position="absolute"
          top="0"
          height="auto"
          width="auto"
          margin="-2.5em 0 0"
        >
          <Text
            fontSize={"3em"}
            color="#fff"
            lineHeight={60}
            width="60%"
            fontWeight="bold"
          >
            GALLERY
          </Text>
        </ShadowText>
        <List
          Item={Item}
          data={data}
          direction="horizontal"
          scrollable={true}
        />
        <Box height="100%" width="12%" shadow position="absolute" left={"0"} />
        <Box height="100%" width="12%" shadow position="absolute" right="0" />
      </Box>
    </Box>
  );
}

export default Gallery;

type ItemProps = {
  data: {
    url: string;
    id: number;
    count: number;
  };
};

const Item: React.FC<ItemProps> = ({ data }) => {
  return (
    <ResponsiveGallery>
      <Box url={data.url} width="100%" />
    </ResponsiveGallery>
  );
};
