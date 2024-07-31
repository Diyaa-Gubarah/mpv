import { Box, Text } from "../../components";
import { useAppDispatch, useAppShallowSelector } from "../../hooks";
import {
  Service,
  fetchServices,
  selectServices,
  selectServicesError,
  selectServicesLoading,
} from "../../store/reducers/serviceSlice";

import React from "react";
import Fade from "../../components/fade/Fade";
import images from "../../constants/images";
import { withResponsive } from "../../hoc";
import ImageList from "./ImageList";
import Section from "./Section";

type Props = {};

function Services({}: Props) {
  const services = useAppShallowSelector(selectServices);
  const fetching = useAppShallowSelector(selectServicesLoading);
  const error = useAppShallowSelector(selectServicesError);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchServices());

    return () => {};
  }, []);

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

      {fetching ? (
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
