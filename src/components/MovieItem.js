import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { posterApi } from "const";

const MovieItem = ({ item, categories, showDetails }) => {
  const {
    original_title,
    poster_path,
    original_language,
    release_date,
    genre_ids,
    vote_average
  } = item;
  return (
    <StyledMovieItem className={showDetails && "show-details"}>
      <Poster url={poster_path} />
      <Title>{original_title}</Title>
      <Description>{`${getGenre(
        categories,
        genre_ids
      )} • ${release_date.substring(0, 4)}`}</Description>
      <Details>
        <DetailsItem color="#01CF75">
          {original_language.toUpperCase()}
        </DetailsItem>
        <DetailsItem color="#9045E0">{vote_average}</DetailsItem>
      </Details>
    </StyledMovieItem>
  );
};

const getGenre = (categories, genres) => {
  return categories[genres[0]] ? categories[genres[0]].name : "";
};

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  showDetails: PropTypes.bool
};

MovieItem.defaultProps = {
  showDetails: false
};

export default MovieItem;

const StyledMovieItem = styled.li`
  display: flex;
  flex: 0 0 220px;
  margin: 10px 10px;
  padding: 15px 0;
  background-color: inherit;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: #121b24;
  box-shadow: 0px 0px 20px #00000085;
  & p,
  & ul {
    opacity: 1;
  }

  @media (min-width: 1025px) {
    background-color: inherit;
    box-shadow: none;
    transition: background-color 0.5s, box-shadow 0.5s;

    & p,
    & ul {
      opacity: 0;
    }

    &:hover,
    &.show-details {
      background-color: #121b24;
      box-shadow: 0px 0px 20px #00000085;

      p,
      ul {
        opacity: 1;
      }
    }
  }
`;

const Poster = styled.div`
    background: url("${({ url }) => `${posterApi}/w185/${url}`}");
    height: 250px;
    width: 80%;
`;

const Title = styled.h4`
  color: white;
  margin: 10px 10px 5px 10px;
  text-align: center;
`;

const Description = styled.p`
  color: #4f5865;
  margin: 0 10px;
  opacity: 0;
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.5s;
  text-align: center;
`;

const Details = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0;
  opacity: 0;
  transition: opacity 0.5s;
`;

const DetailsItem = styled.li`
  color: white;
  margin: 0 5px;
  margin-top: 10px;
  font-size: 12px;
  background-color: ${props => props.color};
  padding: 3px 5px;
`;
