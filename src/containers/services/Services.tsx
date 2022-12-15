import { Box, CustomImage, Text } from "../../components";

import ImageList from "./ImageList";
import Section from "./Section";
import images from "../../constants/images";
import { withResponsive } from "../../hoc";

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
      <ImageList/>
    </Box>
  );
}

export default withResponsive(Services);
