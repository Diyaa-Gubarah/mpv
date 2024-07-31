import { Box, Text } from "../../components";
import { Service, useServicesStore } from "../../store/reducers/serviceSlice";

import Fade from "../../components/fade/Fade";
import images from "../../constants/images";
import { withResponsive } from "../../hoc";
import ImageList from "./ImageList";
import Section from "./Section";
import React from "react";

type Props = {};

function Services({}: Props) {
  const { services, loading, error, fetchServices } = useServicesStore();

  React.useEffect(() => {
    fetchServices();
  }, [fetchServices]);

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

      {loading ? (
        <Box direction="column" gap="1em" margin="2em auto">
          {[1, 2, 3].map((item) => (
            <Fade key={item}>
              <Box height="32vh"></Box>
            </Fade>
          ))}
        </Box>
      ) : (
        services?.slice(0, 5).map((services: Service, i) => (
          <Section
            key={i.toString()}
            header={services.title}
            url={services.url || images.main_bg}
            // sub="hint header"
            description={services?.body}
            reverse={i % 2 === 0}
          />
        ))
      )}

      <ImageList />
    </Box>
  );
}

export default withResponsive(Services);
