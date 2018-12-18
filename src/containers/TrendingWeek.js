import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import MovieList from "components/MovieList";
import { fetchTrendingWeek } from "actions";

class TrendingWeek extends Component {
  componentDidMount() {
    this.props.fetchTrendingWeek(1);
  }

  render() {
    return (
      <Fragment>
        <MovieList
          title="Trending This Week"
          categories={this.props.categories}
          items={this.props.movies}
          load={this.props.fetchTrendingWeek}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ movies, categories }) => {
  return { movies, categories };
};

export default connect(
  mapStateToProps,
  { fetchTrendingWeek }
)(TrendingWeek);
