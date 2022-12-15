import { Box, CustomLink, Text } from "../../components";

import Stage from "./Stage";
import images from "../../constants/images";
import styled from "styled-components";

const CardContainer = styled(Box)`
  width: 80%;
  padding: 3em;
  margin: 4em auto;

  @media only screen and (${`max-width:540px`}) {
    width: 90%;
    padding: 1.5em;
    font-size: 0.75em;
    margin: 1em auto;
  }
`;

type Props = {};

function Capabilities({}: Props) {
  return (
    <Box direction="column">
      <CardContainer direction="column" gap="2em" url={images.main_bg} shadow>
        <Text fontSize={"3em"} color="#fff" width="70%" fontWeight="bold">
          Our Capabilities.
        </Text>

        <Box direction="column">
          <Text
            fontSize={"1em"}
            color="#fff"
            width="70%"
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
      </CardContainer>
      <Stage />
    </Box>
  );
}

export default Capabilities;
