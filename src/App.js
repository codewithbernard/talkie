import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { fetchTrendingMovies } from "actions";
const Layout = React.lazy(() => import("components/Layout"));

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTrendingMovies());
  }

  render() {
    return (
      <Suspense fallback={null}>
        <Layout />
      </Suspense>
    );
  }
}

export default connect()(App);
