import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { slideInRight, fadeIn } from "styled";

const Sidenav = ({ items }) => {
  const [active, setActive] = useState(items[0]);
  const [open, setOpen] = useState(false);

  const renderItems = items.map((item, index) => (
    <li
      key={index}
      onClick={() => setActive(item)}
      className={active === item ? "active" : ""}
    >
      {item}
    </li>
  ));
  return (
    <Fragment>
      <StyledSidenav open={open}>
        <Logo>Talkie</Logo>
        <MenuHeader>Categories</MenuHeader>
        <Menu>{renderItems}</Menu>
      </StyledSidenav>
      <ToggleButton onClick={() => setOpen(!open)}>
        {open ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
      </ToggleButton>
    </Fragment>
  );
};

export default Sidenav;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #c0c9c1;
  position: fixed;
  font-size: 24px;
  left: 15px;
  top: 15px;
  z-index: 999;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MenuHeader = styled.h4`
  color: #5f5f61;
  margin: 30px 0 15px 60px;
  animation: ${slideInRight} 2s, ${fadeIn} 2s;
`;

const Menu = styled.ul`
  color: #c0c9c1;
  list-style: none;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.6px;
  padding-left: 0px;
  animation: ${slideInRight} 2s, ${fadeIn} 2s;

  & > li {
    margin: 5px 0px;
    padding: 10px 0px 10px 60px;
    cursor: pointer;
    border-left: 3px solid transparent;
    transition: color 0.5s, border 0.5s;
    outline-width: 0;

    &.active {
      border-left: 3px solid #00b7ff;
      color: #00b7ff;
    }
  }
`;

const Logo = styled.div`
  color: #c0c9c1;
  font-family: "Indie Flower", cursive;
  text-align: center;
  vertical-align: middle;
  line-height: 120px;
  font-size: 38px;
  font-weight: bold;
  animation: ${fadeIn} 2s;
`;

const StyledSidenav = styled.aside`
  background-color: #111a1f;
  animation: ${slideInRight} 1s;
  overflow: overlay;
  flex: 0 0 250px;
  margin-left: ${({ open }) => (open ? 0 : -250)}px;
  transition: margin-left 1s;

  @media (min-width: 1025px) {
    margin-left: 0;
  }
`;
