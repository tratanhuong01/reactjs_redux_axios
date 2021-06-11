import React, { Component } from "react";
import MainDetailProduct from "../../containers/DetailProduct/MainDetailProduct";
import Second from "../../containers/Second";
class DetailProduct extends Component {
  render() {
    return (
      <>
        <MainDetailProduct match={this.props.match} />
        <Second />
      </>
    );
  }
}

export default DetailProduct;
