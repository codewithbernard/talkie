import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { fetchTrendingMovies, fetchCategories } from "actions";
const Home = React.lazy(() => import("./Home"));
const Layout = React.lazy(() => import("components/Layout"));

class App extends Component {
  componentDidMount() {
    this.props.fetchTrendingMovies();
    this.props.fetchCategories();
  }

  render() {
    return (
      <Suspense fallback={null}>
        <Layout>
          <Home />
        </Layout>
      </Suspense>
    );
  }
}

export default connect(
  null,
  { fetchTrendingMovies, fetchCategories }
)(App);
