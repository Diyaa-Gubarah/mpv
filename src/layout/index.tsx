import { Footer, Navbar } from "../components";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
