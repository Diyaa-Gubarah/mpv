import Box from "../box/Box";
import CustomImage from "../image/Image";
import CustomLink from "../custom-link/CustomLink";
import { HiMenuAlt3 } from "react-icons/hi";
import images from "../../constants/images";
import styled from "styled-components";
import { withResponsive } from "../../hoc";

const LinkContainer = styled(Box)`
  @media only screen and (${`max-width:460px`}) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: none;
  @media only screen and (${`max-width:460px`}) {
    display: inline;
  }
`;

const Navbar = () => {
  return (
    <Box direction="row" js="space-between" al="center" height="auto">
      <CustomImage alt="logo" src={images.logo} height="3em" width="auto" />
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
      <MenuContainer>
        <HiMenuAlt3
          size={22}
          color="#fff"
          style={{ cursor: "pointer" }}
          onClick={() => {
            console.log("kjkj hkjhkjh");
          }}
        />
      </MenuContainer>
    </Box>
  );
};

export default Navbar;
