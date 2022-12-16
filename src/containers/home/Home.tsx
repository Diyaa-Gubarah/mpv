import {
  Box,
  CustomLink,
  Navbar,
  SideNav,
  Text,
  createButton,
} from "../../components";

import images from "../../constants/images";
import styled from "styled-components";
import { withResponsive } from "../../hoc";

type Props = {};

const ResponsiveText = styled(Text)`
  @media only screen and (${`max-width:360px`}) {
    font-size: 2.75em;
  }
`;

const Responsive = withResponsive(({}: Props) => (
  <>
    <Navbar />

    <Box flex={0.6} fontSize="0.9em" direction="column" gap="1em">
      <ResponsiveText
        fontSize={"3.5em"}
        color="#fff"
        width="60%"
        fontWeight="bolder"
      >
        Construction Company.
      </ResponsiveText>

      <Text
        fontSize={"1em"}
        color="#fff"
        lineHeight={24}
        width="80%"
        fontWeight="normal"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora
        accusamus eum placeat voluptatum dolore reprehenderit cum nemo illo est,
        rem, perspiciatis repellat, consequuntur dolores dolor! Possimus libero
        beatae ex!
      </Text>

      <CustomLink href="#" underline>
        Learn More
      </CustomLink>
    </Box>
  </>
));

function Home({}: Props) {
  return (
    <Box url={images.main_bg} height="95vh" direction="column" shadow>
      <Responsive />
    </Box>
  );
}

export default Home;
