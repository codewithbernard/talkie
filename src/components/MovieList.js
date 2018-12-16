import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieItem from "./MovieItem";
import { fadeIn, slideInTop } from "styled";

const MovieList = ({ items, categories, title }) => {
  return (
    <Fragment>
      <Title>{title}</Title>
      <StyledMovieList>
        {items.map((item, index) => (
          <MovieItem key={index} item={item} categories={categories} />
        ))}
      </StyledMovieList>
    </Fragment>
  );
};

MovieList.propTypes = {
  items: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default MovieList;

const Title = styled.h2`
  color: #c0c9c1;
  font-size: 20px;
  text-align: center;
  animation: ${fadeIn} 3s, ${slideInTop} 3s;

  @media (min-width: 1025px) {
    text-align: left;
  }
`;

const StyledMovieList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  animation: ${fadeIn} 3s, ${slideInTop} 3s;
  justify-content: center;

  @media (min-width: 1025px) {
    justify-content: flex-start;
  }
`;
