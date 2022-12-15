import { Box, CustomImage, Text } from "../../components";

import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const ResponseImageListContainer = styled(Box)`
  @media only screen and (${`max-width:760px`}) {
    gap: 1em;

    & .border {
      height: 30vh;
    }

    & .imageWrapper {
      margin: 2em auto 0;
    }
  }

  @media only screen and (${`max-width:620px`}) {
    gap: 1em;

    & .border {
      height: 30vh;
      width: 70%;
    }

    & .imageWrapper {
      margin: 2em auto 0;
      flex-wrap: wrap;
      gap: 0.5;

      
      & img {
        object-fit: cover;
      }
    }
  }
`;

type Props = {};

const ImageList = (props: Props) => {
  return (
    <ResponseImageListContainer gap="1em" margin="2em auto">
      <Box
        className="border"
        flex={1}
        border={"0.55em solid #74747C"}
        width="40%"
        height="40vh"
        position="absolute"
        right="0"
      />
      <Box gap="1em" margin="4em auto" width="92%" className="imageWrapper">
        {[1, 2, 3].map((item) => (
          <ImageItem key={item} />
        ))}
      </Box>
    </ResponseImageListContainer>
  );
};

export default ImageList;

type ImageItemProps = {};

const ImageItem: React.FunctionComponent<ImageItemProps> = (
  props: ImageItemProps
) => (
  <CustomImage
    width="100%"
    height="40vh"
    // height="40vh"
    alt="house"
    src={images.main_bg}
    objectFit="cover"
  />
);
