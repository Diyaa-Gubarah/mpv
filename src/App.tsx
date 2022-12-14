import { Box, EmptySpan, Footer, Navbar } from "./components";
import {
  Capabilities,
  ContactUs,
  Gallery,
  Home,
  OurStory,
  Services,
} from "./containers";

const App = () => {
  return (
    <>
      <EmptySpan id="home" />
      <Home />

      <EmptySpan id="capabilities" padding="1em" />
      <Capabilities />

      <EmptySpan id="services" padding="1em" />
      <Services />

      <EmptySpan id="gallery" padding="1em" />
      <Gallery />

      <EmptySpan id="our-story" padding="1em" />
      <OurStory />

      <EmptySpan id="contact-us" padding="1em" />
      <ContactUs />
    </>
  );
};

export default App;
