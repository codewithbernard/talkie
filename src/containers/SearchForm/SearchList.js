import React from "react";
import styled from "styled-components";

import { posterApi } from "const";

const SearchList = ({ items, show }) => {
  if (!show) {
    return null;
  }

  const renderItems = items
    .slice(0, 4)
    .map(
      ({
        id,
        original_title,
        original_language,
        release_date,
        poster_path
      }) => (
        <Item key={id}>
          <Image url={poster_path} />
          <Title>{original_title}</Title>
          <Details>
            <span>{original_language.toUpperCase()}</span>
            <span>{release_date.substring(0, 4)}</span>
          </Details>
          <Genres>Comedy • Action</Genres>
        </Item>
      )
    );

  return <StyledSearchList>{renderItems}</StyledSearchList>;
};

export default SearchList;

const Image = styled.div`
background-image: url("${({ url }) => `${posterApi}/w185/${url}`}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 50px;
  height: 60px;
  position: absolute;
  left: 10px;
`;

const StyledSearchList = styled.ul`
  padding: 0;
  border-radius: 0.5rem;
  background-color: #121b24;
  position: absolute;
  top: 25px;
  left: 0px;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 10px 70px;
  position: relative;
  cursor: pointer;

  &:nth-child(even) {
    background-color: #1b2b34;
  }

  &:last-child {
    background-color: #1b2b34;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  &:hover {
    h2 {
      color: #00b7ff;
    }
  }
`;

const Title = styled.h2`
  font-size: 0.8rem;
  margin: 0 0 5px 0;
  color: #5f5f61;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: color 0.5s;
`;

const Details = styled.div`
  span {
    color: white;
    font-size: 0.6rem;
    font-weight: bold;
    background-color: #9045e0;
    padding: 3px 4px;
    border-radius: 5px;
  }

  span:not(:first-child) {
    margin-left: 5px;
  }
`;

const Genres = styled.div`
  color: #4f5865;
  font-size: 0.8rem;
  margin-top: 6px;
`;
