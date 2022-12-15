import { NavLink, Route } from "react-router-dom";

import Box from "../box/Box";
import CustomImage from "../image/Image";
import CustomLink from "../custom-link/CustomLink";
import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Box direction="row" js="space-between" al="center" height="auto">
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
        <CustomLink id="contact-us" href="#contact-us">
          Contact Us
        </CustomLink>
      </Box>
    </Box>
  );
};

export default Navbar;
