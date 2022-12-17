import React, {
  Ref,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import Box from "../box/Box";
import CustomLink from "../custom-link/CustomLink";
import { HiMenuAlt3 } from "react-icons/hi";
import styled from "styled-components";

interface SidenavProps {
  ref: Ref<SidenavHandle>;
  toggleMenu: () => void;
}

export interface SidenavHandle {
  toggle: () => void;
}

const SidenavContainer = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  z-index: 4;
  transition: transform 0.3s ease-out;

  @media (min-width: 461px) {
    display: none;
  }
`;

const SideNav: React.ForwardRefRenderFunction<unknown, SidenavProps> = (
  { toggleMenu },
  ref
): JSX.Element | null => {
  const [show, setShow] = useState(false);

  const toggleSidenav = () => {
    setShow((prevShow) => !prevShow);
    toggleMenu();
  };

  useImperativeHandle(ref, () => ({
    toggle: toggleSidenav,
  }));

  return show ? (
    <SidenavContainer color="#0008" shadow padding="0.75em">
      <Box position="absolute" >
        <AiOutlineCloseCircle
          size={22}
          color="#fff"
          style={{ cursor: "pointer" }}
          onClick={toggleSidenav}
        />
      </Box>
      <Box
        gap="0.75em"
        direction="column"
        width="80%"
        margin="auto auto"
        al="center"
        js="center"
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
      </Box>
    </SidenavContainer>
  ) : null;
};

export default React.forwardRef(SideNav);
