import React, { Component } from "react";
import MainListProduct from "../../containers/ListProduct/MainListProduct";
import Second from "../../containers/Second";
class ListProduct extends Component {
  render() {
    return (
      <>
        <MainListProduct />
        <Second />
      </>
    );
  }
}

export default ListProduct;
