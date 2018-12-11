import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import MovieList from "components/MovieList";

class Home extends Component {
  render() {
    if (this.props.categories.length === 0) {
      return null;
    }

    return (
      <Fragment>
        <MovieList
          categories={this.props.categories}
          items={this.props.movies}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ movies, categories }) => {
  return { movies, categories };
};

export default connect(mapStateToProps)(Home);
