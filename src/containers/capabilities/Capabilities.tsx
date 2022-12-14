import { Box, CustomLink, Text } from "../../components";

import Stage from "./Stage";
import images from "../../constants/images";

type Props = {};

function Capabilities({}: Props) {
  return (
    <Box margin="2em 0" direction="column" >
      <Box direction="column" gap="2em" url={images.main_bg} shadow>
        <Text
          fontSize={"3em"}
          color="#fff"
          lineHeight={60}
          width="60%"
          fontWeight="bold"
        >
          Our Capabilities.
        </Text>

        <Box direction="column">
          <Text
            fontSize={"1em"}
            color="#fff"
            lineHeight={34}
            width="60%"
            fontWeight="normal"
            margin="0 0 0.5em"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            tempora accusamus eum placeat voluptatum dolore reprehenderit cum
            nemo illo est, rem, perspiciatis repellat, consequuntur dolores
            dolor! Possimus libero beatae ex!
          </Text>

          <CustomLink href="#" underline>
            Learn More
          </CustomLink>
        </Box>
      </Box>
      <Stage />
    </Box>
  );
}

export default Capabilities;
