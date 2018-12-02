import React from "react";
import styled from "styled-components";
import Sidenav from "components/Sidenav";
import Navbar from "components/Navbar";
import { categories } from "const";

const Layout = ({ children }) => (
  <React.Fragment>
    <Sidenav items={categories} />
    <Main>
      <Navbar />
      {children}
    </Main>
  </React.Fragment>
);

export default Layout;

const Main = styled.main`
  width: 100%;
`;
