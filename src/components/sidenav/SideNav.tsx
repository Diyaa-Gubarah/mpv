import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const SideNavContainer = styled.div`
  width: 45%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #0006;
  overflow-x: hidden;
  z-index: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MenuIcon = styled.div`
  font-size: 36px;
  cursor: pointer;
  color: #fff;
  padding: 20px;
  &:hover {
    color: #ccc;
  }
`;

const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  display: block;
  padding: 20px;
  text-decoration: none;
  &:hover {
    color: #ccc;
  }
`;

type Props = {};

const SideNav: React.FC<Props> = (props) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  return visible ? (
    <SideNavContainer>
      <MenuIcon as={FaBars} />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </SideNavContainer>
  ) : null;
};

export default SideNav;
