import React from "react";
import styled from "styled-components";
import { fadeIn } from "styled";
import SearchForm from "containers/SearchForm";

const Navbar = () => {
  return (
    <Nav>
      <Arrows>
        <i className="fas fa-chevron-left" />
        <i className="fas fa-chevron-right" />
      </Arrows>
      <Logo>Talkie</Logo>
      <SearchForm />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  padding: 15px 0;
  background-color: #111a1f;
  box-shadow: 0px -10px 25px black;
  animation: ${fadeIn} 2.5s;
  position: fixed;
  width: 100%;

  @media (min-width: 1025px) {
    padding: 25px 0;
    background-color: inherit;
    box-shadow: none;
    justify-content: space-between;
    display: flex;
    position: unset;
  }
`;

const Arrows = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: block;

    & > i {
      color: ${props => (props.active ? "#00b7ff" : "#5f5f61")};
      font-size: 20px;
      margin-right: 15px;
      cursor: pointer;
    }
  }
`;

const Logo = styled.div`
  color: #c0c9c1;
  font-family: "Indie Flower", cursive;
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  font-weight: bold;

  @media (min-width: 1025px) {
    display: none;
  }
`;
