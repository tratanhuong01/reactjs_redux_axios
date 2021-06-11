import React, { Component } from "react";
import MainCart from "../../containers/Cart/MainCart";
import Second from "../../containers/Second";
class Cart extends Component {
  render() {
    return (
      <>
        <MainCart />
        <Second />
      </>
    );
  }
}

export default Cart;
