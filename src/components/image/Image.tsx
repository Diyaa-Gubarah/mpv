import Box from "../box/Box";
import React from "react";
import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  rounded?: boolean;
  objectFit?: "cover" | "fill" | "contain" | "none";
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${(props: ImageProps) => props.objectFit || "contain"};
  /* mix-blend-mode: multiply;
  aspect-ratio: 3/2; */
  ${(props: ImageProps) => props.rounded && `border-radius: 50%;`}
`;

const CustomImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  rounded,
  objectFit,
}) => {
  return (
    <Box width={width} height={height}>
      <Image src={src} alt={alt} rounded={rounded} />
    </Box>
  );
};

export default CustomImage;
