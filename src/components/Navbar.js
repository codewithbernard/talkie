import React from "react";
import styled from "styled-components";
import Input from "components/Input";
import { fadeIn } from "components/animations";

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
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 2.5s;
`;

const Form = styled.form`
  margin: 0 40px 0 0;
`;

const Arrows = styled.div`
  margin-left: 40px;

  & > i {
    color: ${props => (props.active ? "#00b7ff" : "#5f5f61")};
    font-size: 20px;
    margin-right: 15px;
    cursor: pointer;
  }
`;
