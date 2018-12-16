import React, { Component, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "actions";
import history from "browserHistory";
const TrendingWeek = React.lazy(() => import("./TrendingWeek"));
const TrendingToday = React.lazy(() => import("./TrendingToday"));
const Layout = React.lazy(() => import("components/Layout"));

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    if (this.props.categories.length === 0) {
      return null;
    }

    return (
      <Router history={history}>
        <Suspense fallback={null}>
          <Layout key="layout">
            <Switch>
              <Route
                exact
                path="/"
                component={props => <TrendingWeek {...props} />}
              />
              <Route
                exact
                path="/today"
                component={props => <TrendingToday {...props} />}
              />
            </Switch>
          </Layout>
        </Suspense>
      </Router>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories };
};

export default connect(
  mapStateToProps,
  { fetchCategories }
)(App);
