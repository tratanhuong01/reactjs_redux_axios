import React, { Component } from "react";
import MainCart from "../../containers/Cart/MainCart";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
class Cart extends Component {
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    this.closeModal();
    return (
      <>
        <MainCart />
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
export default connect(null, mapDispatchToProps)(Cart);
