import React, { Component, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "actions";
import history from "browserHistory";
import Layout from "components/Layout";
import { categories, categoryIds } from "const";
const TrendingWeek = React.lazy(() => import("./TrendingWeek"));
const TrendingToday = React.lazy(() => import("./TrendingToday"));
const Category = React.lazy(() => import("./Category"));

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    if (this.props.categories.length === 0) {
      return null;
    }

    const categoryRoutes = categories.map((item, index) => (
      <Route
        key={index}
        exact
        path={`/${item.value}`}
        component={props => (
          <Category
            title={item.label}
            categoryId={categoryIds[item.value]}
            {...props}
          />
        )}
      />
    ));

    return (
      <Router history={history}>
        <Layout key="layout">
          <Suspense fallback={null}>
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
              {categoryRoutes}
            </Switch>
          </Suspense>
        </Layout>
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
