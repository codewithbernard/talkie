import React from "react";
import styled, { keyframes } from "styled-components";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.items[0]
    };
  }

  render() {
    const renderItems = this.props.items.map(item => (
      <li
        key={item}
        onClick={() => this.setState({ active: item })}
        className={this.state.active === item ? "active" : ""}
      >
        {item}
      </li>
    ));
    return (
      <StyledSidenav>
        <Logo>Talkie</Logo>
        <MenuHeader>Categories</MenuHeader>
        <Menu>{renderItems}</Menu>
      </StyledSidenav>
    );
  }
}
export default Sidenav;

const slideInRight = keyframes`
  0% {
    transform: translate(-250px);
  }
  100% {
    transform: translate(0px);
  }
`;

const fadeIn = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const MenuHeader = styled.h4`
  color: #373a42;
  margin: 30px 0 15px 60px;
  animation: ${slideInRight} 2s, ${fadeIn} 2s;
`;

const Menu = styled.ul`
  color: white;
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

    &.active {
      border-left: 3px solid #00b7ff;
      color: #00b7ff;
    }
  }
`;

const Logo = styled.div`
  color: white;
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
  width: 250px;
  animation: ${slideInRight} 1s;
`;
