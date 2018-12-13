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
      <Article>{children}</Article>
    </Main>
  </React.Fragment>
);

export default Layout;

const Article = styled.article`
  margin-top: 80px;

  @media (min-width: 1025px) {
    margin-top: 0px;
  }
`;

const Main = styled.main`
  flex: 1 1 auto;
  overflow: auto;

  scroll-behavior: smooth;

  @media (min-width: 1025px) {
    padding-left: 60px;
  }
`;
