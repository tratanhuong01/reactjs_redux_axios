import React, { Component, Fragment } from "react";
import Second from "../../containers/Second";
import MainIndex from "../../containers/Index/MainIndex";
class Index extends Component {
  render() {
    return (
      <Fragment>
        <MainIndex />
        <Second />
      </Fragment>
    );
  }
}

export default Index;
