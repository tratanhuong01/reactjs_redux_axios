import React, { Component } from "react";
import MainNews from "../../containers/News/MainNews";
import Second from "../../containers/Second";
class News extends Component {
  render() {
    return (
      <>
        <MainNews />
        <Second />
      </>
    );
  }
}

export default News;
