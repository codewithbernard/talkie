import React from "react";
import Sidenav from "./Sidenav";

const Layout = ({ children }) => (
  <React.Fragment>
    <Sidenav />
    {children}
  </React.Fragment>
);

export default Layout;
