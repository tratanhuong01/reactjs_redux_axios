import React, { Component } from "react";
import MainAbout from "../../containers/About/MainAbout";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
class About extends Component {
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    this.closeModal();
    return (
      <>
        <MainAbout />
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
export default connect(null, mapDispatchToProps)(About);
