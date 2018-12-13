import React from "react";
import styled from "styled-components";
import Input from "components/Input";
import { fadeIn } from "styled";

const Navbar = () => {
  return (
    <Nav>
      <Arrows>
        <i className="fas fa-chevron-left" />
        <i className="fas fa-chevron-right" />
      </Arrows>
      <Form>
        <Input />
      </Form>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  padding: 15px 0;
  align-items: center;
  justify-content: center;
  background-color: #111a1f;
  box-shadow: 0px -10px 25px black;
  animation: ${fadeIn} 2.5s;

  @media (min-width: 1025px) {
    padding: 25px 0;
    background-color: inherit;
    box-shadow: none;
    justify-content: space-between;
  }
`;

const Form = styled.form`
  width: 200px;

  @media (min-width: 1025px) {
    margin: 0 40px 0 0;
    width: 300px;
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
