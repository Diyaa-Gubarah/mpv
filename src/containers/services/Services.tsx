import { Box, CustomImage, Text } from "../../components";
import {
  Service,
  fetchServices,
  selectServices,
  selectServicesError,
  selectServicesLoading,
} from "../../store/reducers/serviceSlice";
import { useAppDispatch, useAppShallowSelector } from "../../hooks";

import ImageList from "./ImageList";
import React from "react";
import Section from "./Section";
import { getRequest } from "../../services";
import images from "../../constants/images";
import { withResponsive } from "../../hoc";

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
        <Box>Loading.....</Box>
      ) : (
        services?.map((services: Service, i) => (
          <Section
            key={i.toString()}
            header={services.title}
            url={services.url}
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
