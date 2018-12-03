import React, { useState } from "react";
import styled from "styled-components";

const Carousel = ({ items }) => {
  const position = usePosition(0, items);

  const nextSlide = () => {
    if (position.value < items.length) {
      position.setValue(position.value + 1);
    }
  };

  const prevSlide = () => {
    if (position.value > 0) {
      position.setValue(position.value - 1);
    }
  };

  return (
    <MovieList>
      <Title>Trending This Week</Title>
      <ButtonRight onClick={nextSlide}>
        <i className="fas fa-chevron-right" />
      </ButtonRight>
      <ButtonLeft onClick={prevSlide}>
        <i className="fas fa-chevron-left" />
      </ButtonLeft>
      <Movies position={position.value}>
        {items.map((item, index) => (
          <Movie key={index}>{item}</Movie>
        ))}
      </Movies>
    </MovieList>
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

const MovieList = styled.div`
  position: relative;
  width: auto;
  margin: 0 50px;
  overflow: hidden;
`;

const Title = styled.h2`
  color: #c0c9c1;
  font-size: 20px;
`;

const Movies = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  transform: translateX(${props => 0 - props.position * 250}px);
  transition: transform 0.5s;
`;

const Movie = styled.li`
  height: 200px;
  margin: 0 10px;
  background-color: grey;
  flex: 1 0 260px;
`;
