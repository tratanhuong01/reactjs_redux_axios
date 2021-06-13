import React, { Component } from "react";
import MainNews from "../../containers/News/MainNews";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
class News extends Component {
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    this.closeModal();
    return (
      <>
        <MainNews />
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
export default connect(null, mapDispatchToProps)(News);
