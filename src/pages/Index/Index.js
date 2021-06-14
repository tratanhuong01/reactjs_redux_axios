import React, { Component, Fragment } from "react";
import Second from "../../containers/Second";
import MainIndex from "../../containers/Index/MainIndex";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
class Index extends Component {
  constructor(props) {
    super(props);
    this.closeModal();
  }
  getProductTopSell = (product) => {
    if (product.length > 0) this.props.getProductTopSell(product);
  };
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    this.getProductTopSell(this.props.product);
    return (
      <Fragment>
        <MainIndex />
        <Second />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getProductTopSell: (products) => {
      dispatch(actions.getProductTopSell(products));
    },
    closeModal: () => {
      dispatch(actions.closeModal());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
