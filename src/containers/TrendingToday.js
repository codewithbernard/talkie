import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "components/MovieList";
import { fetchTrendingToday } from "actions";

class TrendingToday extends Component {
  componentDidMount() {
    // this.props.fetchTrendingToday();
  }

  render() {
    return (
      <MovieList
        title="Trending Today"
        categories={this.props.categories}
        items={[]}
      />
    );
  }
}

const mapStateToProps = ({ movies, categories }) => {
  return { movies, categories };
};

export default connect(
  mapStateToProps,
  { fetchTrendingToday }
)(TrendingToday);
