import React, { useState } from "react";
import styled from "styled-components";
import { fadeIn, slideInTop } from "components/animations";

const Carousel = ({ items }) => {
  const position = usePosition(0);

  const nextSlide = () => {
    const newPosition =
      position.value === items.length - 4 ? 0 : position.value + 1;
    position.setValue(newPosition);
  };

  const prevSlide = () => {
    const newPosition =
      position.value === 0 ? items.length - 4 : position.value - 1;
    position.setValue(newPosition);
  };

  return (
    <StyledCarousel>
      <Title>Trending This Week</Title>
      <ButtonRight onClick={nextSlide}>
        <i className="fas fa-chevron-right" />
      </ButtonRight>
      <ButtonLeft onClick={prevSlide}>
        <i className="fas fa-chevron-left" />
      </ButtonLeft>
      <Items position={position.value}>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </Items>
    </StyledCarousel>
  );
};

export default Carousel;

const usePosition = initialState => {
  const [value, setValue] = useState(initialState);
  return {
    value,
    setValue
  };
};

const ButtonRight = styled.button`
  font-size: 16px;
  padding: 10px 15px;
  background-color: #111a1f;
  color: white;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  bottom: 95px;
  outline: none;
  border: 0;
  cursor: pointer;
  z-index: 9999;
`;

const ButtonLeft = styled.button`
  font-size: 16px;
  padding: 10px 15px;
  background-color: #111a1f;
  color: white;
  border-radius: 4px;
  position: absolute;
  left: 20px;
  bottom: 95px;
  outline: none;
  border: 0;
  cursor: pointer;
  z-index: 9999;
`;

const StyledCarousel = styled.div`
  position: relative;
  width: auto;
  margin: 0 50px;
  overflow: hidden;
  animation: ${fadeIn} 3s, ${slideInTop} 3s;
`;

const Title = styled.h2`
  color: #c0c9c1;
  font-size: 20px;
`;

const Items = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  transform: translateX(calc(-${props => props.position * 280}px - 10px));
  transition: transform 0.5s;
`;

const Item = styled.li`
  height: 200px;
  margin: 0 10px;
  background-color: grey;
  flex: 1 0 260px;
  order: ${props => props.order};
`;
