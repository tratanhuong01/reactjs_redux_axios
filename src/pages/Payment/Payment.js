import React, { Component } from "react";
import MainPayment from "../../containers/Payment/MainPayment";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
class Payment extends Component {
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    this.closeModal();
    return (
      <>
        <MainPayment />
        <Second />
      </>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    closeModal: () => {
      dispatch(actions.closeModal());
    },
  };
};
export default connect(null, mapDispatchToProps)(Payment);
