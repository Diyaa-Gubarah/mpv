import { Box, CustomImage, Text } from "../../components";

import styled from "styled-components";

const ResponsiveSection = styled(Box)`
  @media only screen and (${`max-width:860px`}) {
    /* background: red; */
    gap: 1em;
  }
  @media only screen and (${`max-width:670px`}) {
    /* background: blue; */
    gap: 2em;
    flex-direction: column;
    margin:1.5em 0;

    & .borderWrapper {
      border: 0.55em solid #fff;
      width: 70%;
      height: 24vh;
      align-items: center;

      & img {
        object-fit: cover;
      }
    }

    & .descriptionWrapper {
      width: 100%;
      align-items: center;

      & span {
        text-align: center;
      }
    }
  }
`;

type SectionProps = {
  header?: string;
  sub?: string;
  description?: string;
  url: string;
  reverse?: boolean;
};

const Section: React.FunctionComponent<SectionProps> = ({
  description,
  header,
  sub,
  url,
  reverse,
}: SectionProps) => (
  <ResponsiveSection
    js="space-between"
    al="center"
    gap="3em"
    margin="4em 0"
    direction={reverse ? "row-reverse" : "row"}
  >
    <Box
      className="borderWrapper"
      border="0.55em solid #f3f3f3"
      width="45%"
      height="38vh"
    >
      <Box
        className="imageWrapper"
        position="absolute"
        top="0.75em"
        left={reverse ? "-2em" : "2em"}
        direction="column"
        gap="0.25em"
      >
        <Text
          color="#fff"
          fontSize="0.75em"
          fontWeight="bold"
          ta={reverse ? "right" : "left"}
        >
          {header}
        </Text>
        <Text
          color="#fff"
          fontSize="0.65em"
          margin="0 0 0.25em"
          ta={reverse ? "right" : "left"}
        >
          {sub ?? ""}
        </Text>
        <CustomImage
          width="100%"
          height="100%"
          alt="house"
          src={url}
          objectFit="contain"
        />
      </Box>
    </Box>
    <Box width="1em"></Box>
    <Box width="55%" al="center" className="descriptionWrapper">
      <Text color="#fff" fontSize="0.65em" fontWeight="bold" lineHeight={23}>
        {description}
      </Text>
    </Box>
  </ResponsiveSection>
);

export default Section;
