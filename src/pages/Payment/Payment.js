import React, { Component } from "react";
import MainPayment from "../../containers/Payment/MainPayment";
import Second from "../../containers/Second";
class Payment extends Component {
  render() {
    return (
      <>
        <MainPayment />
        <Second />
      </>
    );
  }
}

export default Payment;
