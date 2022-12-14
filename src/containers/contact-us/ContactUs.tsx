import { Box, Text } from "../../components";

import { FaMapMarkerAlt } from "react-icons/fa";
import images from "../../constants/images";

type Props = {};

function ContactUs({}: Props) {
  return (
    <Box flex={1} direction="column" gap="2em" height="120vh">
      <Text fontSize={"3em"} color="#fff" lineHeight={60} fontWeight="bold">
        CONTACT US
      </Text>
      <Box url={images.main_bg} width="100%">
        <Box
          url={images.map}
          width="80%"
          margin="auto"
          height="90%"
          bottom="0"
          top="0"
          left="0"
          right="0"
          direction="column"
        >
          <Box flex={0.7}>
            <Box>
              <FaMapMarkerAlt
                color="#fff"
                size={34}
                style={{
                  position: "absolute",
                  top: "37%",
                  left: "40%",
                }}
              />
            </Box>
            <Box color="rgb(0,0,0,0.8)" gap="0.5em" direction="column">
              <Text fontSize={"1.5em"} color="#fff" fontWeight="bolder">
                Lets Talk
              </Text>
              <Text fontSize={"0.75em"} color="#fff" fontWeight="bolder">
                Lets Talk
              </Text>
            </Box>
          </Box>
          <Box flex={0.3} color="#fff4">
            bottom
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
