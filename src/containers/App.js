import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { fetchTrendingMovies } from "actions";
import Home from "./Home";
const Layout = React.lazy(() => import("components/Layout"));

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTrendingMovies());
  }

  render() {
    return (
      <Suspense fallback={null}>
        <Layout>
          <Home items={["1", "2", "3", "4", "5", "6"]} />
        </Layout>
      </Suspense>
    );
  }
}

export default connect()(App);
