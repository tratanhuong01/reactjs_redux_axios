import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import ProductView from "../../DetailProduct/ProductView";
class ModalViewFastProduct extends Component {
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <div
        className="w-11/12 xl:w-8/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50"
      >
        <div className="w-full relative p-2 bg-white rounded-lg">
          <span
            onClick={this.closeModal}
            className="rounded-full py-0.5 pb-1.5 px-2.5 font-bold text-xl bg-gray-300 cursor-pointer
            hover:bg-gray-500 hover:text-white flex justify-center items-center absolute top-3 right-3"
          >
            &times;
          </span>
          <div className="w-full flex mt-5 mb-2">
            <ProductView />
          </div>
        </div>
      </div>
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
export default connect(null, mapDispatchToProps)(ModalViewFastProduct);
