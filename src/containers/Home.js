import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Carousel from "components/Carousel";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Carousel items={["1", "2", "3", "4", "5", "6"]} />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies };
};

export default connect(mapStateToProps)(Home);
