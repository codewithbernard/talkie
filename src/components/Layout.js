import React from "react";
import Sidenav from "./Sidenav";
import { categories } from "../const";

const Layout = ({ children }) => (
  <React.Fragment>
    <Sidenav items={categories} />
    {children}
  </React.Fragment>
);

export default Layout;
