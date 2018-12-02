import React, { Component, Suspense } from "react";
const Layout = React.lazy(() => import("components/Layout"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={null}>
        <Layout />
      </Suspense>
    );
  }
}

export default App;
