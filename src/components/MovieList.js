import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Waypoint from "react-waypoint";
import MovieItem from "./MovieItem";
import { fadeIn, slideInTop } from "styled";

const MovieList = ({ items, categories, title, load }) => {
  const [showDetails, useShowDetails] = useState(false);
  const [page, usePage] = useState(1);
  return (
    <Fragment>
      <Title>{title}</Title>
      <Button active={showDetails} onClick={() => useShowDetails(!showDetails)}>
        Details
        {showDetails ? (
          <i className="far fa-eye-slash" />
        ) : (
          <i className="far fa-eye" />
        )}
      </Button>
      <StyledMovieList>
        {items.map((item, index) => (
          <MovieItem
            showDetails={showDetails}
            key={index}
            item={item}
            categories={categories}
          />
        ))}
        <Waypoint
          onEnter={() => {
            load(page + 1);
            usePage(page + 1);
          }}
        />
      </StyledMovieList>
    </Fragment>
  );
};

MovieList.propTypes = {
  items: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  load: PropTypes.func
};

MovieList.defaultProps = {
  load: () => {}
};

export default MovieList;

const Button = styled.button`
  display: none;

  @media (min-width: 1025px) {
    display: block;
    border: none;
    outline: none;
    color: ${props => (props.active ? "#00b7ff" : "#c0c9c1")};
    cursor: pointer;
    padding: 0;
    font-weight: 600;
    font-size: 12px;
    background-color: transparent;
    animation: ${fadeIn} 3s, ${slideInTop} 3s;
    transition: color 0.8s;

    i {
      margin-left: 5px;
    }
  }
`;

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
