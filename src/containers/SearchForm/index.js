import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import debounce from "lodash/debounce";

import { fetchSearchMovies } from "actions";

import Input from "components/common/Input";
import SearchList from "containers/SearchForm/SearchList";

const SearchForm = props => {
  const [show, setShow] = useState(false);
  return (
    <Form>
      <Input
        submit={debounce(props.fetchSearchMovies, 300)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      />
      <SearchList items={props.search} show={show} />
    </Form>
  );
};

const mapStateToProps = ({ search }) => {
  return {
    search
  };
};

export default connect(
  mapStateToProps,
  { fetchSearchMovies }
)(SearchForm);

const Form = styled.div`
  width: 200px;
  display: none;
  position: relative;

  @media (min-width: 1025px) {
    margin: 0 40px 0 0;
    width: 300px;
    display: block;
  }
`;
