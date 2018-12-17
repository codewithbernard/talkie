import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "components/MovieList";
import { discoverByCategory } from "actions";

class Category extends Component {
  componentDidMount() {
    const { discoverByCategory, categoryId } = this.props;
    discoverByCategory(categoryId);
  }

  render() {
    return (
      <MovieList
        title="Trending Today"
        categories={this.props.categories}
        items={this.props.movies}
      />
    );
  }
}

const mapStateToProps = ({ movies, categories }) => {
  return { movies, categories };
};

export default connect(
  mapStateToProps,
  { discoverByCategory }
)(Category);
