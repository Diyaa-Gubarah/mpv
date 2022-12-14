import { Box, CustomImage, Text } from "../../components";

import React from "react";
import images from "../../constants/images";

type Props = {};

const ImageList = (props: Props) => {
  return (
    <Box gap="1em">
      <Box
        flex={1}
        border={"0.55em solid #f3f3f3"}
        width="40%"
        height="40vh"
        position="absolute"
        right="0"

      />
      <Box gap="1em" margin="4em auto" width="92%" >
        {[1, 2, 3].map((item) => (
          <ImageItem key={item} />
        ))}
      </Box>
    </Box>
  );
};

export default ImageList;

type ImageItemProps = {};

const ImageItem: React.FunctionComponent<
  ImageItemProps
> = ({}: ImageItemProps) => (
  <CustomImage
    width="100%"
    height="40vh"
    // height="40vh"
    alt="house"
    src={images.main_bg}
    objectFit="cover"
  />
);
