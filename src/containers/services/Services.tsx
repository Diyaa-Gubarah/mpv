import { Box, CustomImage, Text } from "../../components";

import images from "../../constants/images";

type Props = {};

function Services({}: Props) {
  return (
    <Box margin="2em 0" direction="column">
      <Box direction="column" gap="2em">
        <Text
          fontSize={"3em"}
          color="#fff"
          lineHeight={60}
          width="60%"
          fontWeight="bold"
        >
          OUR SERVICES
        </Text>
      </Box>
      <Section
        header="card header jh jhgj hgjhg"
        url={images.main_bg}
        sub="hint header"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id excepturi ullam deserunt perferendis vel ea delectus autem atque ipsum nostrum magnam dolorum, ipsa in accusantium placeat quos nam alias."
      />
      <Section
        reverse
        header="card header jh jhgj hgjhg"
        url={images.main_bg}
        sub="hint header"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id excepturi ullam deserunt perferendis vel ea delectus autem atque ipsum nostrum magnam dolorum, ipsa in accusantium placeat quos nam alias."
      />
      <Section
        header="card header jh jhgj hgjhg"
        url={images.main_bg}
        sub="hint header"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id excepturi ullam deserunt perferendis vel ea delectus autem atque ipsum nostrum magnam dolorum, ipsa in accusantium placeat quos nam alias."
      />
      <Section
        reverse
        header="card header jh jhgj hgjhg"
        url={images.main_bg}
        sub="hint header"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id excepturi ullam deserunt perferendis vel ea delectus autem atque ipsum nostrum magnam dolorum, ipsa in accusantium placeat quos nam alias."
      />
      <Section
        header="card header jh jhgj hgjhg"
        url={images.main_bg}
        sub="hint header"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id excepturi ullam deserunt perferendis vel ea delectus autem atque ipsum nostrum magnam dolorum, ipsa in accusantium placeat quos nam alias."
      />
    </Box>
  );
}

export default Services;

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
  <Box
    js="space-between"
    al="center"
    gap="3em"
    margin="4em 0"
    direction={reverse ? "row-reverse" : "row"}
  >
    <Box border="0.55em solid #f3f3f3" width="45%" height="38vh">
      <Box
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
    <Box width="55%" al="center">
      <Text color="#fff" fontSize="0.65em" fontWeight="bold" lineHeight={23}>
        {description}
      </Text>
    </Box>
  </Box>
);
