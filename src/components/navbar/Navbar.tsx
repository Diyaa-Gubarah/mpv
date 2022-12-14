import { NavLink, Route } from "react-router-dom";

import Box from "../box/Box";
import CustomImage from "../image/Image";
import CustomLink from "../custom-link/CustomLink";
import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const Sticky = styled(Box)`
  position: sticky;
  top: 0;
  z-index: 2;
  /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)); */
`;

const Navbar = () => {
  return (
    <Sticky direction="row" js="space-between" al="center" height="auto">
      <CustomImage alt="logo" src={images.logo} height="3em" width="auto" />
      <Box gap="1em" flex={1} js="flex-end" al="center" fontSize="0.75em">
        <CustomLink id="home" href="#home">
          Home
        </CustomLink>
        <CustomLink id="capabilities" href="#capabilities">
          Capabilities
        </CustomLink>
        <CustomLink id="services" href="#services">
          Services
        </CustomLink>
        <CustomLink id="gallery" href="#gallery">
          Gallery
        </CustomLink>
        <CustomLink id="our-story" href="#our-story">
          Our Story
        </CustomLink>
        <CustomLink id="contact" href="#contact">
          Contact Us
        </CustomLink>
      </Box>
    </Sticky>
  );
};

export default Navbar;
