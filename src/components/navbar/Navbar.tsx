import SideNav, { SidenavHandle } from "../sidenav/SideNav";

import Box from "../box/Box";
import CustomImage from "../image/Image";
import CustomLink from "../custom-link/CustomLink";
import { HiMenuAlt3 } from "react-icons/hi";
import React from "react";
import images from "../../constants/images";
import styled from "styled-components";

const LinkContainer = styled(Box)`
  @media only screen and (${`max-width:580px`}) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: none;
  @media only screen and (${`max-width:580px`}) {
    display: inline;
  }
`;

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const sidenavRef = React.useRef<SidenavHandle>(null);

  const toggleMenu = React.useCallback(() => {
    setShow((prevShow) => !prevShow);
  }, [show]);

  const toggleSidenav = React.useCallback(() => {
    if (sidenavRef.current) {
      sidenavRef.current.toggle();
      setShow(true);
    }
  }, [sidenavRef, setShow]);

  return (
    <Box direction="row" js="space-between" al="center" height="auto" gap="1em">
      <SideNav ref={sidenavRef} toggleMenu={toggleMenu} />

      <CustomImage
        alt="logo"
        src={images.logo}
        height="3em"
        width="fit-content"
        objectFit="contain"
      />
      <LinkContainer
        gap="1em"
        flex={1}
        js="flex-end"
        al="center"
        fontSize="0.75em"
      >
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
      </LinkContainer>
      {!show && (
        <MenuContainer>
          <HiMenuAlt3
            size={22}
            color="#fff"
            style={{ cursor: "pointer" }}
            onClick={toggleSidenav}
          />
        </MenuContainer>
      )}
    </Box>
  );
};

export default Navbar;
