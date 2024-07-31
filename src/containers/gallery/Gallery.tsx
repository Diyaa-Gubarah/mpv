import { Box, List, Text } from "../../components";
import { useGalleryStore } from "../../store/reducers/gallerySlice";

import { useEffect } from "react";
import styled from "styled-components";
import Fade from "../../components/fade/Fade";

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

type Props = {};

function Gallery({}: Props) {
  const { images, loading, error, fetchImages } = useGalleryStore();

  useEffect(() => {
    // Replace this line
    // dispatch(fetchImages());
    // With this
    fetchImages();
  }, [fetchImages]);

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
        {loading ? (
          <List
            Item={() => (
              <Box direction="column" gap="1em" margin="2em 1em">
                <Fade>
                  <Box height="45vh" width="65vw"></Box>
                </Fade>
              </Box>
            )}
            data={[1, 2, 3]}
            direction="horizontal"
            scrollable={true}
          />
        ) : (
          <List
            Item={Item}
            data={images.map((d) => ({ id: d.id, url: d.download_url }))}
            direction="horizontal"
            scrollable={true}
          />
        )}
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
  };
};

const Item: React.FC<ItemProps> = ({ data }) => {
  return (
    <ResponsiveGallery>
      <Box url={data.url} width="100%" />
    </ResponsiveGallery>
  );
};
