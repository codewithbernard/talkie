import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "components/MovieList";
import { discoverByCategory } from "actions";

class Category extends Component {
  componentDidMount() {
    const { discoverByCategory, categoryId } = this.props;
    discoverByCategory(categoryId, 1);
  }

  render() {
    const { title } = this.props;
    const { discoverByCategory, categoryId } = this.props;
    return (
      <MovieList
        title={title}
        categories={this.props.categories}
        items={this.props.movies}
        load={page => discoverByCategory(categoryId, page)}
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
