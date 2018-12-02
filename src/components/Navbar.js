import React from "react";
import styled from "styled-components";
import Input from "components/Input";

const Navbar = () => {
  return (
    <Nav>
      <Form>
        <Input />
      </Form>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const Form = styled.form`
  margin: 20px 40px 0 0;
`;
