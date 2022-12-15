// import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import React from "react";
// import styled from "styled-components";


// type SideProps = { } & React.RefAttributes<HTMLDivElement > |  {
//   open: ()=> void
//   ,close:()=>void
// };

// const SideNavContainer = styled.div`
//   width: 200px;
//   height: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: #333;
//   overflow-x: hidden;
//   padding-top: 20px;
// `;

// const MenuIcon = styled.div`
//   font-size: 36px;
//   cursor: pointer;
//   color: #fff;
//   padding: 20px;
//   &:hover {
//     color: #ccc;
//   }
// `;

// const NavLink = styled(Link)`
//   font-size: 18px;
//   font-weight: bold;
//   color: #fff;
//   display: block;
//   padding: 20px;
//   text-decoration: none;
//   &:hover {
//     color: #ccc;
//   }
// `;

// const SideNav: React.FC<SideProps> = React.forwardRef((props, ref) => {
//   const [show, setShow] = React.useState(false);

//   const open = React.useCallback(() => {
//     setShow(true);
//   }, [show]);

//   const close = React.useCallback(() => {
//     setShow(false);
//   }, [show]);

//   React.useImperativeHandle(ref, () => ({
//     open: () => {
//       open();
//     },
//     close: () => {
//       close();
//     },
//   }))

//   return (
//     <SideNavContainer ref={ref}>
//       <MenuIcon as={FaBars} />
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//     </SideNavContainer>
//   );
// };

// export default SideNav;


export default {}